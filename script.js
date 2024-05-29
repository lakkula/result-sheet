function createMarkRow(){
    let markRow = document.createElement('div');
    markRow.classList.add('mark-row');

    let subjectInput = document.createElement('input');
    subjectInput.placeholder = 'Subject Name';

    let markInput = document.createElement('input');
    markInput.placeholder = 'Mark';
    markInput.type = 'number';

    let grade = document.createElement('p');
    grade.innerText = 'N/A';

    markRow.append(subjectInput, markInput, grade);

    let markRowContainer = document.getElementById('mark-row-container');
    markRowContainer.appendChild(markRow);
}