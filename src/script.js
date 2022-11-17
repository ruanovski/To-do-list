const taskbox = document.querySelector("#newTasks")


const Atv = []

function criar() {
  const newElement = document.createElement('div')
  const newTask = document.createElement('p')
  const newButton = document.createElement('button')
  newButton.innerHTML = "Concluido"
  newElement.setAttribute('class', 'Tasks')
  

  const inputItem = document.querySelector("#task-input")


  newButton.addEventListener("click", (e) => {
    
    const idDiv = parseInt(e.target.parentElement.id) 
    for(let i = 0; i < Atv.length; i++) {
      if(Atv[i].id === idDiv){
        Atv.splice(i, 1)
        newElement.remove(i)
      }
    }
  });

 
  
  const newItem = {
    id: Atv.length,
    value: inputItem.value
  }


  
  Atv.push(newItem)
  newElement.setAttribute('id', newItem.id)
  
  newTask.innerText = newItem.value
  newElement.appendChild(newTask)
  newElement.appendChild(newButton)
  taskbox.appendChild(newElement)
}




function ativarListeners() {
  document.querySelector(".taskvalue").addEventListener("submit", (e) => {
    e.preventDefault()   
    criar()
  })
}


ativarListeners()