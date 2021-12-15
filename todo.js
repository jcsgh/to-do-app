// todo list
const submitBtn = document.getElementById("add-task")
const taskValue = document.getElementById('task')
const todoList = document.getElementById('to-do')

function addTask(e){
    e.preventDefault();
    const todo = document.createElement('li');
    todo.textContent = taskValue.value;
    todo.onclick = toggleComplete;
    todoList.appendChild(todo);
}

function toggleComplete(){
    this.classList.toggle('complete')
}
submitBtn.addEventListener('click', addTask)



// food selector

const submitBtn2 = document.getElementById('get-food')
const cookie = document.getElementById("cookie")
const icecream = document.getElementById("icecream")
const sandwhich = document.getElementById("sandwhich")
const potato = document.getElementById("potato")

function getOrder(e) {
    e.preventDefault();
    const item = document.createElement("p")

    let totalItems = parseInt(cookie.value + icecream.value + sandwhich.value + potato.value)

    if (cookie.value <= 0 && icecream.value <= 0 && sandwhich.value <= 0 && potato.value <= 0) {
        item.textContent = "No order placed"
    } else {
        item.textContent = `You ordered ${totalItems} items: ${cookie.value} cookies, ${icecream.value} icecreams, ${sandwhich.value} sandwhiches, and ${potato.value} potatoes`
    }

    order.appendChild(item)
}

submitBtn2.addEventListener('click', getOrder)