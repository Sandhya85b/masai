
function createCounter(){
    let count=0;
 
    return {
        increment(){
    count++;
    console.log(count)
},
         decrement(){
    count--;
    console.log(count)
}
}
}
let incount = createCounter()
incount.increment()
incount.increment()
incount.increment()
incount.decrement()
incount.decrement()
