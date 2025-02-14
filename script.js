(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// Musique de fond
document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.querySelector('.background-music');
    backgroundMusic.play().catch(error => {
        console.log("La lecture automatique de la musique a été bloquée. Cliquez pour jouer.");
    });
});

// Liste des mots à afficher
const words = [
    "The reason I love you...",
    "Your smile",
    "Your eyes",
    "Your voice (sweet like honey)",
    "Your softness",
    "Your kindness",
    "Your laughter",
    "Your warmth",
    "Your strength",
    "Your Love for God",
    "Your Beauty",
    "Your Heart",
    "Your Soul",
    "Your Body",   
    "Your Mind", 
    "Your random dancing",
    "Your random singing",
    "Your work ethic",
    "Your dedication",
    "Your passion",
    "Your love for life",
    "Your love for me",
    "Your love for your family",
    "Your love for your friends",
    "Your love for pets and cutes things",  
    "Your love for adventure",
    "Your love for trying new things",
    "Your love for learning",
    "Your love for growing",
    "Your love for helping others",
    "Your love for making a difference",
    "Your love for being a good person",
    "Your love for being a good friend",
    "Your love for being a good family member",
    "Your love for being a good partner",
    "Your love for the craziness",
    "Your love for the beauty",
    "Your love for the simplicity",
    "Your courage",
    "Your intelligence",
    "Your creativity",
    "Your passion",
    "Your generosity",
    "Your patience",
    "Your love",
    "You are the reason...",
    "I love you ❤️"
];
// Démarrer la transition des mots avec un intervalle de 1,3 seconde
const wordInterval = setInterval(showNextWord, 4000);
let currentWordIndex = 0;
const wordTransitionElement = document.querySelector('.word-transition');

function showNextWord() {
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0; // Revenir au début après la dernière phrase
    }

    // Afficher le mot actuel
    wordTransitionElement.textContent = words[currentWordIndex];
    wordTransitionElement.style.opacity = 6000;

    // Faire disparaître le mot après 1,3 seconde
    setTimeout(() => {
        wordTransitionElement.style.opacity = 0;
    }, 6000);

    currentWordIndex++;
}



// Arrêter la transition après 3 minutes et 35 secondes (215 000 millisecondes)
setTimeout(() => {
    clearInterval(wordInterval);
    wordTransitionElement.textContent = "You are the reason I love you ❤️";
    wordTransitionElement.style.opacity = 1;
}, 600000);
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/




const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}