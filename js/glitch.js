function $(h){ // funkcja przyspieszajaca wybieranie HTMLa
    return document.querySelector(h);
}
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); // jak szeroki jest ekran?
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); // jak wysoki jest ekran?

glitchAppear = function() {
    let top = Math.floor(Math.random() * vh - 50); // losowa pozycja glitcha w osi Y
    let left = Math.floor(Math.random() * vw - 50); // też losowa posycja w osi X
    $(".glitch").style.top = `${top}px`;  // ustawianie pozycji Y
    $(".glitch").style.left = `${left}px`; // ustawianie pozycji X
    setTimeout(() => $(".glitch").style.display = "block", 250); // pokazywanie glitcha
    setTimeout(() => $(".glitch").style.display = "none", 650); // usuwanie glitcha
}