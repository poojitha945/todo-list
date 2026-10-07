const form=document.querySelector("form");
const input=document.querySelector("input");
const list=document.querySelector(".task-list");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const text=input.value.trim();
    if(text==="")
    {
        return;
    }
    const box=document.createElement("div");
    box.classList.add("task");
    const word=document.createElement("span");
    word.textContent=text;
    const button1=document.createElement("button");
    button1.textContent="Done";
    button1.type="button";
    const button2=document.createElement("button");
    button2.textContent="Delete";
    button2.type="button";
    box.appendChild(word);
    box.appendChild(button1);
    box.appendChild(button2);
    list.appendChild(box);
    
    input.value="";

    button1.addEventListener("click",function(){
        word.style.textDecoration="line-through";
    })
    button2.addEventListener("click",function(){
        box.remove();
    })
});