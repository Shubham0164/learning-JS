//Talking about the reduce function 
/* Using reduce function we have :-
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

*/

const account = [1,3,7,4]

const result = account.reduce((acc,currval)=>{
    // console.log(`The accumulator is ${acc} and the currentvalue is ${currval}`)
    return acc+currval;
},3 ) //Giving the initial value

// console.log(result)


//TALKING ABOUT THE OBJECTS AS THE ELEMENTS OF ARRAYS

const books =[
    {
        bookname : "Javascript",
        price :2599
    },
    {
        bookname : "Comics",
        price : 599
    },
    {
        bookname : "Personality",
        price : 3999
    }
]

const totBill = books.reduce((acc,item)=>(
    console.log(`acc: ${acc} and item: ${item.price}`),
    acc+item.price
),0)

console.log(`Total bill to pay is ${totBill}`)
