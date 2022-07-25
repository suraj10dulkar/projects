var array=[];
window.onload= async () => {
    var response= await fetch("https://jsonplaceholder.typicode.com/todos");
    array= await response.json();
}

function showAll(){
    
    for(let i=0;i<array.length;i++){
        let object=array[i];
        let p=document.createElement("p");

        if(object.completed==true){
            p.style.color="green";
        }else{
            p.style.color="red";
        }

        p.innerHTML=object.title;

        document.body.appendChild(p);
    }
}

function completed(){
    
    for(let i=0;i<array.length;i++){
        let object=array[i];
        let p=document.createElement("p");

        if(object.completed==true){
            p.style.color="green";
            p.innerHTML=object.title;
            document.body.appendChild(p)
        }
    }
}

function pending(){
    
    for(let i=0;i<array.length;i++){
        let object=array[i];
        let p=document.createElement("p");

        if(object.completed==false){
            p.style.color="red";
            p.innerHTML=object.title;
            document.body.appendChild(p)
        }
    }
}