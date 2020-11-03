function $(h){
    return document.querySelector(h);
}

if (localStorage.getItem('gameStarted')) {
    $("#continue").disabled = false;
} else {
    $("#continue").disabled = true;
}

setInterval(glitchAppear, 3000);