import { Divider, Flex, Grid, GridItem, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { projectDetails } from "../assets/Assets";
import { RxArrowTopRight } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const Portfolio = () => {

    const { themeColor, themeMode } = useContext(ThemeContext);

    return (
        <VStack
            // border='1px solid red'
            w='84%'
            // h='100vh'
            spacing={{ base: '12', sm: '12', md: '20', lg: '20' }}
        // overflow='hidden'
        >
            <Heading>
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
                            border={`1px solid ${themeColor}`}
                            p='0.25rem'
                            pos='relative'
                            role="group"
                            overflow='hidden'
                            rounded='md'
                            key={idx}
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

                                <Divider borderColor='#000' />

                                <Flex
                                    // border='1px solid green'
                                    w='100%'
                                    justifyContent='start'
                                    gap='1rem'
                                >
                                    <a href={projLink} target="_blank" rel='noopener noreferrer'>
                                        <IconButton
                                            icon={<RxArrowTopRight size='24' color={themeMode === 'light' ? '#111' : '#fff'} />}
                                            variant='unstyled'
                                            rounded='full'
                                            display='flex'
                                            justifyContent='center'
                                            bgColor={themeMode === 'light' ? '#fff' : '#111'}
                                        />
                                    </a>

                                    <a href={projGithub} target="_blank" rel='noopener noreferrer'>
                                        <IconButton
                                        icon={<FaGithub size='24' color={themeMode === 'light' ? '#111' : '#fff'} />}
                                        variant='unstyled'
                                        rounded='full'
                                        display='flex'
                                        justifyContent='center'
                                        bgColor={themeMode === 'light' ? '#fff' : '#111'}
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