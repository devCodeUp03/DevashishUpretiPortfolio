import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const RainBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Rain configuration
        const drops = [];
        const isMobile = window.innerWidth < 768;
        const numDrops = isMobile ? 50 : 100; // Reduce drops on mobile for performance

        // Initialize drops
        for (let i = 0; i < numDrops; i++) {
            drops.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: Math.random() * 20 + 10, // Drop length between 10-30
                speed: Math.random() * 2 + 1, // Speed between 1-3
                opacity: Math.random() * 0.2 + 0.1 // Opacity between 0.1-0.3
            });
        }

        const draw = () => {
            // Clear with slight transparency for potential trail effect (optional, here clearing fully for crispness)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Color/Style
            ctx.strokeStyle = theme === 'dark' ? '#00ff84' : '#00aa55'; // Neon green in dark, darker green in light
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';

            drops.forEach(drop => {
                // Update position
                drop.y += drop.speed;

                // Reset if off screen
                if (drop.y > canvas.height) {
                    drop.y = -drop.length;
                    drop.x = Math.random() * canvas.width;
                    drop.speed = Math.random() * 2 + 1;
                }

                // Draw
                ctx.beginPath();
                ctx.globalAlpha = drop.opacity; // Subtle opacity
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x, drop.y + drop.length);
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
            style={{ background: 'transparent' }} // Let the CSS background color show through
        />
    );
};

export default RainBackground;
