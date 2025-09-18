import { Box } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

export const MovingCodeBlock = ({ codeSnippets, speed, innerRef }) => {
    const codeBlockRef = useRef(null);
    const [maxLines, setMaxLines] = useState(10);
    const [displayLine, setDisplayLine] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Calculate max lines based on height
    useEffect(() => {
        if (codeBlockRef.current) {
            const containerHeight = codeBlockRef.current.offsetHeight;
            const lineHeight = 21.5;
            setMaxLines(Math.floor(containerHeight / lineHeight));
        }
    }, []);

    // Typing effect logic
    useEffect(() => {
        if (!codeSnippets || codeSnippets.length === 0) return;

        if (lineIndex >= codeSnippets.length) {
            const resetTimeout = setTimeout(() => {
                setDisplayLine('');
                setLineIndex(0);
                setCharIndex(0);
            }, 1000);
            return () => clearTimeout(resetTimeout);
        }

        const currentLine = codeSnippets[lineIndex];
        const linesOnScreen = displayLine.split('\n').length;

        if (linesOnScreen > maxLines) {
            const resetTimeout = setTimeout(() => {
                setDisplayLine('');
                setLineIndex(0);
                setCharIndex(0);
            }, 1000);
            return () => clearTimeout(resetTimeout);
        }

        if (charIndex < currentLine.length) {
            const timeoutId = setTimeout(() => {
                setDisplayLine(prev => prev + currentLine[charIndex]);
                setCharIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => {
                setDisplayLine(prev => prev + '\n');
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 10);
            return () => clearTimeout(timeoutId);
        }
    }, [lineIndex, charIndex, codeSnippets, maxLines, displayLine, speed]);

    return (
        <Box
            ref={el => {
                codeBlockRef.current = el;
                if (innerRef) innerRef(el);
            }}
            position="absolute"
            w='36%'
            h='180px'
            p="10px"
            bg="rgba(0, 0, 0. 0.4)"
            borderRadius="8px"
            overflow="hidden"
            color="green"
            fontFamily="monospace"
            fontSize="14px"
            whiteSpace="pre-wrap"
            userSelect="none"
        >
            {displayLine}
        </Box>
    );
};
