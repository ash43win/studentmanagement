const studentform = document.getElementById('studentform');
const studentlist = document.getElementById('studentlist');
const errordiv = document.getElementById('error');
const students = [];

studentform.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentid = document.getElementById('studentid').value;
    const studentname = document.getElementById('studentname').value;
    const studentage = document.getElementById('studentage').value;

    try {
        addstudent(studentid, studentname, studentage);
        displaystudents();
        errordiv.textContent = '';
    } catch (error) {
        errordiv.textContent = error.message;
    }
});

function addstudent(id, name, age) {
    if (!id || !name || !age) {
        throw new Error('All fields are required');
    }
    if (isNaN(age) || age <= 0) {
        throw new Error('Age must be a positive number');
    }
    const studentExists = students.some(student => student.id === id);

    if (studentExists) {
        throw new Error('Student ID already exists');
    }
    const student = {
        id,
        name,
        age: parseInt(age, 10)
    };
    students.push(student);
}

function displaystudents() {
    studentlist.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
        studentlist.appendChild(li);
    });
}
