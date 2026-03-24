const form = document.querySelector("#addItemForm")
const ul = document.querySelector("#itemsList")

const newItemInput = document.querySelector("#newItemInput")

const alertArea = document.querySelector("#alertArea")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const newItem = {
    id: new Date().getTime(),
    item: newItemInput.value
  }

  listBuilder(newItem)
})

function listBuilder(textContent) {

  const li = document.createElement("li")
  li.classList.add("item")

  const div = document.createElement("div")
  div.classList.add("item-wrapper")  
  const inputCheckbox = document.createElement("input")
  inputCheckbox.setAttribute("type", "checkbox")
  inputCheckbox.classList.add("checkbox-input")
  inputCheckbox.setAttribute("id" ,`${textContent.id}`)


  const label = document.createElement("label")
  label.setAttribute("for", `${textContent.id}`)
  label.textContent = `${textContent.item}`

  const button = document.createElement("button")
  button.setAttribute("type", "button")
  button.classList.add("delete-btn")

  const deleteIcone = document.createElement("i")
  deleteIcone.classList.add("ph", "ph-trash")
  button.append(deleteIcone)

  div.append(inputCheckbox, label)
  li.append(div, button)

  ul.append(li)
  newItemInput.value = ""
  newItemInput.focus()
}

ul.addEventListener("click", (event) => {
  const target = event.target

  if(target.closest('.delete-btn')) {
    const li = target.closest(".item")
    li.remove()
    
    alertArea.classList.toggle("hide-alert")
  }

  if(target.classList.contains("checkbox-input")) {
    const label = target.nextElementSibling
    label.classList.toggle("checked")
  }
})

alertArea.addEventListener("click", () => {
  alertArea.classList.toggle("hide-alert")
})