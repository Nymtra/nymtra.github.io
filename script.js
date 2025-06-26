document.addEventListener("DOMContentLoaded", function () {
    let snowflakes = [];
    let numberOfSnowflakes = Math.floor(window.innerWidth / 10);

    // Keyframes per <style> einfügen (CORS-sicher)
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(style);

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.position = 'absolute';
        snowflake.style.top = `${Math.random() * window.innerHeight}px`;
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        const size = Math.random() * 5 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.backgroundColor = 'white';
        snowflake.style.borderRadius = '0'; // Nicht rund
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;
        snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);
    }

    function adjustSnowflakes() {
        snowflakes.forEach(snowflake => snowflake.remove());
        snowflakes = [];
        numberOfSnowflakes = Math.floor(window.innerWidth / 10);
        for (let i = 0; i < numberOfSnowflakes; i++) {
            createSnowflake();
        }
    }

    adjustSnowflakes();
    window.addEventListener('resize', adjustSnowflakes);
});
