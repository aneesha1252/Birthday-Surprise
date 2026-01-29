const music = document.getElementById("bg-music");
let isPlaying = false;

/* Navigation */
function goTo(id) {
    document.querySelector(".screen.active").classList.remove("active");
    document.getElementById(id).classList.add("active");
}

/* Gift click */
function openGift() {
    goTo("s2");
    startMusic();
    launchConfetti();
}

/* Music control */
function startMusic() {
    if (!isPlaying) {
        music.volume = 0.5;
        music.play();
        isPlaying = true;
    }
}

function toggleMusic() {
    if (music.muted) {
        music.muted = false;
        document.querySelector(".music-btn").innerText = "🔊";
    } else {
        music.muted = true;
        document.querySelector(".music-btn").innerText = "🔇";
    }
}
music.loop = true;

music.addEventListener("ended", () => {
    music.currentTime = 0;
    music.play();
});

/* Typewriter message */
const message =
    "I hope today makes you smile the way you make everyone else smile.\n\n" +
    "You truly mean a lot to me, and I’m really grateful to have you.\n\n" +
    "Always here for you 💛";

let index = 0;

function typeWriter() {
    if (index < message.length) {
        const el = document.getElementById("finalMsg");
        el.innerHTML += message[index] === "\n" ? "<br>" : message[index];
        index++;
        setTimeout(typeWriter, 45);
    }
}

setTimeout(typeWriter, 600);