// utils
const $ = (h) => {
    return document.querySelector(h);
}

// game functionality
function isDay() { // based on real time
    // to do: get the hour from the server, a user can manipulate with an hour
    if (new Date().getHours() < 19) return true;
    return false;
}

function load() {
    $("#game").style.backgroundImage = `url("./img/${isDay() ? "day" : "night"}.jpg")`;
}

load();