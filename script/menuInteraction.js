const loadedContent=document.querySelector('.loadedContent')
const loadingScreen=document.querySelector('.loadingScreen')
const videoLoaded=document.querySelector('.videoLoaded')

window.addEventListener('load',()=>{
    loadedContent.classList.add('allLoaded')
    loadingScreen.style.display="none"
    console.log("loaded")
})




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

