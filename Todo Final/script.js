const input = document.getElementById('input');
const listcontainer = document.getElementById('listcontainer');

function add(){
    if(input.value === ""){
    alert("Enter any task");
}else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
}
input.value = "";
saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function display(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
display();
