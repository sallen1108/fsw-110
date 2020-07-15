/* var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++){
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
} */


for (var i = 0; i < 10; i++){
    var newh1 = document.createElement("h1")
    newh1.textContent = "Hello World"
    document.body.append(newh1)
    newh1.style.backgroundColor = "#333";
    newh1.style.textAlign = "center";
}

var innerList = document.getElementById("list")

var newArray = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

for (var i = 0; i < newArray.length; i++){
    list.innerHTML += "<li>" + newArray[i] + "</li>"
}