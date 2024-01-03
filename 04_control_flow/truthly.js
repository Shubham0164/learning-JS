const user = ""
if(user){     //Here we havent given any condition but the control flow self detects it as true and false 
    console.log("User is Logged in");
}else{
    console.log(`User is not Logged In`);
}

//There are some truthly and falsy values where the control flow determines condition as true and false 

//FALSY values
// false , 0 , -0 , "" , BigInt 0n, null , undefined , NaN

//TRUTHLY values
// "0", "false", " ", [], {}, function (){}

//Nullish Collesence Operator ??        // Generally used to avoid null or undefined conditions to prevent glitch in thre code 

// val1= 5??7

val1 = null ?? undefined ?? 5
console.log(val1)

//TERNIARY OPERATOR   ?

//condition ? true:false

const ticketFare = "1000"
ticketFare <= 500 ?console.log(`It is budget Friendly`) : console.log(`It is Costly`);