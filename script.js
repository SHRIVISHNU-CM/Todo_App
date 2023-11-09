let btn = document.getElementById('btn');
let text = document.getElementById('text');
let render = document.querySelector('.render')
const tasks = JSON.parse(localStorage.getItem("tasks")) ||[]
btn.addEventListener('click',()=>{
  const inputext = text.value.trim()
  if(inputext === ""){
    alert("Enter Todo's")
  } else{
     const task = {text:inputext};
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks))

    display_items();
  }
 
})
function deleteitem(i){
    tasks.splice(i,1)
    localStorage.setItem("tasks",JSON.stringify(tasks));
    display_items();
}
function edit(i){
    const newtask = prompt("Edit Here..",tasks[i].text) 

    if(newtask !== null){
        tasks[i].text = newtask;
        localStorage.setItem("tasks",JSON.stringify(tasks))
        display_items()
    }
}
function display_items(){
    render.innerHTML = "";
    tasks.forEach((task,i)=>{
       
        render.innerHTML +=`
        <div class ="list"><div><p>${task.text}</p></div>
                <div class="options">
                    <span><button onclick = "edit(${i})" id="edit">Edit</button></span>
                    <span><button onclick="deleteitem(${i})" id="delete">Done</button></span>
                </div>
        <div/>`
    });
    text.value ="";

}