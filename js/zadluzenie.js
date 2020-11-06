'use strict';

let glitc;
let glitcspeed = 3000;
let effect3 = false;
let effect4 = false;

/*
    jesli chcemy uruchomić jakiś efekt zadłużenia, wpisujemy
    uruchomEfekt(liczba);
    dla przykładu:
    uruchomEfekt(2);

    Opis efektów:
    1 - zmienianie tytułu karty
    2 - dodawanie glitchy
    3 - obracanie się gry
    4 - podmienianie obrazków kukanqa
*/

function uruchomEfekt(index) {
    if (index == 1) {
        let names = ['h', 'to tylko gra', 'Kukanq Clicker - jesteś w długu!', 'null', 'undefined', 'Aktualizacja systemu windows w toku...', 'Szybciej z tymi długami!', 'Komornik przyjechał!', 'this game is not suitable for children or those who are easily disturbed?', 'sdfasdklfgsdfgsgoinrfoenlvbd'];
        document.title = names[Math.floor(Math.random() * names.length)];
    } else if (index == 2) {
        if (glitc) {
            clearInterval(glitc);
        }
        glitc = setInterval(glitchAppear, glitcspeed); // dodawanie glitchy
        glitcspeed -= 50;
    } else if (index == 3) {
        if (!effect3) {
            $('head').innerHTML += '<link rel="stylesheet" type="text/css" href="./css/zadluzenie.css">';
            document.body.style.backgroundColor = "black";
            document.body.style.animationName = "rotatebg";
            document.body.style.animationDuration = "1250s";
            document.body.style.animationIterationCount = "infinite";
            effect3 = true;
        }
    } else if (index == 4) {
        effect4 = true;
    }
}

function verifyKasztan() {
    return effect4;
}