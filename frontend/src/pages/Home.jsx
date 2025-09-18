import { Box, Button, Flex, Grid, Heading, IconButton, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { resume, userImage } from "../assets/Assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GsapContext } from "../context/GsapContextProvider";
import { useLocation } from "react-router-dom";

export const Home = () => {

    let { themeColor, themeMode } = useContext(ThemeContext);
    let { masterTimeline, isFirstLoad } = useContext(GsapContext);

    const mediaBtn = [
        {
            label: "Github",
            link: "https://github.com/Ajay6599/",
            btnIcon: <FaGithub size='24' />
        },
        {
            label: "Linkedin",
            link: "https://www.linkedin.com/in/ajayprajapati6599/",
            btnIcon: <FaLinkedinIn size='24' />
        },
    ];

    let location = useLocation();

    let helloRef = useRef(null);
    let nameRef = useRef(null);
    let imageRef = useRef(null);
    let headingRef = useRef(null);
    let paraRef = useRef(null);
    let mediaRef = useRef([]);
    let btnRef = useRef(null);
    let textRef = useRef([]);

    const addIconRef = (el) => {
        if (el && !mediaRef.current.includes(el)) {
            mediaRef.current.push(el);
        }
    };

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(helloRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        tl.from(nameRef.current, {
            opacity: 0,
            rotateY: 360,
            duration: 0.8,
            ease: "power3.out"
        });

        tl.from(imageRef.current, {
            opacity: 0,
            y: -100,
            duration: 0.8,
            ease: "bounce.out"
        });
        tl.from(headingRef.current, {
            opacity: 0,
            x: -100,
            duration: 0.8,
            ease: "power3.out"
        });
        tl.from(paraRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
        if (mediaRef.current && mediaRef.current.length > 0) {
            tl.from(mediaRef.current, {
                opacity: 0,
                duration: 0.8,
                stagger: 0.8,
                ease: "power3.out"
            });
        }
        tl.fromTo(btnRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.8,
            ease: "power1.out"
        });

        if (isFirstLoad.current && location.pathname === "/") {
            masterTimeline.current.add(tl);
            isFirstLoad.current = false;
        } else {
            tl.play();
        }
        return () => {
            tl.kill();
        };
    }, [location.pathname]);

    const handleMouseEnter = () => {
        gsap.to(btnRef.current, {
            boxShadow: themeMode === 'light' ? '0 0 4px 1px #000' : '0 0 4px 1px #fff',
            border: '2px solid transparent',
            duration: 0.5,
        });
        gsap.fromTo(
            textRef.current,
            { y: -10, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                color: themeColor,
                duration: 1,
                stagger: 0.05,
                ease: "power2.out"
            }
        );
    };

    const handleMouseLeave = () => {
        gsap.to(btnRef.current, {
            boxShadow: 'none',
            border: themeMode === 'light' ? '2px solid #080808' : '2px solid #fff',
            duration: 0.5,
        });
        gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            color: themeMode === 'light' ? '#000' : '#fff',
            duration: 0.5,
            stagger: 0.02
        });
    };

    const handleDownload = () => {
        gsap.set(btnRef.current, { "--fillWidth": "0%" });

        gsap.to(btnRef.current, {
            "--fillWidth": "100%",
            duration: 2,
            ease: "power2.inOut",
        });

        gsap.to(textRef.current, {
            color: "#fff",
            duration: 1,
            ease: "power2.out",
        });

        // Optionally reverse fill after a while
        setTimeout(() => {
            gsap.to(btnRef.current, {
                "--fillWidth": "0%",
                duration: 1.2,
                ease: "power1.inOut",
            });
            gsap.to(textRef.current, {
                color: '#000',
                duration: 1,
            });
        }, 2500);
    };

    return (
        <VStack
            // border='1px solid red'
            h='100vh'
            w='84%'
            zIndex='1'
        >
            <Grid
                // border='1px solid blue'
                gridTemplateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(1, 1fr)',
                    lg: 'repeat(2, 1fr)'
                }}
                gap='2rem'
                m={{ base: 'auto', sm: '1rem 0', md: 'auto', lg: 'auto' }}
                alignItems='center'
            >
                <Flex
                    // border='1px solid green'
                    order={{ base: '1', sm: '1', md: '1', lg: '2' }}
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
                        bg={`linear-gradient(#171f2b, ${themeColor})`}
                        boxShadow={`0 0 5px 2px ${themeColor}`}
                    >
                        <Box
                            // border='1px solid red'
                            pos='absolute'
                            top='1rem'
                            w='85%'
                        >
                            <Image
                                src={userImage.AjayBg}
                                alt="img"
                                objectFit='cover'
                            />
                        </Box>
                    </Flex>
                </Flex>

                <Flex
                    // border='1px solid red'
                    order={['2', '2', '2', '1']}
                    flexDir='column'
                    alignItems={['center', 'center', 'center', 'start']}
                    gap='1rem'
                >
                    <Heading
                        ref={helloRef}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontSize={['sm', 'md', 'lg', 'xl']}
                    >
                        Hello,&nbsp;
                        <Text
                            as='span'
                            fontFamily='"Montserrat Alternates", sans-serif'
                            color={themeColor}
                        >
                            My name is
                        </Text>
                    </Heading>

                    <Heading
                        ref={nameRef}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontSize={['2xl', '3xl', '4xl', '5xl']}
                        sx={{
                            WebkitTextStroke: '1px #000',
                            color: themeColor,
                            textShadow: '1px 1px 2px white'
                        }}
                    >
                        Ajay&nbsp;
                        <Text
                            as='span'
                            fontFamily='"Montserrat Alternates", sans-serif'
                            color='white'
                        >
                            Prajapati
                        </Text>
                    </Heading>

                    <Heading
                        ref={headingRef}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontSize={['sm', 'md', 'lg', 'xl']}
                    >
                        MERN Full Stack Web Developer
                    </Heading>

                    <Text
                        // fontWeight='light'
                        // border='1px solid green'
                        ref={paraRef}
                        w={['96%', '96%', '96%', '100%']}
                    >
                        A passionate MERN Full Stack Developer, dedicated to building dynamic and efficient web applications.
                    </Text>

                    <Flex
                        gap='1rem'
                    >
                        {
                            mediaBtn.map(({ label, link, btnIcon }) => (
                                <Tooltip
                                    key={label}
                                    label={label}
                                    placement="top"
                                    bgColor={themeColor}
                                    color='white'
                                >
                                    <a href={link} target="_blank" rel='noopener noreferrer' ref={addIconRef}>
                                        <IconButton
                                            icon={btnIcon}
                                            variant='null'
                                            border={`1px solid ${themeColor}`}
                                            borderRadius='full'
                                            transition='all 0.5s ease-in-out'
                                            color={themeColor}
                                            _hover={{
                                                backgroundColor: themeColor,
                                                color: '#fff',
                                                boxShadow: '0 0 4px 1px #000'
                                            }}
                                        />
                                    </a>
                                </Tooltip>
                            ))
                        }
                    </Flex>

                    <Button
                        as='a'
                        ref={btnRef}
                        href={resume.AjayCv}
                        download
                        variant='unstyled'
                        border={ themeMode === 'light' ? '2px solid #080808' : '2px solid #fff' }
                        borderRadius='20px'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        w='140px'
                        pos='relative'
                        overflow='hidden'
                        sx={{
                            "--fillWidth": "0%",
                            _before: {
                                content: `""`,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "var(--fillWidth)",
                                backgroundColor: themeColor,
                                zIndex: 0,
                                transition: "width 0.3s ease",
                            },
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleDownload}
                    >
                        <Text fontWeight="Semibold" position="relative" zIndex={1}>
                            {
                                (() => {
                                    textRef.current = []; // Reset before rendering
                                    return "Download CV".split("").map((char, i) => (
                                        <Box
                                            key={i}
                                            as="span"
                                            ref={(el) => (textRef.current[i] = el)}
                                            display="inline-block"
                                        >
                                            {char}
                                        </Box>
                                    ));
                                })()
                            }
                        </Text>
                    </Button>

                </Flex>

            </Grid>
        </VStack>
    );
};
