// utils
const $ = (h) => {
    return document.querySelector(h);
}
const random = (h) => {
    return Math.floor(Math.random() * h);
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
    
    // saving in case of some error
    setInterval(() => {
        localStorage.setItem("chestnuts", chestnuts);
    }, 60000)
}

function newPop() {
    const pop = document.createElement("div");
    pop.className = "pop";

    // random spawn
    pop.style.left = `${random(468)}px`;
    pop.style.top = `${random(360)}px`;

    setTimeout(() => { // todo: find an other way to remove those pops to not create a setTimeout every single time
        pop.remove();
    }, random(500) + 500);

    return pop;
}

// when clicked
$("#chestnut_tree").onclick = () => {
    $("#counter").innerHTML = ++chestnuts;
    $("#pops").appendChild(newPop());
}

load();

// saving when leaving
window.onbeforeunload = () => {
    localStorage.setItem("chestnuts", chestnuts);
}