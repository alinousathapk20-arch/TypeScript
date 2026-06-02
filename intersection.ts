type Student = {name: string};
type Marks = {score: number};
type Report = Student & Marks;
let studentReport: Report ={ name: "kiran",score: 95};
console.log(studentReport);