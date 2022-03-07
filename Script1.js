const amount = 12
if(amount<10)
console.log('small no')
else
console.log('large no')

console.log('hey its my first node app')

console.log(__dirname) // globals

setInterval(()=>{
    console.log('hello world')
    
},1)

const num1=1
const num2=9

function addvalue(){
    console.log(num1+num2)
}

addvalue() // not using module
