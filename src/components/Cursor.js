import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]; // Array of rainbow colors

const Cursor = () => {
    const cursorRef = useRef(null);
    const smokeContainerRef = useRef(null);

    const createSmoke = useCallback((x, y) => {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        smoke.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        smokeContainerRef.current.appendChild(smoke);

        const distance = Math.random() * 50 + 50;
        const angle = Math.random() * 2 * Math.PI;

        gsap.fromTo(smoke, {
            opacity: 0.7,
            scale: 1,
            x: 0,
            y: 0,
        }, {
            x: distance * Math.cos(angle),
            y: distance * Math.sin(angle),

            opacity: 0,
            scale: 4,
            duration: 3 + Math.random() * 2,
            ease: 'power1.out',
            onComplete: () => smoke.remove(),
        });
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                xPercent: -50,
                yPercent: -50,
                ease: 'power3.out',
            });
            createSmoke(e.clientX, e.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [createSmoke]);

    // Initial smoke effect to spread all over the page
    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            createSmoke(x, y);
        }
    }, [createSmoke]);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={smokeContainerRef} className="smoke-container" />
        </>
    );
};

export default Cursor;
