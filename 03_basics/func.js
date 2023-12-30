// function subTwoNum(number1,number2){
//     console.log(number1-number2);
// }


// const result = subTwoNum(4,2)
// console.log("The Result is :",result);

//The console.log will not save your result so we have to use return so that the result could be saved for later use 

function subTwoNum(number1,number2){
    return number1-number2;
}
const result = subTwoNum(7,3);

//console.log("The result is :", result);

const myNewArray = [200, 400, 100, 600]

function returnThirdValue(getArray){
    return getArray[2]
}

console.log(returnThirdValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));