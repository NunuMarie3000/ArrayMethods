//arrays are list objects
//make a classroom
'use strict'
let classroom = [];

//we need students
let student = ["Curtrick", "Zion", "Tyler", "Michael", "Storm", "Jordan", "Lindsey", "Lizzy"];

//add students to classroom

function addStudents(studentsArray, classroomArray){
    let greeting = "Hello World! My name is";
    if (studentsArray.includes("Lizzy")){
        studentsArray.pop("Lizzy");
    }
    for(let i = 0; i < studentsArray.length; i++){
            classroomArray.push(studentsArray[i]);
            console.log(greeting + " " +classroomArray[i]);
    }
}

//once students in classroom, greet the class
addStudents(student, classroom);

