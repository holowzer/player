// let nameArray=[]

const playlist = document.querySelectorAll('.js-audio')
const namePlaceHolder = document.querySelector(".musicName")
const musicWindow = document.querySelector('.futureTracks')
const ambianceWindow = document.querySelector('.futureAmbiances')
const audio = document.querySelectorAll('audio')
const playButton = document.querySelector('#playMeButton')
const pastOne = document.querySelector('#pastOne')
const nextOne = document.querySelector('#nextOne')
let trackIndex
const artworkPlaceHolder = document.querySelector('#artworkPlaceHolder')
const loadedContent=document.querySelector('.loadedContent')
const loadingScreen=document.querySelector('.loadingScreen')
const videoLoaded=document.querySelector('.videoLoaded')

// videoLoaded.addEventListener('loadeddata',()=>{
//     loadedContent.classList.add('allLoaded')
//     loadingScreen.style.display="none"
//     console.log("loaded")
// })

// the constructor for all the track's infos
class Song {
    constructor(music) {
        this.music = music
        this.songName = this.music.getAttribute("name")
        this.artwork = this.music.getAttribute("artwork")
        this.duration = this.music.duration
        this.songTime = this.music.currentTime
        this.volume = this.music.volume
        this.infoSpread()
        this.initiate()
    }

    // create all the div corresponding to the radio tracks

    initiate() {
        let newMusicInsight = document.createElement('div')
        newMusicInsight.classList.add('trackId')
        musicWindow.appendChild(newMusicInsight)
        let newMusicInsightContainer = document.createElement('div')
        newMusicInsightContainer.classList.add('playNext')
        newMusicInsight.appendChild(newMusicInsightContainer)
        let containerPlay = document.createElement('span')
        containerPlay.classList.add('flaticon-play-button')
        newMusicInsightContainer.appendChild(containerPlay)
        let insightTitle = document.createElement('div')
        insightTitle.classList.add('titleOfTrack')
        insightTitle.innerText = this.songName
        newMusicInsight.appendChild(insightTitle)
    }
    // giving the player the name and all informations about the track playing
    infoSpread() {

        this.music.addEventListener('play', () => {
            namePlaceHolder.innerText = this.songName
            artworkPlaceHolder.setAttribute('src', this.artwork)

        })
    }

}

// the constructor for all the track's infos
class Ambiance {
    constructor(ambiance) {
        this.ambiance = ambiance
        this.songName = this.ambiance.getAttribute("name")
        this.artwork = this.ambiance.getAttribute("artwork")
        this.duration = this.ambiance.duration
        this.songTime = this.ambiance.currentTime
        this.volume = this.ambiance.volume
        this.infoSpread()
        this.initiate()
    }

    // create all the div corresponding to the radio tracks

    initiate() {
        let newambianceInsight = document.createElement('div')
        newambianceInsight.classList.add('ambianceNoise')
        ambianceWindow.appendChild(newambianceInsight)
        let newambianceInsightContainer = document.createElement('div')
        newambianceInsightContainer.classList.add('playNext')
        newambianceInsight.appendChild(newambianceInsightContainer)
        let containerPlay = document.createElement('span')
        containerPlay.classList.add('flaticon-play-button')
        newambianceInsightContainer.appendChild(containerPlay)
        let insightTitle = document.createElement('div')
        insightTitle.classList.add('titleOfTrack')
        insightTitle.innerText = this.songName
        newambianceInsight.appendChild(insightTitle)
    }
    // giving the player the name and all informations about the track playing
    infoSpread() {

        this.ambiance.addEventListener('play', () => {
            namePlaceHolder.innerText = this.songName
            artworkPlaceHolder.setAttribute('src', this.artwork)

        })
    }

}

const song1 = new Song(document.querySelector('.js-audio0'))
const song2 = new Song(document.querySelector('.js-audio1'))
const song3 = new Song(document.querySelector('.js-audio2'))
const song4 = new Song(document.querySelector('.js-audio3'))
const song5 = new Song(document.querySelector('.js-audio4'))
const song6 = new Song(document.querySelector('.js-audio5'))
const song7 = new Song(document.querySelector('.js-audio6'))
const song8 = new Song(document.querySelector('.js-audio7'))
const song9 = new Song(document.querySelector('.js-audio8'))
const ambiance1 = new Ambiance(document.querySelector('.rain'))
const ambiance2 = new Ambiance(document.querySelector('.flight'))
const ambiance3 = new Ambiance(document.querySelector('.carRain'))


// logging the different tracks (could be improved by being automatic)

// setin up the whole playlist window

let trackId = document.querySelectorAll('.trackId')


for (let i = 0; i < trackId.length; i++) {


    trackId[i].addEventListener("click", () => {
        trackId.forEach(element => {
            element.classList.remove('hideStyleMusic')
            let contentName = trackId[i].querySelector('.titleOfTrack').innerHTML
            for (k = 0; k < audio.length; k++) {
                if (contentName == audio[k].getAttribute('name')) {
                    audio[k].play()
                    playButton.classList.remove('flaticon-play-button')
                    playButton.classList.add('flaticon-pause')

                } else {
                    audio[k].pause()
                }
            }
        })

        trackId[i].classList.add('hideStyleMusic')
    })

}


let ambianceNoise = document.querySelectorAll('.ambianceNoise')



for (let i = 0; i < ambianceNoise.length; i++) {


    ambianceNoise[i].addEventListener("click", () => {
        ambianceNoise.forEach(element => {
            element.classList.remove('hideStyleMusic')
            let contentName = ambianceNoise[i].querySelector('.titleOfTrack').innerHTML
            for (k = 0; k < audio.length; k++) {
                if (contentName == audio[k].getAttribute('name')) {
                    audio[k].play()
                    playButton.classList.remove('flaticon-play-button')
                    playButton.classList.add('flaticon-pause')

                } else {
                    audio[k].pause()
                }
            }
        })

        ambianceNoise[i].classList.add('hideStyleMusic')
    })

}
// change the play button   +   the whole play/pause fonctionnality
playButton.addEventListener('mousedown', () => {

    for (k = 0; k < audio.length; k++) {
        if (document.querySelector('.musicName').innerHTML == audio[k].getAttribute('name') && audio[k].paused == true) {
            audio[k].play()
            playButton.classList.remove('flaticon-play-button')
            playButton.classList.add('flaticon-pause')
            break
        }
        if (document.querySelector('.musicName').innerHTML == audio[k].getAttribute('name') && audio[k].paused == false) {
            audio[k].pause()
            playButton.classList.add('flaticon-play-button')
            playButton.classList.remove('flaticon-pause')
            break

        }

    }
})

// automatic play in case the listener don't want to do a choice in the playlist at start
playButton.addEventListener('mousedown', () => {
    if (document.querySelector('.musicName').innerHTML == "--:--") {
        audio[0].play()
        playButton.classList.remove('flaticon-play-button')
        playButton.classList.add('flaticon-pause')
        trackId[0].classList.add('hideStyleMusic')
    }
})


// RANDOMIZE
const playlistMusic = document.querySelectorAll('.playlistMusic')

for (i = 0; i < playlistMusic.length - 1; i++) {
    playlistMusic[i].addEventListener('ended', () => {
        let randomMe = parseInt(Math.random() * playlistMusic.length)
        if (playlistMusic[i] != playlistMusic[randomMe] && randomMe < 9) {
            playlistMusic[randomMe].play()
            trackId.forEach(Element => {
                Element.classList.remove('hideStyleMusic')
            })
            trackId[randomMe].classList.add('hideStyleMusic')
            trackId[i].classList.remove('hideStyleMusic')
        }

        // in case the random track is the same as previously
        else if (i == randomMe && randomMe > trackId.length - 1) {
            playlistMusic[randomMe - 1].play()
            trackId.forEach(Element => {
                Element.classList.remove('hideStyleMusic')
            })
            trackId[randomMe - 1].classList.add('hideStyleMusic')
        } else if (i == randomMe && randomMe < trackId.length + 1) {
            playlistMusic[randomMe + 1].play()
            trackId.forEach(Element => {
                Element.classList.remove('hideStyleMusic')
            })
            trackId[randomMe + 1].classList.add('hideStyleMusic')
        }





    })
}


class Player {
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer
        this.timer = this.musicPlayer.querySelector('.timer')
        this.timerFill = this.musicPlayer.querySelector('.timeFill')
        this.musicName = this.musicPlayer.querySelector('.musicName').innerText
        this.tracks = document.querySelectorAll('.playlistMusic')
        this.currentTrackName = 'none'
        this.currentTrackFile
        this.currentTrack()
        this.seekBar()
        this.past()
        this.next()
        this.volumeSettings()
        this.slomo()
        this.speedUp()
        this.normal()
        this.spaceBar()
    }
    // communicating with the class the currentrack info's
    currentTrack() {
        for (let i = 0; i < audio.length; i++) {
            audio[i].addEventListener('play', () => {
                for (let element of audio) {
                    this.musicName = this.musicPlayer.querySelector('.musicName').innerText
                    if (element.getAttribute('name') == this.musicName) {
                        this.currentTrackName = element.getAttribute('name')
                        this.currentTrackFile = element
                        return this.currentTrackFile
                    }
                }


            })
        }

    }
    volumeSettings() {
        const volumeBar = document.querySelector('.volumeBar')
        const volumeFillBar = document.querySelector('.volumeFillBar')
        volumeBar.addEventListener('click', (_event) => {
            const bounding = volumeBar.getBoundingClientRect()
            const windowRatio = (_event.clientX - bounding.left) / bounding.width
            const newVolume = windowRatio
            volumeFillBar.style.transform = "translateX(" + newVolume * 200 + "px)"
            for (let element of audio) {
                element.volume = newVolume
            }
        })

    }
    slomo() {
        const slowmo = document.querySelector('.slomo')
        slowmo.addEventListener('mousedown', () => {
            for (let element of audio) {
                element.playbackRate = 0.65
            }

        })
    }
    speedUp() {
        const speedUp = document.querySelector('.speedUp')
        speedUp.addEventListener('mousedown', () => {
            for (let element of audio) {
                element.playbackRate = 1.35
            }

        })

    }
    normal() {
        const normal = document.querySelector('.normal')
        normal.addEventListener('mousedown', () => {
            for (let element of audio) {
                element.playbackRate = 1
            }

        })

    }


    seekBar() {
        for (let i = 0; i < audio.length; i++) {
            audio[i].addEventListener('play', () => {
                // automate the timeBar
                if (this.currentTrackName != "none") {
                    this.currentTrackFile.addEventListener('timeupdate', () => {
                        this.currentTrackDuration = this.currentTrackFile.duration
                        this.currentTrackCurrentTime = this.currentTrackFile.currentTime
                        this.ratio = this.currentTrackCurrentTime / this.currentTrackDuration
                        this.timerFill.style.transform = "translateX(" + this.ratio * 170 + "px)"
                    })
                    // allow the click to set the time
                    this.timer.addEventListener('click', (_event) => {
                        const bounding = this.timer.getBoundingClientRect()
                        const windowRatio = (_event.clientX - bounding.left) / bounding.width
                        const time = windowRatio * this.currentTrackDuration
                        this.currentTrackFile.currentTime = time
                    })
                }
            })
        }
    }
    next() {
        let trackIndex
        nextOne.addEventListener('click', () => {
            for (i = 0; i < this.tracks.length; i++) {
                if (this.currentTrackFile == this.tracks[i]) {
                    trackIndex = i
                    break
                }
            }
            if (trackIndex > this.tracks.length - 2) {
                this.currentTrackFile.pause()
                trackId[i].classList.remove('hideStyleMusic')
                this.tracks[0].play()
                trackId[0].classList.add('hideStyleMusic')
                playButton.classList.remove('flaticon-play-button')
                playButton.classList.add('flaticon-pause')


            } else {
                this.currentTrackFile.pause()
                trackId[i].classList.remove('hideStyleMusic')
                this.tracks[trackIndex + 1].play()
                trackId[i + 1].classList.add('hideStyleMusic')
                playButton.classList.remove('flaticon-play-button')
                playButton.classList.add('flaticon-pause')


            }
        })
    }
    past() {
        pastOne.addEventListener('click', () => {
            for (i = 0; i < this.tracks.length; i++) {
                if (this.currentTrackFile == this.tracks[i]) {
                    trackIndex = i
                    break
                }
            }
            if (trackIndex < 1) {
                this.currentTrackFile.pause()
                trackId[i].classList.remove('hideStyleMusic')
                this.tracks[this.tracks.length - 1].play()
                trackId[this.tracks.length - 1].classList.add('hideStyleMusic')
                playButton.classList.remove('flaticon-play-button')
                playButton.classList.add('flaticon-pause')


            } else {
                this.currentTrackFile.pause()
                trackId[i].classList.remove('hideStyleMusic')
                this.tracks[trackIndex - 1].play()
                trackId[i - 1].classList.add('hideStyleMusic')
                playButton.classList.remove('flaticon-play-button')
                playButton.classList.add('flaticon-pause')

            }
        })

    }
    spaceBar() {

        document.body.onkeyup = (e) => {
            if (e.keyCode == 32) {
                if (this.currentTrackFile.paused) {
                    this.currentTrackFile.play()
                    playButton.classList.remove('flaticon-play-button')
                    playButton.classList.add('flaticon-pause')

                } else if (this.currentTrackFile.paused == false) {
                    this.currentTrackFile.pause()
                    playButton.classList.add('flaticon-play-button')
                    playButton.classList.remove('flaticon-pause')

                }
            }
        }
    }
}

// avoid spacebar scroll
window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};

const player1 = new Player(document.querySelector('.lofiMusicPlayer'))
const infoCross = document.querySelector('#infoAway')
const info = document.querySelector('.blackBg')
const infoButton = document.querySelector('#infoButton')
const settingsCross = document.querySelector('#settingsAway')
const settings = document.querySelector('.greyBg')
const settingsButton = document.querySelector('#settingsButton')
let settingsIsOpen = false
let infoIsOpen = false

document.addEventListener("click", (evt) => {
    if (settingsIsOpen == true) {

        const flyoutElement = document.querySelector(".settings");
        let targetElement = evt.target; // clicked element

        do {
            if (targetElement == flyoutElement) {
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);
        settingsIsOpen = false
        settings.style.display = 'none'
    }
});

document.addEventListener("click", (evt) => {
    if (infoIsOpen == true) {

        const flyoutElement = document.querySelector('.info')
        let targetElement = evt.target; // clicked element

        do {
            if (targetElement == flyoutElement) {
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);
        infoIsOpen = false
        info.style.display = 'none'
    }
});



infoCross.addEventListener('mousedown', () => {
    info.style.display = 'none'
    infoIsOpen = false
})
infoButton.addEventListener('mousedown', () => {
    info.style.display = 'flex'
    setTimeout(() => {
        infoIsOpen = true

    }, 300);


})
settingsCross.addEventListener('mousedown', () => {
    settings.style.display = 'none'
    settingsIsOpen = false
})
settingsButton.addEventListener('mousedown', () => {
    settings.style.display = 'flex'
    setTimeout(() => {
        settingsIsOpen = true
    }, 300);

})



// switch between ambiances and musics

const ambianceRoomButton = document.querySelector('.ambianceRoomButton')
const musicRoomButton = document.querySelector('.musicRoomButton')
const futureTracks = document.querySelector('.futureTracks')
const futureAmbiances = document.querySelector('.futureAmbiances')
const rainBackground = document.querySelector('.rainBackground')
const neonBackground = document.querySelector('.neonBackground')
const videoContainer = document.querySelector('.videoContainer')
const heart = document.querySelector('#heartIcon')


ambianceRoomButton.addEventListener('mousedown', () => {
    ambianceRoomButton.classList.remove('bypassedCategory')
    musicRoomButton.classList.add('bypassedCategory')
    futureTracks.style.display = 'none'
    futureAmbiances.style.display = 'block'
    videoContainer.classList.add('switchVideo')
    nextOne.style.opacity = 0
    pastOne.style.opacity = 0

    for (let element of audio) {
        element.pause()
        element.currentTime = 0
    }
    for (let element of trackId) {
        element.classList.remove('hideStyleMusic')
    }
})
musicRoomButton.addEventListener('mousedown', () => {
    ambianceRoomButton.classList.add('bypassedCategory')
    musicRoomButton.classList.remove('bypassedCategory')
    futureTracks.style.display = 'block'
    futureAmbiances.style.display = 'none'
    videoContainer.classList.remove('switchVideo')
    nextOne.style.opacity = 1
    pastOne.style.opacity = 1
    document.querySelector('.radioButtons').style.transform = ' translateX(0px)'


    for (let element of audio) {
        element.pause()
        element.currentTime = 0
    }
    for (let element of ambianceNoise) {
        element.classList.remove('hideStyleMusic')
    }
})