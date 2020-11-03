let stan = false;

// muzyka
$(".gameWindow").innerHTML += "<audio loop id=\"day_sound\"><source src=\"./sound/day.mp3\" type=\"audio/mpeg\"></audio>\n<audio loop id=\"night_sound\"><source src=\"./sound/night.mp3\" type=\"audio/mpeg\"></audio>";

// dzień, noc
day();

function night() { // funkcja, uruchamiająca noc
    $("#day_sound").pause();
    $("#day_sound").currentTime = 0;
    $("#night_sound").play();
    $(".gameWindow").style.background = "url(\"./img/night.jpg\")";  
    stan = true;
}

function day() { // funkcja uruchamiająca dzień
    $("#night_sound").pause();
    $("#night_sound").currentTime = 0;
    $("#day_sound").play();
    $(".gameWindow").style.background = "url(\"./img/day.jpg\")";
    stan = false;
}

// zmiana, co 8 minut
setInterval(function(){
    if (stan) 
        day();
    else 
        night();
}, 480000);

