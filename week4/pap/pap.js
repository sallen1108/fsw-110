document.getElementById("box").style.backgroundColor = "#333";
document.getElementById("box").style.height = "300px";
document.getElementById("box").style.width = "300px";

document.getElementById("box").addEventListener("mouseenter", function() {
    document.getElementById("box").style.backgroundColor = "blue";
})

document.getElementById("box").addEventListener("mousedown", function() {
    document.getElementById("box").style.backgroundColor = "red";
})

document.getElementById("box").addEventListener("mouseup", function() {
    document.getElementById("box").style.backgroundColor = "yellow";
})

document.getElementById("box").addEventListener("dblclick", function() {
    document.getElementById("box").style.backgroundColor = "green";
})

document.body.addEventListener("wheel", function() {
    document.getElementById("box").style.backgroundColor = "orange";
})

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 82){
        document.getElementById("box").style.backgroundColor = "red";
    }
    
})

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 89){
        document.getElementById("box").style.backgroundColor = "yellow";
    }
    
})

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 71){
        document.getElementById("box").style.backgroundColor = "green";
    }
    
})

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 79){
        document.getElementById("box").style.backgroundColor = "orange";
    }
    
})

document.body.addEventListener("keydown", function(a) {
    if (a.keyCode == 66){
        document.getElementById("box").style.backgroundColor = "blue";
    }
    
})