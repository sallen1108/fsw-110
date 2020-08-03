const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(form.gender.value)
    console.log(form.location.value)

    const checkedInputs = []

    for(let i = 0; i < form.diet.length; i++){
        console.log(form.diet[i].checked)
            if(form.diet[i].checked){
                checkedInputs.push(form.diet[i].value)
            }
        }

    console.log(checkedInputs)

    console.log(form.diet.value)
})

var firstName = document.getElementById("text-input")

firstName.value = ""

var lastName = document.getElementById("text-input2")

lastName.value = ""

var age = document.getElementById("text-input3")

age.value = ""

function myAlert() {
    alert("First name: " + firstName.value +
    "Last name: " + lastName.value  +
    "Age: " + age.value +
    "Gender: " + form.gender.value +
    "Location: " + form.location.value +
    "Dietary restrictions: " + form.diet.value);
}

