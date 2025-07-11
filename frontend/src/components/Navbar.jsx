import { Grid, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { PiBriefcaseBold, PiUserBold } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
import { FaRegEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
export const Navbar = () => {

    let navLinks = [
        {
            text: 'Home',
            path: '/',
            iconFun: <BiHomeAlt size='20'/>
        },
        {
            text: 'About',
            path: '/about',
            iconFun: <PiUserBold size='20'/>
        },
        {
            text: 'Resume',
            path: '/resume',
            iconFun: <TbListDetails size='20'/>
        },
        {
            text: 'Portfolio',
            path: '/portfolio',
            iconFun: <PiBriefcaseBold size='20'/>
        },
        {
            text: 'Contact',
            path: '/contact',
            iconFun: <FaRegEnvelope size='20' />
        },
    ];

    let { themeColor, themeMode } = useContext(ThemeContext);

    return (
        <HStack
            bgColor={themeMode === 'light' ? 'white' : '#202020'}
            pos='fixed'
            bottom={{base: '2.5px', sm: '0.5', md: '2', lg: '2'}}
            p='0.25rem 0rem'
            rounded='full'
            boxShadow={`0 0 5px 1px ${themeColor}`}
            w={{base: '99%', sm: '90%', md: '50%', lg: '30%'}}
            zIndex='1000'
        >
            <Grid
                // border='1px solid blue'
                w='100%'
                gridTemplateColumns='repeat(5, auto)'
                gap={{base: '0rem', sm: '1rem', md: '1rem', lg: '1rem'}}
                justifyContent='space-evenly'
            >
                {
                    navLinks.map(({text, path, iconFun}) => (
                        <NavLink
                            key={text}
                            to={path}
                            // style={{border: "1px solid red"}}
                            style={({isActive}) => ({
                                color: isActive ? themeColor : themeMode === 'light' ? 'black' : 'white'
                            })}
                        >

                            <Tooltip
                                label={text}
                                placement="top"
                                bgColor={themeColor}
                            >

                                <IconButton
                                    // border='1px solid red'
                                    variant='unstyled'
                                    display='flex'
                                    icon={iconFun}
                                />

                            </Tooltip>

                        </NavLink>
                    ))
                }
            </Grid>
        </HStack>
    );
};