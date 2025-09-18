import { Grid, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { PiBriefcaseBold, PiUserBold } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
import { FaRegEnvelope } from "react-icons/fa";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GsapContext } from "../context/GsapContextProvider";

export const Navbar = ({ isActivePage }) => {

    let { themeColor, themeMode } = useContext(ThemeContext);

    let navLinks = [
        {
            text: 'Home',
            path: '/',
            iconFun: <BiHomeAlt size='20' />
        },
        {
            text: 'About',
            path: '/about',
            iconFun: <PiUserBold size='20' />
        },
        {
            text: 'Resume',
            path: '/resume',
            iconFun: <TbListDetails size='20' />
        },
        {
            text: 'Portfolio',
            path: '/portfolio',
            iconFun: <PiBriefcaseBold size='20' />
        },
        {
            text: 'Contact',
            path: '/contact',
            iconFun: <FaRegEnvelope size='20' />
        },
    ];

    let { masterTimeline } = useContext(GsapContext);

    const navContainer = useRef(null);
    const navIconRef = useRef([]);

    const addIconRef = (el) => {
        if (el && !navIconRef.current.includes(el)) {
            navIconRef.current.push(el);
        }
    };

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(navContainer.current, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });

        tl.from(navIconRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.8,
            ease: "back.out(1.7)",
        });
        masterTimeline.current.add(tl); //, "+=0.2"
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <HStack
            ref={navContainer}
            bgColor={themeMode === 'light' ? 'white' : '#202020'}
            pos='fixed'
            bottom={{ base: '2.5px', sm: '0.5', md: '2', lg: '2' }}
            p='0.25rem 0rem'
            rounded='full'
            boxShadow={`0 0 5px 1px ${themeColor}`}
            w={{ base: '99%', sm: '90%', md: '50%', lg: '30%' }}
            zIndex='1000'
        >
            <Grid
                // border='1px solid blue'
                w='100%'
                gridTemplateColumns='repeat(5, auto)'
                gap={{ base: '0rem', sm: '1rem', md: '1rem', lg: '1rem' }}
                justifyContent='space-evenly'
            >
                {
                    navLinks.map(({ text, path, iconFun }) => (
                        <NavLink
                            key={text}
                            ref={addIconRef}
                            to={path}
                            style={({ isActive }) => ({
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
                                    borderRadius='50%'
                                    variant='unstyled'
                                    display='flex'
                                    icon={iconFun}
                                    transition='0.5s ease-in-out'
                                    _hover={{
                                        boxShadow: isActivePage !== path && `0 0 2px 1px ${themeColor}`,
                                    }}
                                />

                            </Tooltip>

                        </NavLink>
                    ))
                }
            </Grid>
        </HStack>
    );
};