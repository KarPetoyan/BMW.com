//Burger
const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger_menu")
const burgerCancle = document.querySelector(".burger_cancle")

burger.addEventListener("click", ()=>{
    burgerMenu.classList.add("burger_menu-js")
})

burgerCancle.addEventListener("click", ()=>{
    burgerMenu.classList.remove("burger_menu-js")
})

//Serch
const serchIcon = document.querySelector(".header_serch_icon")
const serchDiv = document.querySelector(".header_serch_div")
const headerLi = document.querySelectorAll(".header_li")
const serchCancle = document.querySelector(".header_serch_cancle")

serchIcon.addEventListener("click", ()=>{
    serchDiv.classList.add("header_serch_div-js")
    headerLi.forEach((item)=>{
        item.classList.add("header_li-js")
    })
    serchIcon.classList.add("header_li-js")
    serchCancle.classList.add("header_serch_cancle-js")
})

serchCancle.addEventListener("click", ()=>{
    serchDiv.classList.remove("header_serch_div-js")
    headerLi.forEach((item)=>{
        item.classList.remove("header_li-js")
    })
    serchIcon.classList.remove("header_li-js")
    serchCancle.classList.remove("header_serch_cancle-js")
})