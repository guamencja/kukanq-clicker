// muzyka
$(".gameWindow").innerHTML += "<audio loop id=\"day_sound\"><source src=\"./sound/day.mp3\" type=\"audio/mpeg\"></audio>\n<audio loop id=\"night_sound\"><source src=\"./sound/night.mp3\" type=\"audio/mpeg\"></audio>";

// jeżeli zmienna night nie jest ustawiona, włącz dzień
if (typeof localStorage.night != "string")
    day();
else {
    // dzień, noc wedle zmiennej
    if (localStorage.night == "true")
        night()
    else
        day();
}

function night() { // funkcja, uruchamiająca noc
    $("#day_sound").pause();
    $("#day_sound").currentTime = 0;
    $("#night_sound").play();
    $(".gameWindow").style.background = "url(\"./img/night.jpg\")";
    localStorage.setItem("night", true);
}

function day() { // funkcja uruchamiająca dzień
    $("#night_sound").pause();
    $("#night_sound").currentTime = 0;
    $("#day_sound").play();
    $(".gameWindow").style.background = "url(\"./img/day.jpg\")";
    localStorage.setItem("night", false);
}

// zmiana, co 8 minut
setInterval(function () {
    if (localStorage.night == "true")
        day()
    else
        night();
}, 480000);

