import { Box, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { userImage } from "../assets/Assets";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const About = () => {

    const { themeColor } = useContext(ThemeContext);

    return (
        <VStack
            // border='1px solid red'
            spacing={['12', '12', '20', '20']}
            w='84%'
        >

            <Heading>
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
                        border={`4px solid ${themeColor}`}
                        w={{ base: '240px', sm: '360px', md: '360px', lg: '360px' }}
                        h={{ base: '240px', sm: '360px', md: '360px', lg: '360px' }}
                        borderRadius='50%'
                        alignItems='center'
                        justifyContent='center'
                        overflow='hidden'
                        pos='relative'
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
                        textAlign={['center', 'center', 'center', 'start']}
                        fontSize='1.5rem'
                        color={themeColor}
                    >
                        MERN Full Stack Web Development
                    </Heading>

                    <Text>
                        <p>
                            Hi, I'm <strong>Ajay</strong>, a passionate and dedicated <strong>Full Stack Web Developer</strong> based in <strong>Kanpur, India</strong>. I recently completed my <strong>MERN Stack Developer</strong> training at <strong>Ducat Institute</strong> (Jan 2024 – Jan 2025), where I gained hands-on experience building dynamic and responsive web applications using <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>.
                        </p>
                        <p>
                            I hold a <strong>Master of Computer Applications (MCA)</strong> degree, which I completed in <strong>2022</strong>. After graduation, I took a gap year to explore my interests and deepen my understanding of real-world development before fully committing to learning modern web technologies.
                        </p>
                        <p>
                            As a <strong>fresher</strong>, I may not have professional experience yet, but I bring strong problem-solving abilities, a solid grasp of programming fundamentals, and a genuine enthusiasm for continuous learning. I'm particularly focused on building scalable, user-friendly applications and constantly sharpening my front-end and back-end development skills.
                        </p>
                        <p>
                            I'm currently seeking opportunities to contribute to a forward-thinking team where I can apply my knowledge and grow as a full stack developer.
                        </p>
                        <p>
                            Feel free to explore my portfolio to see the projects I've been working on. I’d love to connect and discuss potential opportunities!
                        </p>

                    </Text>

                </Flex>

            </Grid>
        </VStack>
    );
};