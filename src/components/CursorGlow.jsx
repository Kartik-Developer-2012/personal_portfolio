import { useEffect, useRef } from 'react';

/**
 * CursorGlow — follows the mouse with a soft indigo radial glow.
 * Completely non-interactive (pointer-events: none).
 */
export default function CursorGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const el = glowRef.current;
        let rafId = null;
        let mx = -200, my = -200; // start off-screen
        let cx = -200, cy = -200;

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
        };

        const lerp = (a, b, t) => a + (b - a) * t;

        const animate = () => {
            cx = lerp(cx, mx, 0.1);
            cy = lerp(cy, my, 0.1);
            el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 400,
                height: 400,
                borderRadius: '50%',
                background:
                    'radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1,
                willChange: 'transform',
                mixBlendMode: 'screen',
            }}
        />
    );
}
