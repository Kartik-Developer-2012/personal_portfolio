import { useEffect, useRef } from 'react';

/**
 * Draws animated floating particles on a canvas.
 * Fully hardware-accelerated — zero layout impact.
 */
export default function ParticleBackground() {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        const particles = [];

        const COLORS = [
            'rgba(99,102,241,',   // indigo
            'rgba(139,92,246,',   // violet
            'rgba(167,139,250,',  // light violet
            'rgba(255,255,255,',  // white
        ];

        const NUM = 80;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = document.documentElement.scrollHeight;
        };

        const rand = (min, max) => Math.random() * (max - min) + min;

        class Particle {
            constructor() { this.reset(true); }

            reset(initial = false) {
                this.x = rand(0, width);
                this.y = initial ? rand(0, height) : rand(-20, -5);
                this.r = rand(0.5, 2.2);
                this.vx = rand(-0.12, 0.12);
                this.vy = rand(0.08, 0.35);
                this.alpha = rand(0.08, 0.55);
                this.color = COLORS[Math.floor(rand(0, COLORS.length))];
                this.twinkle = rand(0.005, 0.018);
                this.dir = Math.random() > 0.5 ? 1 : -1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha += this.twinkle * this.dir;
                if (this.alpha > 0.6 || this.alpha < 0.04) this.dir *= -1;
                if (this.y > height + 10) this.reset();
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.fill();
            }
        }

        resize();
        for (let i = 0; i < NUM; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => { p.update(); p.draw(); });
            animRef.current = requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.85,
            }}
        />
    );
}
