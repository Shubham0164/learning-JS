const myArr = ["javascript","Java","C++","python","C","Swift"]

myArr.forEach(function(num){
    console.log(num)
})

const keys = [1,2,3,4,5,6,7,8,9]

const result = keys.forEach((items)=>{
    // console.log(items>4)
    return items>4
})
console.log(result);     //Here the forEach condition fails and give the undefined as the result


// To overcome this situation where we want our iterated keys to be stored in a variable ... We will use filter

const levels = [5,6,3,9,4,1,7,8]

const final = levels.filter((content)=>{
    return content>4
})
console.log(final);