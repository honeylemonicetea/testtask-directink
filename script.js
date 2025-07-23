// about
let aboutButton = document.querySelector(".about-link")
let aboutContent = document.querySelector(".nav__about-content")

aboutButton.onclick = function(){
    aboutContent.classList.toggle("about_open")
}

// кнопка вверх
let team = document.querySelector(".team")
let menuHeight = document.querySelector(".nav").clientHeight
let upButton = document.querySelector(".up-button")

document.onscroll=function(){
    if (team.getBoundingClientRect().top < menuHeight){
        upButton.style.display = 'flex'
    } else {
        upButton.style.display = 'none'

    }
}

// модальное окно
//открыть
let addButton = document.querySelectorAll(".team__add-button")
let modal = document.querySelector(".team__modal")

function openModal(event){
    modal.style.display = 'flex'    
    let name = event.target.parentElement.children[0].innerHTML
    document.querySelector(".team__modal-message").innerHTML = `<b>${name}</b> has been added to your team`
}

addButton.forEach(button=>{
    button.addEventListener("click", openModal)
})

// закрыть

modal.onclick =  function(event){
    if (event.target.classList.contains("team__modal") || event.target.classList.contains("team__modal-close")){
        modal.style.display = 'none'
    }
}

// год
let year = document.querySelector(".footer__copyright-year")
year.innerHTML = new Date().getFullYear()

// бургер меню

let burgerButton = document.querySelector(".nav__burger-button")
let burgerContainer = document.querySelector(".nav__burger")
let menuLinks = burgerContainer.querySelectorAll("a")

burgerButton.onclick = function(){
    burgerContainer.classList.toggle("nav__burger_open")
}

menuLinks.forEach(link => {
    link.onclick = function(){
        burgerContainer.classList.remove("nav__burger_open")
        aboutContent.classList.remove("about_open")
    }
})