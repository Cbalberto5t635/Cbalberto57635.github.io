function playMusic() {
    let music = document.getElementById('music'); // Seleccionamos el elemento de la música
    
    if (music.paused) {
        music.play(); // Reproducir música cuando está pausada
    } else {
        music.pause(); // Pausar la música si ya está en reproducción
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')";
    document.body.style.backgroundSize = "cover";

    let stars = document.createElement("div");
    stars.classList.add("stars");
    document.body.appendChild(stars);

    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(star);
    }
});
