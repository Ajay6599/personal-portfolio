import { useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { codeBlocks } from "../assets/Assets";
import { MovingCodeBlock } from "./MovingCodeBlock";
import { gsap } from "gsap";

export const LightModeBackground = () => {
    const parentRef = useRef(null);
    const codeBlockRef = useRef([]);

    // Animation function
    const animateBoxes = () => {
        const parent = parentRef.current;
        const boxes = [...codeBlockRef.current];

        if (!parent || boxes.some(box => !box)) return;

        const parentRect = parent.getBoundingClientRect();

        boxes.forEach(box => {
            gsap.killTweensOf(box);  // Pehle se chal rahi animation stop karo
        });

        boxes.forEach((box, i) => {
            const codeBlockRect = box.getBoundingClientRect();

            const maxX = parentRect.width - codeBlockRect.width;
            const maxY = parentRect.height - codeBlockRect.height;

            // Random start position inside parent container
            gsap.set(box, {
                x: Math.random() * maxX,
                y: Math.random() * maxY,
                rotation: gsap.utils.random(-5, 5),
                opacity: gsap.utils.random(0.4, 0.8),
            });

            const animate = () => {
                gsap.to(box, {
                    duration: 2 + Math.random() * 2,
                    x: Math.random() * maxX,
                    y: Math.random() * maxY,
                    rotation: gsap.utils.random(-5, 5),
                    opacity: gsap.utils.random(0.4, 0.8),
                    ease: "power1.inOut",
                    onComplete: animate,
                });
            };

            animate();
        });
    };

    useEffect(() => {
        const boxes = [...codeBlockRef.current];
        animateBoxes(); // Initial animation start

        // Window resize handler
        const handleResize = () => {
            animateBoxes();  // Resize hone par animation reset karo naye size ke hisaab se
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            boxes.forEach(box => {
                if (box) gsap.killTweensOf(box);
            });
        };
    }, []);

    return (
        <Flex
            ref={parentRef}
            h='100vh'
            w='100vw'
            position='fixed'
            top='0'
            left='0'
            zIndex='0'
            overflow="hidden"
        >
            {
                codeBlocks.map((block, index) => (
                    <MovingCodeBlock
                        key={block.id}
                        codeSnippets={block.frontendSnippets || block.backendSnippets}
                        speed={block.speed}
                        innerRef={el => (codeBlockRef.current[index] = el)}
                    />
                ))
            }
        </Flex>
    );
};
