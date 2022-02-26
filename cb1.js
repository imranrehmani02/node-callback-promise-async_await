
//**       CALLBACK       **//


const students = [

	{name : 'Atif', subject : 'Mean Stack'},
	{name : 'Nabiya', subject : 'Spring boot'}
]

function enrollStudent(student,getStudent)       //getStudent is callback
{
	setTimeout(function()
	{
		students.push(student);
		console.log('Student has been enrolled');
		console.log(' ');
	},2000)
	getStudent()
}

function getStudent()
{
	setTimeout(function()
	{
		students.forEach(function(students)
		{
			console.log('Name : '+students.name+', Subject : '+students.subject)
		})
		console.log(' ');
		console.log("Students have been fetched");
	},3000)
}

let newStudent = { name : 'Aman', subject : 'Python'}

enrollStudent(newStudent,getStudent);