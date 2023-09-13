let header = document.querySelector('.header__nav')
let burger = document.querySelector('.burger')

const showBurger = ()=>{
    header.classList.toggle('active')
        burger.classList.toggle('active')
}