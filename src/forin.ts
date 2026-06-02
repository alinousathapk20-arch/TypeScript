let student = { name: "Ravi",age: 20,grade:"A"};

for(let key in student){
    console.log(key,":",student[key as keyof typeof student]);
}