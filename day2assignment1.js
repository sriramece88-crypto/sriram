//Charcteristics / Behaviour of var, let and constat the time of redeclaration , reassignment


//var redeclaration:

var username = "hello@testleaf.com" // declaration
var username ="helloteam@testleaf.com"//redeclaration
console.log(username);

//var reassignment:

// var password = "Testleaf#1234"//declaration and assigning a value
// password ="Testleaf@123"
// console.log(password);


//let redeclaration not possible

/* let accountBalance = 456754
let accountBalance=6789  */// redeclaration gives syntax error and will not allow you to execute the code

//let reassignment can be done
// let accountBalance = 456754
//  accountBalance=6789 
//  console.log(accountBalance);
 

 //const redeclaration is not allowed

/* const accountNumber = 878978789
const accountNumber=6789 */ // redeclaration gives syntax error and will not allow you to execute the code

//const reassignment
const accountNumber = 878978789 // reclaration
 //accountNumber=6789  // value reassigned


 //Initialization :

// var x // declaration without initilization possible in var
// let y // declaration without initilization possible in let
// const z // declaration without initilization is not possible in const

//Scoping in JS

//var scoping in block

//var companyName = "Testleaf" // global declaration

// if (true) {
//    var companyName = "Testleaf" // global declaration 
//    console.log("Accessing var inside the if block",companyName);  
// }

//  console.log("Accessing var outside the if block",companyName); //value declared with var is accessible outside the block

 //let block scoping

// if (true) {
//    let companyName = "Testleaf" 
//    console.log("Accessing let inside the if block",companyName);  
// }

//  console.log("Accessing let outside the if block",companyName); //value declared with let is not accessible outside the block


 //const block scoping

// if (true) {
//    const companyName = "Testleaf" 
//    console.log("Accessing let inside the if block",companyName);  
// }

//  console.log("Accessing let outside the if block",companyName); //value declared with const is not accessible outside the block


 //Introduce function block to know the behaviour of var, let and const

//  //var is function scoped

//  function greet(){

//     var message = "Hello Team"
//     console.log("Accessing var inside the function block",message);

//     if(true){
//         console.log("Accessing var inside the if block",message);
        
//     }
    
//  }
// console.log("Accessing var outside the function",message);

//  greet()

 //let is block scoped

 function greet(){

    let message = "Hello Team"
    console.log("Accessing let inside the function block",message);

    if(true){
        console.log("Accessing let inside the if block",message);
        
    }
    
 }
//Named Function

function PWNov25(){

console.log("Helloteam welcome ");

}

PWNov25()

//Call a function to execute the code inside the function block 

function PWNov25Args(a,b){ // FUnction definition (parameters)

   /*  let a=10
    let b=20 */
    c=a+b
    
console.log(c);
}

PWNov25Args(10,20)//Function call (argumemts)


//Call a function to execute the code inside the function block and return the value 

function PWNov25ArgsRe(a,b){ // FUnction definition (parameters)

   /*  let a=10
    let b=20 */
    c=a+b
    return c    
}

console.log(PWNov25ArgsRe(10,20))//Function call (argumemts)








