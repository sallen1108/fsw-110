var welcome = document.createElement("h1")
welcome.textContent = "Welcome to my JS site"
document.body.prepend(welcome)

var para = document.createElement("p")
para.textContent = "All of this was created with Javascript"
document.body.append(para)

var orderedList = document.createElement("ol")
document.body.appendChild(orderedList)

var newLi = document.createElement("li")
newLi.textContent = "milk"
orderedList.appendChild(newLi)

var newLi1 = document.createElement("li")
newLi1.textContent = "eggs"
orderedList.appendChild(newLi1)

var newLi2 = document.createElement("li")
newLi2.textContent = "bread"
orderedList.append(newLi2)