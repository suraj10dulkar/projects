
function convertobject(arr){
    var object={}
    for(let i=0;i<arr.length;i=i+2){
        (object[arr[i]]=arr[i+1]);
    }
    
    return object;
}

let arr1=["name","Yash","id","23442","email", "jon.doe@gmail.com"];
let arr2=["maruti","omni","tata","indica","ford","figo"]
console.log(convertobject(arr1))
console.log(convertobject(arr2))
