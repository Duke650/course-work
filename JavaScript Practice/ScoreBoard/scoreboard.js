let homeScoreBtnOne = document.getElementById("home-score-1")
let scoreHomeEl =document.getElementById("score-home")
let homeScore = 0;

let guestScoreBtn = document.getElementById("guest-score-1")
let scoreGuestEl = document.getElementById("score-guest")
let guestScore = 0;

function addOneToHome(){
    homeScore += 1
    scoreHomeEl.textContent = homeScore
}

function addTwoToHome() {
    homeScore += 2;
    scoreHomeEl.textContent = homeScore;
}

function addThreeToHome() {
    homeScore += 3;
    scoreHomeEl.textContent = homeScore;
}

function addOneToGuest() {
    guestScore += 1;
    scoreGuestEl.textContent = guestScore;
}

function addTwoToGuest() {
    guestScore += 2;
    scoreGuestEl.textContent = guestScore;
}

function addThreeToGuest() {
    guestScore += 3;
    scoreGuestEl.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    scoreHomeEl.textContent = homeScore;
    scoreGuestEl.textContent = guestScore;
}