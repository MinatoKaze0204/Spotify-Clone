console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio('/songs/505.m4a');
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songItemContainer = Array.from(document.getElementsByClassName('songItem'));
// console.log(songItemContainer);

let songs = [
    {songName: "505", filepath: "songs/505.m4a", coverpath: "covers/1.jpg"},
    {songName: "Back to Friends", filepath: "songs/back to friends.m4a", coverpath: "covers/2.jpg"},
    {songName: "Disco", filepath: "songs/Disco.m4a", coverpath: "covers/3.jpg"},
    {songName: "Freaks", filepath: "songs/Freaks.m4a", coverpath: "covers/4.jpg"},
    {songName: "No One Noticed", filepath: "songs/No One Noticed.m4a", coverpath: "covers/5.jpg"},
    {songName: "Softcore", filepath: "songs/Softcore.m4a", coverpath: "covers/6.jpg"},
    {songName: "Tek it", filepath: "songs/Tek it.m4a", coverpath: "covers/7.jpg"},
]
// audioElement.play();

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
    // if(myProgressBar.value >= 100){
    //     if(songIndex >= 7){
    //         songIndex = 1;
    //     }
    //     else{
    //         songIndex += 1;
    //     }
    //     audioElement.src = songs[songIndex - 1].filepath;
    //     audioElement.current = 0;
    //     masterSongName.innerText = songs[songIndex - 1].songName;
    //     audioElement.play();
    //     masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle');
    //     }
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    console.log(e.target.id);
    songIndex = parseInt(e.target.id);
    console.log(songIndex);
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        console.log(songs[0])
        audioElement.src = songs[songIndex - 1].filepath;
        audioElement.current = 0;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        console.log(songs[0])
        audioElement.src = songs[songIndex - 1].filepath;
        audioElement.current = 0;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

        audioElement.addEventListener('timeupdate', ()=>{
            progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
            myProgressBar.value = progress;
        })
    }

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 7){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex - 1].filepath;
    audioElement.current = 0;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 1){
        songIndex = 7;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex - 1].filepath;
    audioElement.current = 0;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function isMobile(){
    return (window.innerWidth < 510);
}
Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    console.log(element);
    if(isMobile()){
        songIndex = parseInt(e.currentTarget.id);
        console.log(e.currentTarget.id);
        if(audioElement.paused || audioElement.currentTime <= 0)
            {
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                // console.log(songs[0])
                audioElement.src = songs[songIndex - 1].filepath;
                audioElement.current = 0;
                masterSongName.innerText = songs[songIndex - 1].songName;
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            }
            else{
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                // console.log(songs[0])
                audioElement.src = songs[songIndex - 1].filepath;
                audioElement.current = 0;
                masterSongName.innerText = songs[songIndex - 1].songName;
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
        
                audioElement.addEventListener('timeupdate', ()=>{
                    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
                    myProgressBar.value = progress;
                })
            }
    }
});
})