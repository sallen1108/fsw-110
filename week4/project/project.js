document.getElementById("box1").style.backgroundColor = "#333";
document.getElementById("box1").style.height = "33%";
document.getElementById("box1").style.width = "auto";
document.getElementById("box1").style.margin = "10px";

document.getElementById("box2").style.backgroundColor = "blue";
document.getElementById("box2").style.height = "33%";
document.getElementById("box2").style.width = "auto";
document.getElementById("box2").style.margin = "10px";

document.getElementById("box3").style.backgroundColor = "red";
document.getElementById("box3").style.height = "33%";
document.getElementById("box3").style.width = "auto";
document.getElementById("box3").style.margin = "10px";

var input1 = document.createElement("input")
input1.setAttribute("value", "");
box1.appendChild(input1);
var input2 = document.createElement("input")
input2.setAttribute("value", "");
box1.appendChild(input2);
var button1 = document.createElement("button")
var button1Text = document.createTextNode("Submit");
button1.appendChild(button1Text);
box1.appendChild(button1);

var input3 = document.createElement("input")
input3.setAttribute("value", "");
box2.appendChild(input3);
var input4 = document.createElement("input")
input4.setAttribute("value", "");
box2.appendChild(input4);
var button2 = document.createElement("button")
var button2Text = document.createTextNode("Submit");
button2.appendChild(button2Text);
box2.appendChild(button2);

var input5 = document.createElement("input")
input5.setAttribute("value", "");
box3.appendChild(input5);
var input6 = document.createElement("input")
input6.setAttribute("value", "");
box3.appendChild(input6);
var button3 = document.createElement("button")
var button3Text = document.createTextNode("Submit");
button3.appendChild(button3Text);
box3.appendChild(button3);