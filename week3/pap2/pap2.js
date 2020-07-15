for (var i = 0; i < 5; i++){
    var newh2 = document.createElement("h2")
    newh2.textContent = "Can't believe I'm not an idiot"
    document.body.append(newh2)
    newh2.className = "header"
    newh2.style.fontSize = "20px"
    newh2.style.fontWeight = "lighter"
    newh2.style.fontFamily = "sans-serif"
    newh2.style.color = "cornflowerblue"
    
}

document.querySelector("#header").classList.add("border")