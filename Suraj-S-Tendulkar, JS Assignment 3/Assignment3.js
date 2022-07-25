function canDrive(input){
let a=input.split(" ");
if(a[0]=="true"){
    if(a[1]=="true"){
        return "You can drive"
    }else if(a[2]=="fasle"){
        return "You can drive"
    }else if(a[1]=="false" && a[2]=="true"){
        return "You can drive"
    }else{
        return "You cannot drive"
    }
}else{
    return "You cannot drive"
}
}
console.log(canDrive("false false true"))
console.log(canDrive("true false true"))
console.log(canDrive("true true false"))
