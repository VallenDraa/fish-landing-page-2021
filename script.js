const hamburger = document.querySelector(".fa-bars")
const x = document.querySelector(".fa-times")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", function(){
    menu.style.left = "50%"
})

x.addEventListener("click", function(){
    menu.style.left ="100%"
})