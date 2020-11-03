function $(h){
    return document.querySelector(h);
}
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

glitchAppear = function() {
    let top = Math.floor(Math.random() * vh - 50);
    let left = Math.floor(Math.random() * vw - 50);
    $(".glitch").style.top = `${top}px`; 
    $(".glitch").style.left = `${left}px`;
    setTimeout(() => $(".glitch").style.display = "block", 250);
    setTimeout(() => $(".glitch").style.display = "none", 650);
}