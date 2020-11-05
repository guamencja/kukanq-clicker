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

// klikanie
var checked = false;
function click() {
    // sprawdzanie czy użytkownik ma kuksztany, bo inaczej by zwróciło NaN i żeby nie sprawdzało przy każdym kliknięciu
    if (!checked)   
        if (typeof localStorage.chestnuts != "string" || parseInt(localStorage.chestnuts)<=0) {
            localStorage.setItem("chestnuts", 1);
            checked = true;
            return;
        }
    
    $("#kasztanowiec").style.width = "515px";
    $("#kasztanowiec").style.height = "396px";
    setTimeout(() => {
        $("#kasztanowiec").style.width = "468px";
        $("#kasztanowiec").style.height = "360px";
    }, 60);
    localStorage.chestnuts++;
}
$("#kasztanowiec").addEventListener("click", (event) => click(event));