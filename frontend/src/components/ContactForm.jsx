import { Button, Flex, FormControl, Grid, Input, Textarea, useToast, VStack } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";

export const ContactForm = ({ area, onColor }) => {

    let [contactUser, setContactUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        emailSub: '',
        message: '',
    });

    const handlerInputChange = (e) => {
        const { id, value } = e.target;

        setContactUser(prev => ({
            ...prev,
            [id]: value
        }));
    };

    let toast = useToast();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post(`http://localhost:8080/contact`, contactUser);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, contactUser);
            // console.log(`${process.env.REACT_APP_API_URL?.replace(/\/+$/, '')}/contact`);
            // console.log(`${process.env.REACT_APP_API_URL}/contact`);
            // console.log(res.data);
            setContactUser({
                name: '',
                email: '',
                phoneNumber: '',
                emailSub: '',
                message: '',
            });
            toast({
                title: 'Sent Message',
                description: res.data.msg,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.log(error);

            let errorMsg = 'Something went wrong';

            // Handle Axios errors
            if (error.response && error.response.data) {
                if (typeof error.response.data === 'string') {
                    errorMsg = error.response.data;
                } else if (error.response.data.message) {
                    errorMsg = error.response.data.message;
                } else if (error.response.data.msg) {
                    errorMsg = error.response.data.msg;
                }
            } else if (error.message) {
                // Handle JS Error object
                errorMsg = error.message;
            }

            toast({
                title: 'Submission Failed',
                description: errorMsg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    return (
        <VStack
            // border='1px solid blue'
            gridArea={area}
        >

            <FormControl as='form' onSubmit={submitHandler}>
                <Grid
                    // border='1px solid red'
                    gridTemplateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(2, 1fr)'
                    }}
                    gridTemplateAreas={{
                        base: ' "name" "email" "phn" "sub" "msg" "btn" ',
                        sm: ' "name" "email" "phn" "sub" "msg" "btn" ',
                        md: ' "name email" "phn sub" "msg msg" "btn btn" ',
                        lg: ' "name email" "phn sub" "msg msg" "btn btn" '
                    }}
                    gap='0.75rem'
                >

                    <Flex
                        gridArea='name'
                    >
                        <Input
                            type='text'
                            placeholder='Full Name'
                            border='2px solid #808080'
                            pl='0.625rem'
                            pr='0.625rem'
                            focusBorderColor={onColor}
                            _hover={{
                                borderColor: 'none'
                            }}
                            autoComplete='off'
                            id='name'
                            value={contactUser.name}
                            onChange={handlerInputChange}
                        />

                    </Flex>

                    <Flex
                        gridArea='email'
                    >
                        <Input
                            type='email'
                            placeholder='Email Address'
                            border='2px solid #808080'
                            pl='0.625rem'
                            pr='0.625rem'
                            focusBorderColor={onColor}
                            _hover={{
                                borderColor: 'none'
                            }}
                            autoComplete='off'
                            id='email'
                            value={contactUser.email}
                            onChange={handlerInputChange}
                        />

                    </Flex>

                    <Flex
                        gridArea='phn'
                    >
                        <Input
                            type='tel'
                            placeholder='Phone Number'
                            border='2px solid #808080'
                            pl='0.625rem'
                            pr='0.625rem'
                            focusBorderColor={onColor}
                            _hover={{
                                borderColor: 'none'
                            }}
                            autoComplete='off'
                            maxLength='10'
                            id='phoneNumber'
                            value={contactUser.phoneNumber}
                            onChange={handlerInputChange}
                        />

                    </Flex>

                    <Flex
                        gridArea='sub'
                    >
                        <Input
                            type='text'
                            placeholder='Email Subject'
                            border='2px solid #808080'
                            pl='0.625rem'
                            pr='0.625rem'
                            focusBorderColor={onColor}
                            _hover={{
                                borderColor: 'none'
                            }}
                            autoComplete='off'
                            id='emailSub'
                            value={contactUser.emailSub}
                            onChange={handlerInputChange}
                        />

                    </Flex>

                    <Flex
                        gridArea='msg'
                    >
                        <Textarea
                            border='2px solid #808080'
                            pl='0.625rem'
                            pr='0.625rem'
                            focusBorderColor={onColor}
                            _hover={{
                                borderColor: 'none'
                            }}
                            placeholder="Your Message"
                            autoComplete="off"
                            id="message"
                            value={contactUser.message}
                            onChange={handlerInputChange}
                        />
                    </Flex>

                    <Flex
                        // border='1px solid blue'
                        gridArea='btn'
                        justifyContent='center'
                    >
                        <Button
                            type="submit"
                            variant='unstyled'
                            border='2px solid #808080'
                            borderRadius='20px'
                            w='140px'
                            pos='relative'
                            zIndex='1'
                            _after={{
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: "35px",
                                height: "10px",
                                borderRadius: '20px',
                                // backgroundColor: onColor,
                                color: '#111',
                                zIndex: '-1',
                                transform: 'translate(-50%, -50%)',
                                transition: 'all 1s ease-in-out'
                            }}
                            _hover={{
                                color: 'white',
                                _after: {
                                    backgroundColor: onColor,
                                    transform: 'translate(-50%, -50%) scale(3.75, 3.2)',
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </Flex>

                </Grid>
            </FormControl>

        </VStack>
    );
};