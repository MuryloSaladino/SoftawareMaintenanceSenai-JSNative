const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const eyeIcon = document.querySelector(".eye")

inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    let ready = false
    
    if(inputs[0].value.length > 2 && inputs[1].value.length > 5) {
      ready = true
    }

    if(ready) {
      button.classList.add("ready")
    } else {
      button.classList.remove("ready")
    }
  })
})


eyeIcon.addEventListener("click", (e) => {
  if(inputs[1].type == "password") {
    inputs[1].type = "text"
  } else {
    inputs[1].type = "password"
  }
})