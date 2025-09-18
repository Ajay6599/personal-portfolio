import { Box, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { userImage } from "../assets/Assets";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export const About = () => {

    const { bgTheme, themeColor } = useContext(ThemeContext);

    let location = useLocation();

    let pageRef = useRef(null);
    let imageRef = useRef(null);
    let headingRef = useRef(null);
    let textRef = useRef([]);

    const addTextRef = (el) => {
        if (el && !textRef.current.includes(el)) {
            textRef.current.push(el);
        }
    };

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(pageRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power1.in"
        });
        tl.from(imageRef.current, {
            opacity: 0,
            x: -100,
            duration: 0.8,
            ease: "power1.in"
        });
        tl.from(headingRef.current, {
            opacity: 0,
            x: 300,
            duration: 0.8,
            ease: "power1.in"
        });
        tl.from(textRef.current, {
            opacity: 0,
            duration: 0.8,
            stagger: 0.8,
            ease: "power1.in"
        });
        tl.play();
        return () => {
            tl.kill();
        };
    }, [location.pathname]);

    return (
        <VStack
            // border='1px solid red'
            spacing={['12', '12', '20', '20']}
            w='84%'
            zIndex='10'
        >

            <Heading ref={pageRef}>
                About Me
            </Heading>

            <Grid
                // border='1px solid blue'
                gridTemplateColumns={{
                    base: '1fr',
                    sm: '1fr',
                    md: '1fr',
                    lg: '1fr 2fr'
                }}
                gap='2rem'
            >

                <Flex
                    // border='1px solid red'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Flex
                        ref={imageRef}
                        border={`4px solid ${themeColor}`}
                        w={{ base: '240px', sm: '360px', md: '360px', lg: '360px' }}
                        h={{ base: '240px', sm: '360px', md: '360px', lg: '360px' }}
                        borderRadius='50%'
                        alignItems='center'
                        justifyContent='center'
                        overflow='hidden'
                        pos='relative'
                        bg={`linear-gradient(${bgTheme}, hsl(0, 0%, 100%))`}
                        boxShadow={`0 0 5px 2px ${themeColor}`}
                    >
                        <Box
                            // border='1px solid red'
                            pos='absolute'
                            top='1rem'
                            w='84%'
                        >
                            <Image
                                src={userImage.AjayBg}
                                alt="img"
                                // w='72%'
                                objectFit='cover'
                            />
                        </Box>
                    </Flex>
                </Flex>

                <Flex
                    // border='1px solid green'
                    flexDir='column'
                    gap='1rem'
                >

                    <Heading
                        // border='1px solid'
                        ref={headingRef}
                        textAlign={['center', 'center', 'center', 'start']}
                        fontSize='1.5rem'
                        color={themeColor}
                    >
                        MERN Full Stack Web Development
                    </Heading>

                    <Box>
                        <Text ref={addTextRef}>
                            Hi, I'm <strong>Ajay</strong>, a passionate and dedicated <strong>Full Stack Web Developer</strong> based in <strong>Kanpur, India</strong>. I recently completed my <strong>MERN Stack Developer</strong> training at <strong>Ducat Institute</strong> (Jan 2024 – Jan 2025), where I gained hands-on experience building dynamic and responsive web applications using <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>.
                        </Text>
                        <Text ref={addTextRef}>
                            I hold a <strong>Master of Computer Applications (MCA)</strong> degree, which I completed in <strong>2022</strong>. After graduation, I took a gap year to explore my interests and deepen my understanding of real-world development before fully committing to learning modern web technologies.
                        </Text>
                        <Text ref={addTextRef}>
                            As a <strong>fresher</strong>, I may not have professional experience yet, but I bring strong problem-solving abilities, a solid grasp of programming fundamentals, and a genuine enthusiasm for continuous learning. I'm particularly focused on building scalable, user-friendly applications and constantly sharpening my front-end and back-end development skills.
                        </Text>
                        <Text ref={addTextRef}>
                            I'm currently seeking opportunities to contribute to a forward-thinking team where I can apply my knowledge and grow as a full stack developer.
                        </Text>
                        <Text ref={addTextRef}>
                            Feel free to explore my portfolio to see the projects I've been working on. I’d love to connect and discuss potential opportunities!
                        </Text>

                    </Box>

                </Flex>

            </Grid>
        </VStack>
    );
};