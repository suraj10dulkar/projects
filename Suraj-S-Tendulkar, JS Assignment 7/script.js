
function addtodo(){
    let list=document.getElementById("input1").value;
    if(list==null || list==""){
        alert("Please Enter the Task")
    }else{
        document.getElementById("input1").value=""
    }
    let p=document.createElement("p");
    p.innerHTML=list;
    document.body.appendChild(p)

    p.addEventListener("click",remove)

    let div=document.getElementById('tasklist')
    div.appendChild(p);

}

function remove(e){
    let div=document.getElementById('tasklist');
    div.removeChild(e.target)
}