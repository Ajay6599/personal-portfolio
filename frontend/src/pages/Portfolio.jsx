import { Box, Divider, Flex, Grid, GridItem, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { projectDetails } from "../assets/Assets";
import { RxArrowTopRight } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export const Portfolio = () => {

    const { themeColor, themeMode } = useContext(ThemeContext);

    let location = useLocation();

    let portfolioRef = useRef(null);
    let projectRefs = useRef([]);

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(portfolioRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power2.out"
        });
        tl.from(projectRefs.current, {
            opacity: 0,
            duration: 0.8,
            stagger: 0.8,
            ease: "power2.out"
        });
        tl.play();
        return () => {
            tl.kill();
        };
    }, [location.pathname]);

    return (
        <VStack
            // border='1px solid red'
            w='84%'
            spacing={{ base: '12', sm: '12', md: '20', lg: '20' }}
            zIndex='10'
        >
            <Heading ref={portfolioRef}>
                Portfolio
            </Heading>

            <Grid
                // border='1px solid green'
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                gap='1rem'
            >
                {
                    projectDetails.map(({ projDesc, projGithub, projImg, projLink, projTech, projType }, idx) => (
                        <GridItem
                            key={idx}
                            ref={el => el && projectRefs.current.push(el)}
                            // border={`1px solid ${themeColor}`}
                            p='0.25rem'
                            pos='relative'
                            role="group"
                            overflow='hidden'
                            rounded='md'
                            boxShadow={`0 0 4px 2px ${themeColor}`}
                            _hover={{
                                boxShadow: `0 0 4px 2px ${themeMode === 'light' ? '#111' : '#fff'}`
                            }}
                            cursor='pointer'
                        >
                            <Image
                                src={projImg}
                                alt='Weather App'
                            />

                            <VStack
                                // border='1px solid yellow'
                                rounded='md'
                                pos='absolute'
                                w='100%'
                                h='100%'
                                top='100%'
                                left='0'
                                p='0.625rem'
                                transition="top 0.5s ease-in-out"
                                _groupHover={{ top: '0%' }}
                                zIndex='1'
                                sx={{
                                    position: 'absolute',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: "''",
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        bg: themeColor,
                                        opacity: 0.8,
                                        zIndex: -1,
                                    },
                                }}
                            >
                                <Flex
                                    // border='1px solid red'
                                    flexDir='column'
                                    w='100%'
                                    gap='1'
                                >
                                    <Heading
                                        fontSize='1.5rem'
                                        color='#fff'
                                    >
                                        {projType}
                                    </Heading>
                                    <Text
                                        fontSize='0.875rem'
                                        color='#fff'
                                    >
                                        {projDesc}
                                    </Text>
                                    <Text
                                        color='#fff'
                                        fontWeight='semibold'
                                    >
                                        {projTech}
                                    </Text>
                                </Flex>

                                <Divider borderColor='#fff' />

                                <Flex
                                    // border='1px solid green'
                                    w='100%'
                                    justifyContent='start'
                                    gap='1rem'
                                >
                                    <a href={projLink} target="_blank" rel='noopener noreferrer'>
                                        <IconButton
                                            icon={
                                                <Box className="animated-icon" color='#111'>
                                                    <RxArrowTopRight size="24" />
                                                </Box>
                                            }
                                            variant='unstyled'
                                            rounded='full'
                                            display='flex'
                                            justifyContent='center'
                                            bgColor='#fff'
                                            onMouseEnter={(e) => {
                                                const icon = e.currentTarget.querySelector('.animated-icon');
                                                gsap.to(e.currentTarget, {
                                                    backgroundColor: themeColor,
                                                    boxShadow: '0 0 4px 2px #fff',
                                                    duration: 1,
                                                });
                                                gsap.fromTo(icon,
                                                    { x: -10, y: 14, opacity: 0 },
                                                    { x: 0, y: 0, opacity: 1, color: '#fff', duration: 1, ease: 'power2.out' }
                                                );
                                            }}
                                            onMouseLeave={(e) => {
                                                const icon = e.currentTarget.querySelector('.animated-icon');
                                                gsap.to(e.currentTarget, {
                                                    backgroundColor: '#fff',
                                                    boxShadow: `0 0 4px 2px #111`,
                                                    duration: 1,
                                                });
                                                gsap.to(icon, {
                                                    opacity: 1,
                                                    color: '#111',
                                                    duration: 0.4,
                                                    ease: 'power2.in',
                                                });
                                            }}
                                        />
                                    </a>

                                    <a href={projGithub} target="_blank" rel='noopener noreferrer'>
                                        <IconButton
                                            icon={
                                                <Box className='animated-icon' color='#111'>
                                                    <FaGithub size='24' />
                                                </Box>
                                            }
                                            variant='unstyled'
                                            rounded='full'
                                            display='flex'
                                            justifyContent='center'
                                            bgColor='#fff'
                                            onMouseEnter={(e) => {
                                                const icon = e.currentTarget.querySelector('.animated-icon');
                                                gsap.to(e.currentTarget, {
                                                    backgroundColor: themeColor,
                                                    boxShadow: '0 0 4px 2px #fff',
                                                    duration: 1,
                                                });
                                                gsap.fromTo(icon,
                                                    { y: 10, opacity: 0 },
                                                    { y: 0, opacity: 1, color: '#fff', duration: 1, ease: 'power2.out' }
                                                );
                                            }}
                                            onMouseLeave={(e) => {
                                                const icon = e.currentTarget.querySelector('.animated-icon');
                                                gsap.to(e.currentTarget, {
                                                    backgroundColor: '#fff',
                                                    boxShadow: `0 0 4px 2px #111`,
                                                    duration: 1,
                                                });
                                                gsap.to(icon, {
                                                    opacity: 1,
                                                    color: '#111',
                                                    duration: 0.4,
                                                    ease: 'power2.in',
                                                });
                                            }}
                                        />
                                    </a>
                                </Flex>
                            </VStack>
                        </GridItem>
                    ))
                }

            </Grid>
        </VStack >

    );
};