// Fname = "sachintha";
// Lname = "thilakarathna";
// age = 22;
// number = 759917495;

// console.log("my name is" + " " + Fname)
// console.log("my last name is" + " " + Lname)
// console.log("my age is" + " " + age)
// console.log("my phone number is" + " " + number)

// const num1 = Number(prompt("Enter number 01"));
// const num2 = Number(prompt("Enter number 02"));
// const operater = prompt("enter operater \n +,-,*,**,/,% ");


// if(operater === "+"){
//     alert(num1+num2); 
// }
// else if(operater === "-"){ 
//     alert(num1-num2);
// }
// else if(operater === "*"){
//     alert(num1*num2);
// }
// else if(operater === "**"){
//     alert(num1**num2);
// }
// else if(operater === "/")
//     {
//         alert(num1%num2);
//     }
// else if(operater === "/")
// {
//     alert(num1/num2);
// }



function calage (birthyear) {
    const age = (2025-birthyear);
    return(age);
}  

const age = calage(2002);
console.log(age);