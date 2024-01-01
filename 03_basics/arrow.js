//'this' keyword ka use 

const info = {
    name : "Shubham ",
    branch : "CSE",

    welcomeMessage : function(){
        console.log( `${this.name}, welcome to the website` )
        // console.log(this)

    }

}
info.welcomeMessage()
console.log(this)  // returns empty{}

function user(){
    username : "shubham "
    /*console.log(`${this.username}, is the username of the user `)   /*this cannot be accesed directly
    when used inside the function WHEREAS when used inside the function can be accesed Easily*/ 
}
user()


//Arrow Function 

// const addTwo = function(num1,num2){
//     return num1+num2
// }
// console.log(addTwo(5,6))
//THIS IS THE BASIC FUNCTION DECLARATION


//=> this is the arrow function ... Using this also we can declare the functions 

// const addTwo = (num1,num2) =>  {
//     return num1+num2
// }
// console.log(addTwo(5,6))

const addTwo = (num1,num2)=> (num1+num2)
console.log(addTwo(6,8))