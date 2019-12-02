const menu = document.querySelector('.sideMenu')
const menuButtonOn = document.querySelector('.menuOpener')
const menuButtonOff = document.querySelector('.menuCloser')


menuButtonOn.addEventListener('click', () => {
    menu.classList.remove('slideInMenu')
    menuButtonOn.style.opacity = 0
})
menuButtonOff.addEventListener('click', () => {
    menu.classList.add('slideInMenu')
    menuButtonOn.style.opacity = 1

})