import { Flex, Grid, Heading, IconButton, Text } from "@chakra-ui/react";
import { personalData } from "../assets/Assets";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const ContactMe = ({ area, collectRef }) => {

    const { themeColor, themeMode } = useContext(ThemeContext);

    return (
        <Flex
            // border='1px solid blue'
            flexDir='column'
            gap='0.75rem'
            gridArea={area}
        >
            {
                personalData.map(({ text, info, contact }, idx) => (
                    <Grid
                        key={idx}
                        ref={collectRef}
                        // border='1px solid'
                        gridTemplateColumns='1fr 2fr'
                        alignItems='center'
                    >
                        <IconButton
                            w={{base: '2.5rem', sm: '2.5rem', md:'3rem', lg: '3rem'}}
                            h={{base: '2.5rem', sm: '2.5rem', md:'3rem', lg: '3rem'}}
                            variant='unstyled'
                            border='2px solid'
                            borderRadius='50%'
                            display='flex'
                            icon={contact}
                            pos='relative'
                            _after={{
                                content: '""',
                                pos: 'absolute',
                                top: '50%',
                                left: '100%',
                                w: '2rem',
                                h: '2px',
                                backgroundColor: themeMode === 'light' ? '#111' : '#fff',
                                boxShadow: '1px 1px 2px #505050'
                            }}
                            boxShadow='1px 1px 2px #505050'
                            cursor='default'
                        />
                        <Flex
                            // border='1px solid red'
                            flexDir='column'
                        >
                            <Heading
                                fontFamily='"Montserrat Alternates", sans-serif'
                                fontSize={{base: '1.25rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem'}}
                            >
                                {text}
                            </Heading>
                            <Text
                                fontSize='0.875rem'
                                fontWeight='semibold'
                                color={themeColor}
                            >
                                {info}
                            </Text>
                        </Flex>
                    </Grid>
                ))
            }
        </Flex>
    );
};