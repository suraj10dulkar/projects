let arr=[];
function FavouriteMovie(operation,movie){
    if(operation=="add"){
        arr.push(movie)
    }else if(operation=="remove"){
        arr.pop();
    }else{
        console.log("INVALID INPUT")
    }
    return arr;
}
console.log(FavouriteMovie("add","Lucy"));
console.log(FavouriteMovie("add","GodFather"))
console.log(FavouriteMovie("remove",""))