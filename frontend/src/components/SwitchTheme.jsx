import { Flex, Grid, IconButton, Text, useBoolean } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContextProvider";
// import { FaCheck } from "react-icons/fa6";
import { CgCheck } from "react-icons/cg";

export const SwitchTheme = () => {

    let themeColors = ["#158A87", "#553DA6", "#B84147", "#9F922B", "#B65523"];

    let [isDrag, setIsDrag] = useBoolean();

    let [selectTheme, setSelectTheme] = useState('#158A87');

    let { onThemeColor, themeMode, themeModeHandler } = useContext(ThemeContext);

    const themeHandler = (color, idx) => {
        onThemeColor(color, idx);
        setSelectTheme(color);
    };

    return (
        <Flex
            // border='1px solid green'
            transition='right 1s ease-in-out'
            pos='fixed'
            zIndex='1000'
            // bgColor={isDrag ? themeColor : 'transparent'}
            right={{
                base: isDrag ? '0rem' : '-9.75rem',
                sm: isDrag ? '0rem' : '-9.5rem',
                md: isDrag ? '0rem' : '-9.5rem',
                lg: isDrag ? '0.1rem' : '-9.5rem'
            }}
            top='2'
            w='12.5rem'
            gap='0.5rem'
        >
            <Grid gap='2'>

                <IconButton
                    variant='unstyled'
                    display='flex'
                    // border='1px solid'
                    borderRadius='50%'
                    bgColor={themeMode === 'light' ? '#F5F5F5' : '#282828'}
                    boxShadow={isDrag ? 'inset 0 1px 2px 1px #505050' : '0 1px 2px 1px #505050'}
                    sx={{
                        "& svg": {
                            animation: "spinAnimation 2s linear infinite"
                        }
                    }}
                    icon={<FaCog />}
                    onClick={setIsDrag.toggle}
                />
                <IconButton
                    variant='unstyled'
                    borderRadius='50%'
                    display='flex'
                    // border='1px solid red'
                    bgColor={themeMode === 'light' ? '#F5F5F5' : '#282828'}
                    boxShadow='0 1px 2px 1px #505050'
                    transition='all 0.5s ease'
                    _hover={{
                        boxShadow: `inset 0 1px 2px 1px #404040`
                    }}
                    icon={themeMode === "light" ? <FaMoon /> : <FaSun />}
                    onClick={themeModeHandler}
                />
            </Grid>

            <Grid
                // border='1px solid red'
                rounded='md'
                bgColor={themeMode === 'light' ? '#F5F5F5' : '#282828'}
                boxShadow='0 1px 2px 1px #505050'
                w='100%'
                alignContent='space-evenly'
            >
                <Text
                    // border='1px solid orange'
                    textAlign='center'
                    fontWeight='medium'
                >
                    Theme Colors
                </Text>
                <Flex
                    // border='1px solid green'
                    alignItems='center'
                    justifyContent='space-evenly'
                >
                    {
                        themeColors.map((color, idx) => (
                            <Flex
                                key={color + idx}
                                bgColor={color}
                                w='1.5rem'
                                h='1.5rem'
                                rounded='full'
                                cursor='pointer'
                                onClick={() => themeHandler(color, idx)}
                                _hover={{
                                    boxShadow: themeMode === 'light' ? `0 0 2px 1px #202020` : `0 0 2px 1px #F5F5F5`
                                }}
                                alignItems='center'
                                justifyContent='center'
                            >
                                {
                                    selectTheme === color && (
                                        <IconButton
                                            icon={<CgCheck size='20' color='white' />}
                                            variant='unstyled'
                                            // border='1px solid white'
                                            size='sm'
                                            display='flex'
                                            justifyContent='center'
                                        />
                                    )
                                }
                            </Flex>
                        ))
                    }
                </Flex>
            </Grid>
        </Flex>
    );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes spinAnimation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);