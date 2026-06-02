/* let user ={
    name: "Alice",
    age: 30,
    email:"karan@gmail.com",
    address: "pune"
}
    console.log(user);
 */

    //explicit type
    let user1:{name:string,age:number}={
        name:"karan",
        age:30
    }
    //optional parameter
    let user2:{name:string,age:number,email:string}={
        name:"alice",
        age:30,
        email:"alice@gmail.com"
    }
    user2.email = "karan@gmail.com";

    console.log(user2);
    //readonly property
    let user3:{readonly name:string;age:number}={
        name:"bob",
        age:25
    };
    user3.age=30;
    console.log(user3);
    
    //nested object

    let user4:{
        name:"charlie",
        age:35,
        address:{
            city:"New York",
            country:"USA",
            pincode:10001
        }
    };
    
    //alisa type

    interface emp{
        readonly name: string;
        age: number;
        role?: string;
    }

    let employee1:emp={
        name:"karan",
        age:23,
        role:"Tester"
    }

    function PrintEmployeeDetails(employee:emp): void{
        console.log('Name:${employee.name}');
        console.log('Age :${employee.age');
        console.log('Role:${employee.role}');
        console.log('---------------------');
        console.log(employee);
    }
    PrintEmployeeDetails(employee1);
    for(let x in employee1){
        console.log(x,"\t",employee1[x as keyof emp ]);
    }