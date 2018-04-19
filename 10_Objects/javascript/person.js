// to comment select all Command Shift(flèche au dessus Fn) + /
// Javascript object 

 // 3 ways to create an object 
 // var student0 ={
 // 	firstName: "Magali",
 // 	lastName : "Drumare",	
 // 	age :  43
 // }; 

 // var student1 = new Object();
 // student1.firstName = "Leandre"; 
 // student1.lastName = "Bevernage"; 
 // student1.age = 7;

 // var student2 = {}; 
 // student2.firstName = "Appoline"; 
 // student2.lastName = "Bevernage"; 
 // student2.age = 3;

 // var students =[];
 // students.push(student0); 
 // students.push(student1);
 // students.push(student2);

 // for(var index = 0 ; index < students.length; index++){
 // 	console.log(students[index]);
 //}


 var students =[]; 

 function Student (firstName, lastName, age){
   this.firstName= firstName;
   this.lastName = lastName;
   this.age = age; 
   this. greetings = function(){
   	return "Hello " + this.firstName + ", your age is : " + this.age; 
   }

 }

students.push(new Student("Magali", "Drumare",43)); 
students.push(new Student("Leandre", "Bevernage", 8));
students.push(new Student("Apolline", "Bevernage",3));

for(index=0; index< students.length; index++){
	var student = students[index]; 
	console.log(student.greetings());
}

// var student = students[0]
// for(var key in student) {
// 	console.log(student[key]); 
// }