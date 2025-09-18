import { Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Education } from "../components/Education";
import { educationData, skills } from "../assets/Assets";
import { Skill } from "../components/Skill";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export const Resume = () => {

    const location = useLocation();
    const resumeRef = useRef(null);
    const headingRef = useRef([]);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    const addHeadingRef = (el) => {
        if (el && !headingRef.current.includes(el)) {
            headingRef.current.push(el);
        }
    };

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(resumeRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power2.out"
        });
        tl.from(headingRef.current[0], { // Education heading
            opacity: 0,
            duration: 0.8,
            ease: "power3.in"
        });
        tl.from(educationRef.current, {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power2.out"
        });

        tl.from(headingRef.current[1], { // Skills heading
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        tl.from(skillsRef.current, {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power2.out"
        });

        tl.from(headingRef.current[2], { // Experience heading
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        tl.from(experienceRef.current, {
            opacity: 0,
            y: -30,
            duration: 0.8,
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
            <Heading ref={resumeRef}>
                Resume
            </Heading>

            <Grid
                // border='1px solid green'
                gridTemplateColumns={['repeat(1fr)', 'repeat(1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                w='100%'
                gap='1rem'
            >

                <Flex
                    // border='1px solid blue'
                    flexDir='column'
                    alignItems='center'
                    gap='1rem'
                    p={['0 0.625rem', '0 0.625rem', '0 0.625rem', '0']}
                >
                    <Heading
                        // border='1px solid green'
                        ref={addHeadingRef}
                        borderBottom='2px solid #505050'
                        w='100%'
                        textAlign='center'
                        fontSize={{ base: '1.25rem', sm: '', md: '', lg: '1.5rem' }}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontWeight='semibold'
                        p='0.25rem 0'
                    >
                        Education
                    </Heading>

                    <Education eduArr={educationData} eduRef={educationRef} />

                </Flex>

                <Flex
                    // border='1px solid blue'
                    flexDir='column'
                    alignItems='center'
                    gap='1rem'
                    p={['0 0.625rem', '0 0.625rem', '0 0.625rem', '0']}
                >
                    <Heading
                        // border='1px solid green'
                        ref={addHeadingRef}
                        borderBottom='2px solid #505050'
                        w='100%'
                        textAlign='center'
                        fontSize={{ base: '1.25rem', sm: '', md: '', lg: '1.5rem' }}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontWeight='semibold'
                        p='0.25rem 0'
                    >
                        Skills
                    </Heading>

                    <Skill skillArr={skills} skillRef={skillsRef} />

                </Flex>

                <Flex
                    // border='1px solid blue'
                    flexDir='column'
                    alignItems='center'
                    gap='1.75rem'
                    p={['0 0.625rem', '0 0.625rem', '0 0.625rem', '0']}
                >
                    <Heading
                        // border='1px solid green'
                        ref={addHeadingRef}
                        borderBottom='2px solid #505050'
                        w='100%'
                        textAlign='center'
                        fontSize={{ base: '1.25rem', sm: '', md: '', lg: '1.5rem' }}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontWeight='semibold'
                        p='0.25rem 0'
                    >
                        Experience
                    </Heading>

                    <Text
                        // border='1px solid green'
                        ref={experienceRef}
                        fontSize='0.875rem'
                        textAlign='left'
                        fontWeight='semibold'
                        fontFamily='"Montserrat Alternates", sans-serif'
                    >
                        No Experience
                    </Text>

                </Flex>

            </Grid>
        </VStack>
    );
};