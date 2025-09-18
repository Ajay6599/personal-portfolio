import { useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ThemeContext } from '../context/ThemeContextProvider';

export const BinaryMatrixBackground = () => {

    const { themeColor } = useContext(ThemeContext);

    const canvasRef = useRef(null);
    const blocksRef = useRef([]);
    const blockCount = 10; // number of blocks on screen
    const blockSize = 150; // width of the entire block
    const digitsPerRow = 6;
    const digitsPerCol = 1; // only 1 row now

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.font = '18px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let animationFrameId;

        blocksRef.current = [];

        const generateBinaryRow = () => {
            const row = [];
            for (let x = 0; x < digitsPerRow; x++) {
                row.push(Math.random() > 0.5 ? '1' : '0');
            }
            return [row]; // wrap in 2D array to keep structure
        };

        const createBlock = () => {
            return {
                x: Math.random() * (canvas.width - blockSize),
                y: Math.random() * (canvas.height - 40), // height reduced due to 1 row
                alpha: 0,
                grid: generateBinaryRow()
            };
        };

        for (let i = 0; i < blockCount; i++) {
            const block = createBlock();
            blocksRef.current.push(block);
            animateBlock(block);
        }

        function animateBlock(block) {
            gsap.to(block, {
                alpha: 1,
                duration: 0.5,
                onComplete: () => {
                    gsap.to(block, {
                        alpha: 0,
                        duration: 0.5,
                        delay: Math.random() * 2,
                        onComplete: () => {
                            block.x = Math.random() * (canvas.width - blockSize);
                            block.y = Math.random() * (canvas.height - 40);
                            block.grid = generateBinaryRow();
                            animateBlock(block);
                        }
                    });
                }
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            blocksRef.current.forEach(block => {
                ctx.save();
                ctx.globalAlpha = block.alpha;
                const grid = block.grid;
                const cellWidth = blockSize / digitsPerRow;
                const cellHeight = 40;

                for (let rowIndex = 0; rowIndex < digitsPerCol; rowIndex++) {
                    for (let colIndex = 0; colIndex < digitsPerRow; colIndex++) {
                        const digit = grid[rowIndex][colIndex];
                        const x = block.x + colIndex * cellWidth;
                        const y = block.y + rowIndex * cellHeight;

                        // Draw border box
                        // ctx.strokeStyle = '#00FF00';
                        ctx.strokeStyle = themeColor;
                        ctx.strokeRect(x, y, cellWidth, cellHeight);

                        // Draw digit
                        // ctx.fillStyle = '#00FF00';
                        ctx.fillStyle = themeColor;
                        ctx.fillText(
                            digit,
                            x + cellWidth / 2,
                            y + cellHeight / 2
                        );
                    }
                }

                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            gsap.globalTimeline.clear();
            cancelAnimationFrame(animationFrameId);
            blocksRef.current = [];
        };
    }, [themeColor]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                backgroundColor: '#000',
            }}
        />
    );
};
