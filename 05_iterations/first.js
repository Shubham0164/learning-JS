for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log(`5 is detected `)
        continue
    }
    // console.log(`${i}`)
    
}

for (let i = 0; i <=5; i++) {
    for (let j = 0; j <=5; j++) {
        console.log(`The inner loop is ${j}`)
        
    }
    console.log(`The outer loop is ${i}`)
    
}