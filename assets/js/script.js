Fname = "sachintha";
Lname = "thilakarathna";
age = 22;
number = 759917495;

console.log("my name is" + " " + Fname)
console.log("my last name is" + " " + Lname)
console.log("my age is" + " " + age)
console.log("my phone number is" + " " + number)

const num1 = Number(prompt("Enter number 01"));
const num2 = Number(prompt("Enter number 02"));
const operater = prompt("enter operater \n +,-,*,% ");


if(operater == "+"){
    console.log(num1+num2);
}
else if(operater == "-"){ 
    console.log(num1-num2);
}
else if(operater == "*"){
    console.log(num1*num2);
}
else if(operater == "%")
{
    console.log(num1%num2);
}
