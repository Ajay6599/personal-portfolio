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
                        Hi, I’m Ajay Prajapati — a passionate and motivated web developer based in Kanpur.
                        <br />
                        I’ve completed my Master’s degree in Computer Applications (MCA) and am excited to begin my professional journey in the world of web development.
                        <br />
                        My technical skills include HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy solving problems with creative solutions and am dedicated to growing as a full stack web developer.
                        <br />
                        {/* During my studies, I worked on [specific project or course], where I gained experience in [relevant skills or technologies]. I've also completed internships at [Company Name or Freelance Work], where I was able to [mention accomplishments, e.g., develop websites, design logos, etc.]. */}
                        {/* During my studies, I worked on academic projects that helped me build a solid foundation in both front-end and back-end technologies. */}
                        I don't have professional work experience yet, I’ve been continuously learning through personal projects, online courses, and hands-on coding practice.
                        <br />
                        I’m currently seeking opportunities in full stack web development where I can apply my skills, collaborate with experienced teams, and continue learning in a real-world environment. I'm especially interested in building responsive, user-friendly web applications that create value and impact.
                        <br />
                        Outside of tech, I enjoy [your personal interest — e.g., exploring new technology, photography, playing games, traveling, or reading], which helps me stay inspired and bring fresh ideas to my work.
                        <br />
                        Feel free to check out my portfolio to see what I’ve been working on. I’d love to connect and explore potential opportunities!
                    </Text>

                </Flex>

            </Grid>
        </VStack>
    );
};