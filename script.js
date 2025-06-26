// Schnee-Effekt erstellen
document.addEventListener("DOMContentLoaded", function () {
    let snowflakes = [];
    let numberOfSnowflakes = Math.floor(window.innerWidth / 10); // Anzahl basierend auf der Breite
    let snowflakeSize = Math.random() * 5 + 2; // Initiale Größe der Schneeflocken

    // Funktion zum Erstellen der Schneeflocken
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.position = 'absolute';
        snowflake.style.top = `${Math.random() * window.innerHeight}px`;
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.width = `${Math.random() * 5 + 2}px`;  // Zufällige Größe
        snowflake.style.height = snowflake.style.width;
        snowflake.style.backgroundColor = 'white';
        snowflake.style.borderRadius = '0%';
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;  // Zufällige Transparenz
        snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);
    }

    // Animations-Keyframes für den Schnee
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); }
        }
    `, styleSheet.cssRules.length);

    // Funktion zum Anpassen der Schneeflocken bei Fenstergrößeänderung
    function adjustSnowflakes() {
        // Lösche alle Schneeflocken
        snowflakes.forEach(snowflake => snowflake.remove());
        snowflakes = [];

        // Berechne die neue Anzahl von Schneeflocken basierend auf der Fensterbreite
        numberOfSnowflakes = Math.floor(window.innerWidth / 10);

        // Erstelle die Schneeflocken neu
        for (let i = 0; i < numberOfSnowflakes; i++) {
            createSnowflake();
        }
    }

    // Initiale Erstellung der Schneeflocken
    adjustSnowflakes();

    // Aktualisiere die Schneeflocken bei einer Änderung der Fenstergröße
    window.addEventListener('resize', adjustSnowflakes);
});
