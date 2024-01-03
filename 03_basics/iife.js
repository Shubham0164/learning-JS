//Immediately Invoked Function Expression


(function square(num){
//NAMED IIFE

    return(console.log(`The square of ${num} is`,num*num))
})(25);                                          /*Wrapping the function under (paranthesis) can lead 
to call the function wrapped immedeately*/

((num)=>{
    for(i=1;i<=10;i++){
        console.log(`The multiplication table of ${i} is following  `,num*i)
    }
}  //IIFE used with arrow function 

)(9);