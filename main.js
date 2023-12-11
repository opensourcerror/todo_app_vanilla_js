let input = document.querySelector(".input")
let submitBtn = document.querySelector(".submit")
let tasksList = document.querySelector(".tasks")

// daca exista in LS il iei de acolo, altminteri creezi un arr gol
let tasks =  localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

submitBtn.addEventListener('click', function(){
    addToList(input)
})

input.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        addToList(input)
    }
})

function addToList(todo){
    tasks.push(todo.value)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    todo.value = "" 
    location.reload() // reloads the page 
}

function displayTasks(){
    tasksList.innerHTML = "" //div i created in html as placeholder
    tasks.forEach( (task, idx) => {
        let div = document.createElement("div")
        div.className = `task ${task}`
        div.appendChild(document.createTextNode(task))

        let btn = document.createElement("button")
        btn.className = task
        btn.innerHTML = "Delete"
        div.appendChild(btn)
        deleteBtn(btn, idx)

        tasksList.appendChild(div)
        
    } )
}

displayTasks()

//stergi din arr localStorage
function deleteBtn(b, idx) {
    b.addEventListener('click', function(){
        tasks.splice(idx, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        location.reload()
    })
}