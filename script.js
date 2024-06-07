function createMarkRow(){
    let markRow = document.createElement('div');
    markRow.classList.add('mark-row');

    let subjectInput = document.createElement('input');
    subjectInput.placeholder = 'Subject Name';

    let markInput = document.createElement('input');
    markInput.placeholder = 'Mark';
    markInput.type = 'number';
    markInput.addEventListener('change', function(){
        updateGrade(this);
    });

    let grade = document.createElement('p');
    grade.innerText = 'N/A';

    markRow.append(subjectInput, markInput, grade);

    let markRowContainer = document.getElementById('mark-row-container');
    markRowContainer.appendChild(markRow);
}

function updateGrade(input){
    let grade = input.parentElement.querySelector('p');
    let marks = input.value;

    if (marks >= 90){
        grade.innerText = 'A';
    }else if (marks >= 60){
        grade.innerText = 'B';
    }else if (marks >= 55){
        grade.innerText = 'C';
    }else if (marks >= 35){
        grade.innerText = 'S';
    }else{
        grade.innerText = 'F';
    }
}

function calculateAverage(){
    let markInputes = document.querySelectorAll('.mark-row input[type="number"]');
    
    let totalMarks = 0;

    markInputes.forEach(function (input){
        totalMarks += parseInt(input.value);
    });

    let average = totalMarks / markInputes.length;
    document.getElementById('average').innerText = "Average Marks: " + average + "%";
}