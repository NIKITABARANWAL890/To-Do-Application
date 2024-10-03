let inputElem = document.querySelector("#inputField");
let buttonClick = document.querySelector(".btn");
let addedtask = document.querySelector(".addedTask");

const addTodo = () =>{
    if(inputElem.value!=""){
        let todoTask = document.createElement("div");
    todoTask.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';

    let pElem = document.createElement("p");
    pElem.textContent = inputElem.value;
    todoTask.append(pElem);
    let deleteElem = document.createElement("button");
    deleteElem.textContent="Delete";
    deleteElem.style.cssText='padding: 0.6rem; border-radius: 4px; border:none; background-color:black; color: white; font-size:12px; cursor:pointer'

    deleteElem.addEventListener('click', () =>{
        todoTask.remove();
    })

    todoTask.append(deleteElem);
    addedtask.append(todoTask);
    inputElem.value="";
    }
};

buttonClick.addEventListener("click", ()=>{
    addTodo();
});


