let TIMEOUT;

TIMEOUT = setTimeout(() => {
    document.getElementById("loading-text").innerHTML = "Jogar!"
    clearTimeout(TIMEOUT)
}, 6000)



function myFunction() {
    window.open("https://github.com/wwwoYan/pagina_de_login/blob/main/login.css")
    audio.play("espada.mp3");
}
