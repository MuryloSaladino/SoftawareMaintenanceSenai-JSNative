const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")

inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    let ready = true
    
    inputs.forEach(element => {
      if(element.value.length == 0) ready = false;
    })

    if(ready) {
      button.classList.add("ready")
    } else {
      button.classList.remove("ready")
    }
  })
})
