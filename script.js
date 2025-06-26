const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const points = [];
const numPoints = 170;
const lines = [];

// Adjust canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create random points
for (let i = 0; i < numPoints; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
    });
}

// Create lines between points
for (let i = 0; i < numPoints; i++) {
    for (let j = i + 1; j < numPoints; j++) {
        lines.push({ 
            p1: points[i],
            p2: points[j],
            color: (i + j) % 2 === 0 ? 'red' : 'rgba(0, 150, 255, 1)' // Alternate between red and light blue
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update points
    for (let point of points) {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
    }

    // Draw lines
    for (let line of lines) {
        const dx = line.p1.x - line.p2.x;
        const dy = line.p1.y - line.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            ctx.strokeStyle = line.color; // Use red or light blue
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(line.p1.x, line.p1.y);
            ctx.lineTo(line.p2.x, line.p2.y);
            ctx.stroke();
        }
    }

    requestAnimationFrame(animate);
}

animate();
