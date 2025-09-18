import { useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { gsap } from 'gsap';

export const Send = () => {
    const planeRef = useRef(null);
    const smokeRef = useRef(null);
    const [sent, setSent] = useState(false);

    const handleClick = () => {
        if (sent) return;

        setSent(true);

        const tl = gsap.timeline({
            onComplete: () => {
                // Reset after animation
                gsap.to(planeRef.current, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                    duration: 0,
                });
                gsap.to(smokeRef.current, {
                    opacity: 0,
                    width: 0,
                    duration: 0,
                });
                setSent(false);
            },
        });

        // Wave-like flight
        tl.to(planeRef.current, {
            x: 200,
            y: -20,
            rotate: 20,
            duration: 0.4,
        })
            .to(planeRef.current, {
                x: 400,
                y: 20,
                rotate: -10,
                duration: 0.4,
            })
            .to(planeRef.current, {
                x: 600,
                y: -10,
                rotate: 15,
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
            });

        // Smoke trail
        gsap.to(smokeRef.current, {
            opacity: 1,
            width: 200,
            duration: 0.8,
            ease: 'power2.out',
        });
    };

    return (
        <button className="send-btn" onClick={handleClick}>
            <span className="plane-container">
                <FaPaperPlane className="plane" ref={planeRef} />
                <span className="smoke" ref={smokeRef}></span>
            </span>
            <span className="label">{sent ? 'Sent' : 'Send'}</span>
        </button>
    );
}
