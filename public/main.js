

const days = document.getElementById('days'),
    minutes = document.getElementById('minutes'),
    hours = document.getElementById('hours'),
    seconds = document.getElementById('seconds');

  
setInterval(() => {
    findDate();
}, 1000);

function findDate() {
    let currentTime = new Date();
        christmasYear = currentTime.getFullYear();
    
    if(currentTime.getMonth() == 11 && currentTime.getDate() > 25) {
        christmasYear += 1;
    }

    let christmasTime = new Date(christmasYear, 11, 25);
    let dateOther = Math.floor(christmasTime - currentTime);
    let DAYS = 0, HOURS = 0, MINUTES = 0 , SECONDS = 0; 
    if(currentTime.getMonth() != 11 || (currentTime.getMonth() == 11 && currentTime.getDate() != 25)) {
        DAYS = Math.floor(dateOther / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateOther) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateOther % (1000 * 60 * 60)) / (1000 * 60) );
        SECONDS = Math.floor((dateOther) % (1000 * 60) / 1000);
    }
    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}

function displayDate (d, h, m ,s) {
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue) {
    if(timeValue < 10) {
        timeValue = "0" + timeValue;
    }
    return timeValue;
}

// Lấy phần tử âm thanh và nút play từ DOM
const playButton = document.getElementById('playButton');
const backgroundMusic = document.getElementById('myAudio');

playButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playButton.classList.add('playing');
    } else {
        backgroundMusic.pause();
        playButton.classList.remove('playing');
    }
});