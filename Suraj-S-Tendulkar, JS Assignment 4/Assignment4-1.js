
function createObject(arr){
    var object={};
    let key=[];
    let value=[];
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            value.push(arr[i])
        }else{
            key.push(arr[i])
        }
    }
    return 123
}

let arr=["name","Yash","id","23442","email", "jon.doe@gmail.com"];
console.log(createObject(arr))