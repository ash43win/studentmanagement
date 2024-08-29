const studentform = document.getElementById('studentform');
const studentlist = document.getElementById('studentlist');
const errordiv = document.getElementById('error');
const students=[];

studentform.addEventListener('submit',function(event)
{
    Event.preventDefault();
    const studentid=document.getElementById('studentid').value;
    const studentname=document.getElementById('studentname').value;
    const studentage=document.getElementById('studentage').value;

try{
    addstudent(studentid,studentname,studentage);
    displaystudents();
    errordiv.textContent='';
}
catch(error){
    errordiv.textContent=error.message;
}
studentform.requestFullscreen();
});

function addstudent(id,name,age){
    if(!id||!name||!age)
    {
        throw new error('All fields are required');
    }
    if(isNaN(age)||age<=0)
    {
        throw new error('Age must be a positive number');
    }
    const studentexists=student.some(student=>studentid==id);

if(studentexists){
    throw new error("Student ID already exists")
}
const student={
    id,
    name,
    age: parseInt(age,10)
    
};
student.push(student);
}
function displaystudents(){
    studentlist.innerHTML='';
    students.forEach(student=>{
        constli=document.createElement('li');
        li.textContent='ID:$(student.id),Name:${student.name},Age=${student.age}';
        studentlist.appendChild(li);
    });
}