import { Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Education } from "../components/Education";
import { educationData, skills } from "../assets/Assets";
import { Skill } from "../components/Skill";

export const Resume = () => {

    // const resumeContent = [
    //     {
    //         content: "Education",
    //         component: <Education eduArr={educationData} />
    //     },
    //     {
    //         content: "Skill",
    //         component: <Skill skillArr={skills} />
    //     },
    //     {
    //         content: "Experience",
    //         component: <Text
    //             // border='1px solid green'
    //             fontSize='0.875rem'
    //             textAlign='left'
    //             fontWeight='semibold'
    //             fontFamily='"Montserrat Alternates", sans-serif'
    //         >
    //             No Experience
    //         </Text>
    //     },
    // ];

    return (
        <VStack
            // border='1px solid red'
            w='84%'
            // h='100vh'
            spacing={{base: '12', sm: '12', md: '20', lg: '20'}}
            // overflow={['auto', 'hidden', 'hidden', 'hidden']}
            // mb={{base: '4rem'}}
        >
            <Heading>
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
                        borderBottom='2px solid #505050'
                        w='100%'
                        textAlign='center'
                        fontSize={{base: '1.25rem', sm: '', md: '', lg: '1.5rem'}}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontWeight='semibold'
                        p='0.25rem 0'
                    >
                        Education
                    </Heading>

                    <Education eduArr={educationData} />

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
                        borderBottom='2px solid #505050'
                        w='100%'
                        textAlign='center'
                        fontSize={{base: '1.25rem', sm: '', md: '', lg: '1.5rem'}}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontWeight='semibold'
                        p='0.25rem 0'
                    >
                        Skills
                    </Heading>

                    <Skill skillArr={skills} />

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
                        borderBottom='2px solid #505050'
                        w='100%'
                        textAlign='center'
                        fontSize={{base: '1.25rem', sm: '', md: '', lg: '1.5rem'}}
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontWeight='semibold'
                        p='0.25rem 0'
                    >
                        Experience
                    </Heading>

                    <Text
                        // border='1px solid green'
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