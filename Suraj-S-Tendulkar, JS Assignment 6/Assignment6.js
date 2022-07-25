function first(a,b,cb){
    let result=a+b;
    cb(result);
}

function cb(result){
    console.log(result)
}

first(5,8,cb)
first(3,7,cb)