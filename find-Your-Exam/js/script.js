function getExam(){

    fetch('db/schedule.json')
    .then(response => response.json())  
    .then(data => {
        const searchQuery = document.getElementById('search').value.trim().toLowerCase();
        const output = document.getElementById('Exam-Output');
            const result= data.find(
              exam=>{ return exam && exam.Course && exam.Date &&
                (exam.Course.toLowerCase().includes(searchQuery.toLowerCase())
            || exam.Date.includes(searchQuery)) });
           if(result){
                console.log(`Exam Found ${result.Course},${result.Date},${result.Section},${result['Start Time']},${result.Location}`);
                output.innerHTML=`
                <div class="alert alert-success">
                <h4>Exam Found!</h4>
                <p><strong>Course:</strong> ${result.Course}</p>
                <p><strong>Date:</strong> ${result.Date}</p>
                <p><strong>Section:</strong> ${result.Section}</p>
                <p><strong>[Time]:</strong> ${result['Start Time']}</p>
                <p><strong>Location:</strong> ${result.Location}</p>
            </div>`
            }else{
                console.log("exam not found");
                output.innerHTML="exam not found - lucky you!";
            }
    })
    .catch(error => console.error('Error loading the JSON file:', error));
}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
