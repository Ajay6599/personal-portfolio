import { Grid, Heading, VStack } from "@chakra-ui/react";
import { ContactMe } from "../components/ContactMe";
import { ContactForm } from "../components/ContactForm";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export const Contact = () => {

    const { themeColor } = useContext(ThemeContext);

    const location = useLocation();

    const contactRef = useRef(null);
    const secHeadingRef = useRef(null);
    const contactDataRefs = useRef([]);
    const contactFormRefs = useRef(null);

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(contactRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power2.out"
        });
        tl.from(secHeadingRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
        tl.from(contactDataRefs.current, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 1,
            ease: "power3.out"
        });
        tl.from(contactFormRefs.current, {
            opacity: 0,
            x: 50,
            duration: 0.8,
            stagger: 1,
            ease: "power3.out"
        });

        tl.play();
        return () => {
            tl.kill();
        };
    }, [location.pathname]);

    return (
        <VStack
            // border='1px solid'
            w='84%'
            spacing={{base: '12', sm: '12', md: '20', lg: '20'}}
            zIndex='10'
        >
            <Heading ref={contactRef}>
                Contact Me
            </Heading>

            <Grid
                // border='1px solid green'
                gridTemplateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gridTemplateAreas={{
                    base: '"head" "info" "form"',
                    sm: '"head" "info" "form"',
                    md: '"head" "info" "form"',
                    lg: '"head head" "info form"'
                }}
                gap='2rem 1rem'
                w='100%'
            >

                <Heading
                    // border='1px solid blue'
                    ref={secHeadingRef}
                    textAlign='center'
                    fontSize={{base: '1.25rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem'}}
                    fontWeight='semibold'
                    color={themeColor}
                    gridArea='head'
                >
                    Let's Work Together!
                </Heading>

                <ContactMe area='info' collectRef={el => el && contactDataRefs.current.push(el)} />

                <ContactForm area='form' onColor={themeColor} formRef={contactFormRefs} />

            </Grid>
        </VStack>
    );
};