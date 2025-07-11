import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { SlMinus, SlPlus } from "react-icons/sl";
import { ThemeContext } from "../context/ThemeContextProvider";

export const Education = ({ eduArr }) => {

    const { themeMode } = useContext(ThemeContext);

    return (
        <Accordion
            allowToggle
            w='100%'
        >

            {
                eduArr.map(({ university, course, year, description }, idx) => (
                    <AccordionItem
                        key={idx}
                        border='none'
                        borderBottom='2px solid #505050'
                        borderRight={idx === 0 ? '2px solid transparent' : '2px solid #505050'}
                        pos='relative'
                    >
                        {({ isExpanded }) => (
                            <>
                                <AccordionButton
                                    // border='1px solid'
                                    p='0.625rem'
                                    _hover={{
                                        bgColor: 'transparent'
                                    }}
                                >
                                    <Text
                                        // border='1px solid green'
                                        fontSize={{base: '0.75rem', sm: '', md: '', lg: '0.875rem'}}
                                        textAlign='left'
                                        fontWeight='semibold'
                                        fontFamily='"Montserrat Alternates", sans-serif'
                                    >
                                        {university}
                                    </Text>

                                    <Box
                                        boxShadow='1px 1px 2px #505050'
                                        borderRadius='50%'
                                        // border='1px solid white'
                                        bgColor={themeMode === "light" ? 'white' : '#111'}
                                        display='flex'
                                        size='20'
                                        pos='absolute'
                                        bottom='-11px'
                                        right='-11px'
                                        zIndex='10'
                                    >
                                        {
                                            isExpanded
                                            ? <SlMinus size='20' color={themeMode === 'light' ? '#505050' : '#A9A9A9'} />
                                            : <SlPlus size='20' color={themeMode === 'light' ? '#505050' : '#A9A9A9'}/>
                                        }
                                    </Box>
                                </AccordionButton>

                                <AccordionPanel
                                    // border='1px solid green'
                                    p='0.625rem'
                                    display='flex'
                                    flexDir='column'
                                    gap='1rem'
                                >

                                    <Flex
                                        justifyContent='space-between'
                                        alignItems='center'
                                    >
                                        <Heading
                                            fontSize={{base: '0.875rem', sm: '', md: '', lg: '1rem'}}
                                            fontFamily='"Montserrat Alternates", sans-serif'
                                        >
                                            {course}
                                        </Heading>
                                        <Text
                                            fontWeight='bold'
                                            fontSize={{base: '0.625rem', sm: '', md: '', lg: '0.75rem'}}
                                        >
                                            {year}
                                        </Text>
                                    </Flex>

                                    <Text
                                        fontSize={{base: '0.75rem', sm: '', md: '', lg: '0.875rem'}}
                                    >
                                        {description}
                                    </Text>

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))
            }

        </Accordion>
    );
};