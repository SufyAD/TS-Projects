"use strict";
//interface Employee {
//     id: number;
//     name: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class EmployeeData implements Employee {
//     public id: number;
//     static count: number=0;//cannot be accessed like a class property but with name -> EmployeeData.count
//     constructor(public name: string,) { 
//         this.id = ++EmployeeData.count;
//     };
//     public getId(){
//         console.log(`${this.name}: 00${this.id}`)
//     }
// }
// const E1 =  new EmployeeData("Sufyan");
// E1.getId()
// const E2 = new EmployeeData("Ahsan")
// E2.getId()
//UMS
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() { }
    ;
}
;
//declared students child class
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, roll) {
        super(name, age);
        this.rollNumber = roll;
    }
    getName() {
        return this.name;
    }
    ;
    registerForCourse(course) {
        this.courses.push(course);
    }
}
;
const std1 = new Student("Sufyan", 21, 20112);
const std2 = new Student("Meeshan", 20, 20091);
//declared insturctor child class
class Instructor extends Person {
    // name
    // age
    _salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this._salary = salary;
    }
    ;
    assignCourse(course) {
        this.courses.push(course);
    }
}
;
const ins1 = new Instructor("Zia", 56, 100000); //salary is private
const ins2 = new Instructor("Tauqeer", 49, 60000);
//created course class no blueprint
class Course {
    id;
    name;
    students = [];
    instructors = [];
    departments = [];
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    ;
    setInstructor(instructor) {
        if (instructor != null) {
            this.instructors.push(instructor);
            instructor.assignCourse(this); // check; pura object pass krdya automatic hogua ue to
        }
        else {
            throw new Error('Please select an instuctor for your course');
        }
    }
    ;
    addStudent(student) {
        if (student != null) {
            this.students.push(student);
            student.registerForCourse(this); // check; pura object pass krdya automatic hogua ue to
        }
        else {
            throw new Error('Please select an instuctor for your course');
        }
    }
    ;
    checkDepart(dep) {
        this.departments.push(dep);
        return this.departments;
    }
    ;
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        if (course != null) {
            this.courses.push(course);
            course.checkDepart(this); //automatically this deparmtent is added to that course
        }
        else {
            return new Error("Course must concerned with some departments");
        }
    }
    ;
}
;
const crs1 = new Course("Metaverse", 1);
const crs2 = new Course("Probability & Stats", 2);
const el = new Department("Elecrtonics");
el.addCourse(crs1); //metavere in electronics
crs1.setInstructor(ins1);
crs2.setInstructor(ins2);
crs1.addStudent(std1);
crs2.addStudent(std2);
// console.log("Hi");//check break line
console.log(ins1, ins2); //Zia, Tauqeer
console.log(std1, std2); //Sufyan, Meeshan
// console.log(crs1.departments[0]);check
