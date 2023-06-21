// console.log("Hello world")

// footer section script 
var currentYear = new Date().getFullYear();
document.getElementById("footerPara").innerHTML = "Copyright &copy;" + currentYear + " by Prince Sunsara";

// playlist section script
let songs = [
    { songName: "Aye Zindagi 1920 Horrors of the heart", filePath: "/songs/Aye Zindagi 1920 Horrors Of The Heart.mp3", coverPath: "images/covers/aye Zindagi.jpeg" },
    { songName: "Chasni song - Bharat", filePath: "/songs/Chasni.mp3", coverPath: "/images/covers/Chasni.jpeg" },
    { songName: "Dancing with your ghost", filePath: "/songs/Dancing with your ghost.mp3", coverPath: "/images/covers/dancing with your ghost.jpeg" },
    { songName: "Jan ban gaye", filePath: "/songs/Jan ban gaye.mp3", coverPath: "/images/covers/jan ban gaye.jpeg" },
    { songName: "Jatti da crush", filePath: "/songs/Jatti da crush.mp3", coverPath: "/images/covers/jatii da crush.jpeg" },
    { songName: "Jogi - Shadi me jarur aana", filePath: "/songs/Jogi.mp3", coverPath: "/images/covers/jogi.jpeg" },
    { songName: "Kalank - title track", filePath: "/songs/Kalank.mp3", coverPath: "/images/covers/kalank.jpeg" },
    { songName: "Pehli daffa hai - Atif aslam", filePath: "/songs/Pehli daffa.mp3", coverPath: "/images/covers/pehli daffa.jpeg" },
    { songName: "Tere hawaale - Laal singh chadda", filePath: "/songs/Tere hawaale.mp3", coverPath: "/images/covers/tere hawaale.jpeg" },
    { songName: "Toota jo kabhi tara", filePath: "/songs/toota jo kabhi tara.mp3", coverPath: "/images/covers/toota jo kabhi tara.jpeg" },
    { songName: "Your eyes got my heart", filePath: "/songs/Your eyes got my heart falling for you.mp3", coverPath: "/images/covers/your eyes.jpeg" },
];
let gif = document.getElementById("gif");
let myProgress = document.getElementById("myProgress");
let audioElement = new Audio("/songs/Aye Zindagi 1920 Horrors Of The Heart.mp3");
// audioElement.play();
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let songItem = Array.from(document.getElementsByClassName("song"));
let masterSongName = document.getElementById("masterSongName");
let masterSongImage = document.getElementById("masterSongImage");

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});

// playing songs 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// time updating with song
audioElement.addEventListener('timeupdate', () => {
    totalProgress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgress.value = totalProgress;
});

myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100;
});

function makeAllPlay() {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    });
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        makeAllPlay();
        
        if(audioElement.paused) {
            audioElement.currentTime === 0;
            index = parseInt(e.target.id);
            audioElement.src = songs[index].filePath;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        } else {
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            gif.style.opacity = 0;
        }
        masterSongName.innerHTML = songs[index].songName;
        masterSongImage.src = songs[index].coverPath;

    });
});

document.getElementById("next").addEventListener('click', () => {
    if (index > 10) {
        index = 0;
    } else {
        index = index + 1;
    }
    masterSongImage.src = songs[index].coverPath;
    masterSongName.innerHTML = songs[index].songName;
    audioElement.src = songs[index].filePath;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById("previous").addEventListener('click', () => {
    if (index < 0) {
        index = 10;
    } else {
        index = index - 1;
    }
    masterSongImage.src = songs[index].coverPath;
    masterSongName.innerHTML = songs[index].songName;
    audioElement.src = songs[index].filePath;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})