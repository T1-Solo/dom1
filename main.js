let input = document.querySelector(".input")
let button  = document.querySelector(".button")

function handleClick(){
    console.log("ishladi");
   let inputValue = input.value
   console.log("inputValue")
}
button.addEventListener("click" , handleClick())