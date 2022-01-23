let musicButton = document.querySelector('.music-mute-button');
let backgroundMusic = document.querySelector('#background-music');
let musicFont = document.querySelector('.music-mute-button i');

musicButton.addEventListener('click', ()=> {
    if(backgroundMusic.paused) {
        backgroundMusic.play();
        musicFont.classList.remove('fa-volume-mute');
        musicFont.classList.add('fa-volume-up');
    }
    else{
        backgroundMusic.pause();
        musicFont.classList.remove('fa-volume-up');
        musicFont.classList.add('fa-volume-mute');
    }
});