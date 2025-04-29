var tasks =[];

function addTask() {
    const taskContainer = document.getElementById('task-container');
    const newTask = document.createElement('div');
    newTask.className = 'task-card';
    newTask.innerHTML = `
        <input type="text" placeholder="Task name" class="task-name">
        <div class="task-properties">
            <label>Time (hours): <input type="number" class="time" value="1" min="1"></label>
            <label>Effort (1-5): <input type="number" class="effort" value="1" min="1" max="5"></label>
            <label>Cost ($): <input type="number" class="cost" value="0" min="0"></label>
            <label>Deadline: <input type="date" class="deadline"></label>
            <button class="remove-btn" onclick="removeTask(this)">×</button>
        </div>
    `;
    tasks.push(taskContainer.appendChild(newTask))
}

function removeTask(btn) {
    btn.closest('.task-card').remove();
}

async function getRecommendation() {
    const tasks = Array.from(document.querySelectorAll('.task-card')).map(task => {
        return {
            name: task.querySelector('.task-name').value,
            time: parseFloat(task.querySelector('.time').value),
            effort: parseFloat(task.querySelector('.effort').value),
            cost: parseFloat(task.querySelector('.cost').value),
            deadline: task.querySelector('.deadline').value
        };
    });

    try {
        const response = await fetch('/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tasks })
        });
        
        const result = await response.json();
        displayRecommendation(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayRecommendation(data) {
    const container = document.getElementById('recommendation');
    let html = '<h2>Recommended Schedule</h2>';
    
    if (data.schedule.length > 0) {
        html += '<div class="schedule">';
        data.schedule.forEach(task => {
            html += `
                <div class="scheduled-task">
                    <h3>${task.name}</h3>
                    <p>Time: ${task.time} hours</p>
                    <p>Priority Score: ${task.score.toFixed(2)}</p>
                </div>
            `;
        });
        html += '</div>';
    }
    
    if (data.unscheduled.length > 0) {
        html += '<div class="unscheduled"><h3>Tasks for Another Day:</h3><ul>';
        data.unscheduled.forEach(task => {
            html += `<li>${task.name}</li>`;
        });
        html += '</ul></div>';
    }
    
    container.innerHTML = html;
}