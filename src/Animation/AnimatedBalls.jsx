import React, { useEffect, useRef } from 'react';

const AnimatedBalls = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const colors = ["#A145B1", "#824EB9", "#c3aadd", "#510d66"];
        const numBalls = 20;
        const balls = [];
        const minSize = 0.2;
        const maxSize = 0.4;

        for (let i = 0; i < numBalls; i++) {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.style.background = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
            ball.style.top = `${Math.floor(Math.random() * 100)}vh`;

            let size = Math.random() * (maxSize - minSize) + minSize;
            ball.style.width = `${size}em`;
            ball.style.height = `${size}em`;

            balls.push(ball);
            containerRef.current.append(ball);
        }

        balls.forEach((el, i) => {

            const maxX = window.innerWidth / 5000;
            const maxY = window.innerHeight / 5000;

            let to = {
                x: Math.random() * (i % 2 === 0 ? -maxX : maxX),
                y: Math.random() * maxY
            };

            el.animate(
                [
                    { transform: "translate(0, 0)", opacity: 0.7 },
                    { transform: `translate(${to.x}rem, ${to.y}rem)`, opacity: 0.1 },
                    { transform: "translate(0, 0)", opacity: 0.7 }
                ],
                {
                    duration: (Math.random() + 1) * 5000,
                    fill: "both",
                    iterations: Infinity,
                    easing: "ease-in-out"
                }
            );
        });
    }, []);

    return <div ref={containerRef} className="ball-container"></div>;
};

export default AnimatedBalls;
