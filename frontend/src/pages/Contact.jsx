import { Grid, Heading, VStack } from "@chakra-ui/react";
import { ContactMe } from "../components/ContactMe";
import { ContactForm } from "../components/ContactForm";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const Contact = () => {

    const { themeColor } = useContext(ThemeContext);

    return (
        <VStack
            // border='1px solid'
            w='84%'
            spacing={{base: '12', sm: '12', md: '20', lg: '20'}}
        >
            <Heading>
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
                    textAlign='center'
                    fontSize={{base: '1.25rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem'}}
                    fontWeight='semibold'
                    color={themeColor}
                    gridArea='head'
                >
                    Let's Work Together!
                </Heading>

                <ContactMe area='info' />

                <ContactForm area='form' onColor={themeColor} />

            </Grid>
        </VStack>
    );
};