from flask import Flask, request, jsonify, render_template
from datetime import datetime
import numpy as np

app = Flask(__name__)

def calculate_priority(task):
    # Normalize values
    time_weight = 0.4
    effort_weight = 0.3
    cost_weight = 0.2
    urgency_weight = 0.1

    deadline = datetime.strptime(task['deadline'], '%Y-%m-%d')
    days_remaining = (deadline - datetime.now()).days
    urgency = 1 / (days_remaining + 1)

    priority_score = (
        (task['time'] * time_weight) +
        (task['effort'] * effort_weight) +
        (task['cost'] * cost_weight) +
        (urgency * urgency_weight)
    )
    
    return priority_score

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    tasks = request.json.get('tasks', [])
    
    # Calculate priority scores
    for task in tasks:
        task['score'] = calculate_priority(task)
    
    # Sort tasks by score
    sorted_tasks = sorted(tasks, key=lambda x: x['score'], reverse=True)
    
    # Create schedule
    MAX_HOURS = 8
    schedule = []
    current_time = 0
    
    for task in sorted_tasks:
        if current_time + task['time'] <= MAX_HOURS:
            schedule.append(task)
            current_time += task['time']
        else:
            break
    
    return jsonify({
        'schedule': schedule,
        'unscheduled': sorted_tasks[len(schedule):]
    })

if __name__ == '__main__':
    app.run(debug=True)