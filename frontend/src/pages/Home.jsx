import { Box, Button, Flex, Grid, Heading, IconButton, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { resume, userImage } from "../assets/Assets";

export const Home = () => {

    let { themeColor } = useContext(ThemeContext);

    return (
        <VStack
            // border='1px solid red'
            h='100vh'
            w='84%'
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
                        fontFamily='"Montserrat Alternates", sans-serif'
                        fontSize={['sm', 'md', 'lg', 'xl']}
                    >
                        MERN Full Stack Web Developer
                    </Heading>

                    <Text
                        // fontWeight='light'
                        // border='1px solid green'
                        w={['96%', '96%', '96%', '100%']}
                    >
                        A passionate MERN Full Stack Developer, dedicated to building dynamic and efficient web applications.
                    </Text>

                    <Flex
                        gap='1rem'
                    >
                        <Tooltip
                            label='Github'
                            placement="top"
                            bgColor={themeColor}
                            color='white'
                        >
                            <a href="https://github.com/Ajay6599/" target="_blank" rel='noopener noreferrer'>
                                <IconButton
                                    icon={<FaGithub size='24' />}
                                    variant='null'
                                    border={`1px solid ${themeColor}`}
                                    borderRadius='full'
                                    transition='all 0.5s ease-in-out'
                                    color={themeColor}
                                    _hover={{
                                        backgroundColor: themeColor,
                                        color: '#fff'
                                    }}
                                />
                            </a>
                        </Tooltip>

                        <Tooltip
                            label='LinkedIn'
                            placement='top'
                            bgColor={themeColor}
                            color='white'
                        >
                            <a href="https://www.linkedin.com/in/ajayprajapati6599/" target="_blank" rel='noopener noreferrer'>
                                <IconButton
                                    variant='null'
                                    border={`1px solid ${themeColor}`}
                                    borderRadius='full'
                                    icon={<FaLinkedinIn size='20' />}
                                    transition='all 0.5s ease-in-out'
                                    color={themeColor}
                                    _hover={{
                                        backgroundColor: themeColor,
                                        color: '#fff'
                                    }}
                                />
                            </a>
                        </Tooltip>
                    </Flex>

                    <Button
                        as='a'
                        href={resume.AjayCv}
                        download
                        variant='unstyled'
                        border='2px solid #808080'
                        borderRadius='20px'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        w='140px'
                        pos='relative'
                        zIndex='1'
                        _after={{
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: "36px",
                            height: "10px",
                            borderRadius: '20px',
                            // backgroundColor: 'teal',
                            color: '#111',
                            zIndex: '-1',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.5s ease-in-out'
                        }}
                        _hover={{
                            color: 'white',
                            _after: {
                                backgroundColor: themeColor,
                                transform: 'translate(-50%, -50%) scale(3.64, 3.2)',
                            }
                        }}
                    >
                        Download CV
                    </Button>

                </Flex>

            </Grid>
        </VStack>
    );
};