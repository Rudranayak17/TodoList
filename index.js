const title=document.querySelector("#title");
const description=document.querySelector("#description");
const btn=document.querySelector("button");
const form=document.querySelector("form")
const container=document.querySelector("#contain")

const Tasks=localStorage.getItem("Tasks")?JSON.parse(localStorage.getItem("Tasks") ):[];
ListTask()



function ListTask() {
  Tasks.forEach((value,index)=>{
    const div=document.createElement("div")
    div.setAttribute("class"," task flex mx-2 my-4 items-center bg-[burlywood] px-3 py-3")
    const innerDiv=document.createElement("div")
    innerDiv.setAttribute("class"," w-[100%] ")
    div.append(innerDiv)
    const p=document.createElement("p")
    p.setAttribute("class","my-4")
    p.innerText=value.title
    innerDiv.append(p)
    const span =document.createElement("span")
    span.innerText=value.description
   
    innerDiv.append(span)
 const button=document.createElement("button")
 button.setAttribute("class","mx-5 text-5xl text-white bg-red-500 ")
 button.innerHTML=`<i class="ri-delete-bin-fill"></i></button>`
 button.addEventListener("click",()=>{
  deleteTask()
  Tasks.splice(index,1)
  localStorage.setItem("Tasks",JSON.stringify(Tasks))
  ListTask()
 })
    div.append(button)

    container.append(div)
  })
}
function deleteTask() {
 
     {   Tasks.forEach(()=>{
            const div=document.querySelector(".task")
            div.remove()
        })}
   
}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    deleteTask()
    Tasks.push({
        title:title.value,
        description:description.value
    })
    localStorage.setItem("Tasks",JSON.stringify(Tasks))
    
    console.log(Tasks);
    ListTask()
})