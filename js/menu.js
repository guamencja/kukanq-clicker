function $(h) { // funkcja, pozwalająca na szybsze zmienianie HTMLa
    return document.querySelector(h);
}

if (localStorage.getItem('gameStarted')) { // sprawdza czy gra została rozpoczęta, jeśli nie, wyłącza przycisk kontynuuj
    $("#continue").disabled = false;
} else {
    $("#continue").disabled = true;
}

let glit = setInterval(glitchAppear, 3000); // dodawanie glitchy

function game() {
    // animacja
    $(".main_menu").style.animationName = "slideOut"; 
    $(".main_menu").style.animationDuration = "1s";
    $(".main_menu").style.animationIterationCount = "1"; 
    clearInterval(glit); // usuwanie glitchy

    // ładowanie plików game.js i game.css
    $('head').innerHTML += '<link rel="stylesheet" type="text/css" href="./css/game.css">';
    var gameScript = document.createElement('script');
    gameScript.src = './js/game.js';
    document.head.appendChild(gameScript);
}

function newGame() { // funkcja rozpoczynająca nową grę
    localStorage.setItem("gameStarted", true);
    localStorage.removeItem("night");
    localStorage.removeItem("chestnuts");
    game();
    setTimeout(function () { // animacja
        $(".main_menu").style.display = "none";
        $(".gameWindow").style.display = "block";
        $(".gameWindow").style.animationName = "gameAppear";
        $(".gameWindow").style.animationDuration = "1s";
        $(".gameWindow").style.animationIterationCount = "1";
    }, 1250)
}

function loadGame() { // funkcja ładująca grę
    game();
    setTimeout(function () { // też animacja
        $(".main_menu").style.display = "none";
        $(".gameWindow").style.display = "block";
        $(".gameWindow").style.animationName = "gameAppear";
        $(".gameWindow").style.animationDuration = "1s";
        $(".gameWindow").style.animationIterationCount = "1";
    }, 1250);
}