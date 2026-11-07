                    //    task1
let num=Number(prompt('Enter The Best Your Number'))
for(let x=1;x<=12;x++){
console.log(`${num}*${x}=${num*x}`);
}
                        // task2
for(let i=1;i<=50;i++){
    if(i%5 === 0){
        console.log(i);
        
    }
}
                    //  task3
let x=1;
while(x<=50){
    if (x%2 === 0){
        console.log(x);
        
    }
    x++
}
                    // task4
// let i=10;
// do{
//     console.log(i);
    
// //    x--;
// }while(i>=1)
//     console.log(`${"left off"}`);
                        //  task5
let greet=prompt("enter your name")
console.log(`Hello  ${greet} !!`);
                        //  task6
let number=(Math.floor(Math.random()*10+1));
console.log(number);
                        //    task7
let score=[100,70,40,60,30];
console.log(`max ${Math.max(...score)}`);
console.log(`min ${Math.min(score)}`);
                            // task8
let tempruture=-4.7
console.log(Math.abs(tempruture));
console.log(Math.ceil(tempruture));
console.log(Math.floor(tempruture));
console.log(Math.round(tempruture));
                        // task9
let user=prompt("Enter The Full Name");
console.log(user.trim());
console.log(user.length)
console.log(user.toUpperCase());
console.log(user.toLowerCase());
console.log(user.indexOf(" "));
console.log(user.split(" ")[0]);
                        // task10 
let names=['koko','kero','girges','kyriolls'];
let i=(Math.floor(Math.random() * names.length));
let t=names[i];
console.log("Rondom name:"+t);
                    //    task11
let employees=[
    {name: 'kiro',age: 15,sellary: 500000},
    {name: 'Adham',age: 20,sellary: 700000},
    {name: 'girges',age: 10,sellary: 800000}

]
for(i=0;i<employees.length;i++){
    console.log("Name:"+employees[i].name);
    console.log("age:"+employees[i].age);
    console.log("salary:"+employees[i].sellary);
    console.log("-------------");
    
}













                           

    
