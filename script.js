
let students_cis2337 = ["Peter", "Paris", "Ben", "Soledad"];
let students_cis2348 = ["John", "Maria", "Trevor"];


function alert_function() {
    
    for (let i = 0; i < students_cis2337.length; i++) {
        console.log(students_cis2337[i]);
    }

    
    let totalStudents = students_cis2337.length + students_cis2348.length;

    
    alert("The total number of students is: " + totalStudents);
}
