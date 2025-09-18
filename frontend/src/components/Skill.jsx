import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { SlMinus, SlPlus } from "react-icons/sl";
import { ThemeContext } from "../context/ThemeContextProvider";

export const Skill = ({ skillArr, skillRef }) => {

    const { themeColor, themeMode } = useContext(ThemeContext);

    let [skills, setSkills] = useState(skillArr);

    const handlerRange = (index, val) => {
        const updateVal = [...skills];
        updateVal[index].level = val;
        setSkills(updateVal);
    };

    return (
        <Accordion
            allowToggle
            w='100%'
            ref={skillRef}
        >

            {
                skills.map(({lang, level, desc}, idx) => (
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
                                    justifyContent='space-between'
                                >
                                    <Text
                                        // border='1px solid green'
                                        fontSize='0.875rem'
                                        textAlign='left'
                                        fontWeight='semibold'
                                        fontFamily='"Montserrat Alternates", sans-serif'
                                    >
                                        {lang}
                                    </Text>
                                    <Text
                                        fontSize='0.875rem'
                                        textAlign='left'
                                        fontWeight='semibold'
                                        fontFamily='"Montserrat Alternates", sans-serif'
                                    >
                                        {level}
                                        <Text
                                            as='span'
                                            fontWeight='bold'
                                            color={themeColor}
                                        >
                                            &nbsp;%
                                        </Text>
                                    </Text>

                                    <Box
                                        boxShadow='1px 1px 2px #505050'
                                        borderRadius='full'
                                        // border='1px solid black'
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
                                            : <SlPlus size='20' color={themeMode === 'light' ? '#505050' : '#A9A9A9'} />
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
                                    <Text
                                        fontSize='0.875rem'
                                    >
                                        {desc}
                                    </Text>

                                    <Slider
                                        value={level}
                                        min={0}
                                        max={100}
                                        step={1}
                                        onChange={(value) => handlerRange(idx, value)}
                                    >
                                        <SliderTrack bg={themeMode === 'light' ? '#D3D3D3' : '#202020'}>
                                            <SliderFilledTrack bg={themeMode === 'light' ? '#202020' : '#D3D3D3'} />
                                        </SliderTrack>

                                        <SliderThumb
                                            bg={themeColor}
                                            boxSize={5}
                                            border={themeMode === 'light' ? '2px solid #202020' : '2px solid #D3D3D3'}
                                            boxShadow={themeMode === 'light' ? '1px 1px 2px #202020' : '1px 1px 2px #D3D3D3'}
                                        />
                                    </Slider>

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))
            }

        </Accordion>
    );
};