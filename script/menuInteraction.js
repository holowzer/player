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

const loadedContent=document.querySelector('.loadedContent')
const loadingScreen=document.querySelector('.loadingScreen')
const videoLoaded=document.querySelector('.videoLoaded')

videoLoaded.addEventListener('loadeddata',()=>{
    loadedContent.classList.add('allLoaded')
    loadingScreen.style.display="none"
    console.log("loaded")
})
