function shuffleTasks() {
    const input = document.getElementById('taskInput').value.trim();
    const tasks = input.split('\n').filter(task => task.trim() !== '');
  
    if (tasks.length === 0) {
      alert('Please enter some tasks!');
      return;
    }
  
    const reasons = [
      "Best time to tackle this!",
      "You'll feel energized after this!",
      "A quick win!",
      "Stay ahead of the game!",
      "Momentum matters!"
    ];
  
    // Shuffle tasks
    for (let i = tasks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }
  
    // Display 
    const output = tasks.map((task, index) => {
      const reason = reasons[Math.floor(Math.random() * reasons.length)];
      return `${index + 1}. ${task} - ${reason}`;
    }).join('<br>');
  
    document.getElementById('shuffledTasks').innerHTML = output;
  }
  