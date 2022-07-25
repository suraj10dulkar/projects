let n=3;
let arr=[1,3,4,6,7];


function getEven(arr){
    let evenArray= arr.filter((x)=>x%2==0)
    console.log(evenArray)
}
getEven(arr)

function multiplyByN(arr,n){
    let multiply=arr.map((x)=>x*n)
    console.log(multiply)
}
multiplyByN(arr,n)

arr.splice(n,1)
console.log(arr)