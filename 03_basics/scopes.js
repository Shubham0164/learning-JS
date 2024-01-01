//Talking about the global and local scope 

function addOne(num){
    return num+1;
}
addOne(5)

// const addTwo = function(num){
//     return num+2;
// }
// console.log(addTwo(5))

//***************INTERESTING***********//
addOne(5)
function addOne(num){
    return num+1;
}

// console.log(addTwo(5))       YE NAI HO SAKTA 
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5))

/*Here we see that the function we declared directly has no issue if we call it even before its declaration WHEREAS 
declaring the function wrapped up in a const variable then we cannot call it before the const function declaration */

if(true){
    const name = "shubham "
    if(name === "shubham "){
        const college = " C. V. Raman Global University"  
        console.log(name + "studies in" +college)
    }
    console.log("My name is ",name)
}
// console.log(name)        OUT OF THE SCOPE
