// utils
const $ = (h) => {
    return document.querySelector(h);
}

// game functionality
let chestnuts = 0;

function isDay() { // based on real time
    // to do: get the hour from the server, a user can manipulate with an hour
    if (new Date().getHours() < 19) return true;
    return false;
}

function load() {
    chestnuts = parseInt(localStorage.chestnuts) | 0;
    $("#counter").innerHTML = chestnuts;
    $("#game").style.backgroundImage = `url("./img/${isDay() ? "day" : "night"}.jpg")`;
    
    // saving
    setInterval(() => {
        localStorage.setItem("chestnuts", chestnuts);
    }, 60000)
}
// when clicked
$("#chestnut_tree").onclick = () => {
    $("#counter").innerHTML = ++chestnuts;
}

load();

// saving when leaving
window.onbeforeunload = () => {
    localStorage.setItem("chestnuts", chestnuts);
}