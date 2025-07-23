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
let addButton = document.querySelector(".team__add-button")
let name = addButton.parentElement.children[0].innerHTML
document.querySelector(".team__modal-message").innerHTML = `<b>${name}</b> has been added to your team`