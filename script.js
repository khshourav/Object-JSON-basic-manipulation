function students_data(ID, Name, Class, Section, Subject, Result) {
    this.stID = ID;
    this.stName = Name;
    this.stClass = Class;
    this.stSection = Section;
    this.stSubjects = Subject;
    this.stResult = Result;
}

let st1 = new students_data("022",'Shadid','5','Jupiter', ["bangla",'English','Math'] ,'pass' ); 

// console.log(st1.stName, st1.stSection, st1.stSubjects[1])
let abc = require('./index.json');
let Students = require('./Student.json');
console.log(Students);

