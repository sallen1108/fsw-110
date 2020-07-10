var navbar = document.createElement("ul")
document.body.prepend(navbar)
navbar.style.listStyleType = "none";
navbar.style.height = "auto";
navbar.style.backgroundColor = "#333";
navbar.style.fontSize = "xx-large";
navbar.style.overflow = "hidden";
navbar.style.textAlign = "center";

var child1 = document.createElement("a")
child1.href = "https://www.youtube.com/watch?v=1WXo6nkRdoA"
child1.textContent = "HOME"
navbar.append(child1)
child1.style.display = "inline-block";

var child2 = document.createElement("a")
child2.href = "youtube.com/watch?v=2S-MbldB6R0"
child2.textContent = "ABOUT"
navbar.append(child2)
child2.style.display = "inline-block";
child2.style.paddingLeft = "40px";

var child3 = document.createElement("a")
child3.href = "https://www.youtube.com/watch?v=YA5AEGwFsuU"
child3.textContent = "CONTACT"
navbar.append(child3)
child3.style.display = "inline-block";
child3.style.paddingLeft = "40px";

var h1 = document.createElement("h1")
h1.textContent = "My Website"
document.body.append(h1)
h1.style.textAlign = "center";

var para = document.createElement("p")
para.textContent = "Welcome to my JS website"
document.body.append(para)
para.style.textAlign = "center";

//list
var list = document.createElement("ol")
document.body.append(list)

var li1 = document.createElement("li")
li1.textContent = "item 1"
list.append(li1)

var li2 = document.createElement("li")
li2.textContent = "item 2"
list.append(li2)

var li3 = document.createElement("li")
li3.textContent = "item 3"
list.append(li3)

//footer
var footer = document.createElement("p")
footer.textContent = "My Footer"
document.body.append(footer)
footer.style.backgroundColor = "#333";
footer.style.height = "auto";
footer.style.textAlign = "center";