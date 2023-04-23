//interface Employee {
//     id: number;
//     name: string;
// }

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
abstract class Person {
    constructor(
        public name: string,
        public age: number,
    ) { }
    getName() { };
};
//declared students child class
class Student extends Person {
    rollNumber: number;
    courses: Course[] = [];
    constructor(name: string, age: number, roll: number) {
        super(name, age);
        this.rollNumber = roll;
    }
    public getName() {
        return this.name;
    };
    public registerForCourse(course: Course) {
        this.courses.push(course);
    }
};
const std1 = new Student("Sufyan", 21, 20112);
const std2 = new Student("Meeshan", 20, 20091);

//declared insturctor child class
class Instructor extends Person {
    // name
    // age
    salary: number;
    courses: Course[] = []
    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    };
    public assignCourse(course: Course) {
        this.courses.push(course)
    }
};
const ins1 = new Instructor("Zia", 56, 100000);
const ins2 = new Instructor("Tauqeer", 49, 60000);

//created course class no blueprint
class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructors: Instructor[] = [];
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    };
    setInstructor(instructor: Instructor) {
        if(instructor != null){
            this.instructors.push(instructor);
            instructor.assignCourse(this) // check; pura object pass krdya automatic hogua ue to
        }
        else{
            throw new Error('Please select an instuctor for your course')
        }
    };
    addStudent(student: Student) {
        if(student != null){
            this.students.push(student);
            student.registerForCourse(this) // check; pura object pass krdya automatic hogua ue to
        }
        else{
            throw new Error('Please select an instuctor for your course')
        }
     };
};

class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name;
    }
    setCourse() { };
};

const crs1 = new Course("Metaverse", 1);
const crs2 = new Course("Web & App Development", 2);
crs1.setInstructor(ins1);
console.log(ins1, ins2);
crs1.addStudent(std1)
console.log(std1, std2);
