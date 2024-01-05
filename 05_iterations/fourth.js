const marks = [98,56,93,86,72,85,83,99,63]

//CHAINING : .map().map().map().filter()

const result = marks
                    .map((num)=>{return num/110})
                    .map((num)=>{return num*100})
                    .filter((num)=>{
                        return num>=70 && num<90
                    })

console.log(`The results greater than 80% are : ${result}`)

