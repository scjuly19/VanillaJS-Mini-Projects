const addButton=document.querySelector('.todo-add-button');
const input=document.querySelector('.todo-input');
const todoList=document.querySelector(".todo-list-item");
let count=localStorage.getItem('count')||0;
document.body.onload=getListData;
function getListData(){
   for(let i=0;i<localStorage.length-1;i++){
      const val=localStorage.getItem(`id-${i}`);
       createNewNode(val);
   }
}
function createNewNode(value){
    let node=document.createElement("li");
        node.className="todo-list-item-body"
        node.innerHTML=value;
        todoList.appendChild(node)
}
addButton.addEventListener("click",()=>{
    if(!input.value){
         alert('Please enter a task!');
         return;
    }
    else if(count<10){
        const inputVal=input.value;
        createNewNode(inputVal);
        localStorage.setItem(`id-${count}`,inputVal);
        count++;
        localStorage.setItem('count',count);
        input.value="";
    }
    else{
        alert('Maximum of 10 items can be added!')
    }
});

