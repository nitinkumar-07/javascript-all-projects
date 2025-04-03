const inputbox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


const addTodo = ()=>{
    const inputText = inputbox.value.trim();
    if(inputText.length <=0){
        alert("You must write something in your to do")
        return false;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);
    
    const editBtn  = document.createElement("button")
    editBtn.innerText = "Edit";  
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    const deleteBtn  = document.createElement("button")
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputbox.value = "";
}
addBtn.addEventListener("click",addTodo);
