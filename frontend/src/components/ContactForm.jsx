import { Box, Button, Flex, FormControl, Grid, Input, Text, Textarea, useToast, VStack } from "@chakra-ui/react";
import axios from 'axios';
import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import { IoMdCheckmarkCircle, IoMdSend } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContextProvider";

export const ContactForm = ({ area, onColor, formRef }) => {
    let { themeColor } = useContext(ThemeContext);

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

    let iconRef = useRef(null);
    let sendTextRef = useRef([]);
    const [iconSent, setIconSent] = useState(false);

    const launchAnimation = () => {
        const icon = iconRef.current;
        const button = icon.closest('button');
        let sendBtnWidth = button.offsetWidth;

        let trail = [];

        gsap.to(sendTextRef.current, {
            y: 10,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
        gsap.set(icon, { x: 0, y: 0 });

        gsap.to(icon, {
            duration: 2,
            x: sendBtnWidth,
            ease: 'none',
            onUpdate: () => {
                const x = gsap.getProperty(icon, 'x');
                const y = 2 * Math.sin(x * 0.12);  // Wave motion

                gsap.set(icon, { y: y });

                // Store trail point
                trail.push({ x, y });

                // Limit trail size
                if (trail.length > 30) trail.shift();

                // Delay smoke creation by 13 frames
                if (trail.length > 13) {
                    const pos = trail[trail.length - 13];
                    createSmoke(pos.x, pos.y, button);
                }
            }
        });
    };

    function createSmoke(x, y, container) {
        const smoke = document.createElement('div');
        smoke.style.position = 'absolute';
        smoke.style.width = '10px';
        smoke.style.height = '2px';
        smoke.style.backgroundColor = '#404040';
        smoke.style.borderRadius = '50%';
        smoke.style.pointerEvents = 'none';
        smoke.style.zIndex = '0';
        smoke.style.left = '0';
        smoke.style.top = '50%';
        smoke.style.transform = `translate(${x + 2}px, ${y}px)`; // offsetX = 2
        container.appendChild(smoke);

        // Animate movement
        gsap.to(smoke, {
            duration: 2,
            x: '+=40',
            ease: 'none',
            onComplete: () => smoke.remove()
        });

        // Fade and scale
        gsap.to(smoke, {
            duration: 1,
            opacity: 0,
            scale: 1.4,
            ease: 'power1.out'
        });
    }

    let toast = useToast();

    const submitHandler = async (e) => {
        e.preventDefault();
        launchAnimation();
        try {
            // const res = await axios.post(`http://localhost:8080/contact`, contactUser);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, contactUser);
            // console.log(res.data);
            setIconSent(true);
            gsap.killTweensOf(sendTextRef.current);
            gsap.killTweensOf(iconRef.current);
            gsap.set(iconRef.current, { x: 0, y: 0, rotate: 0 });
            setTimeout(() => {
                sendTextRef.current.forEach((el) => {
                    gsap.fromTo(el,
                        { opacity: 0, y: -10, stagger: 0.2, },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out"
                        }
                    );
                });
            }, 50); // Delay ensures DOM has updated
            toast({
                title: 'Sent Message',
                description: res.data.msg,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setContactUser({
                name: '',
                email: '',
                phoneNumber: '',
                emailSub: '',
                message: '',
            });

            setTimeout(() => {
                sendTextRef.current = [];
                setIconSent(false);
                gsap.set(iconRef.current, { x: 0, y: 0, rotate: -45 });
            }, 3000);
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
            setIconSent(false);
            gsap.killTweensOf(sendTextRef.current);
            gsap.killTweensOf(iconRef.current);
            gsap.set(iconRef.current, { x: 0, y: 0 });
            sendTextRef.current.forEach((el) => {
                gsap.set(el, {
                    opacity: 1,
                    y: 0,
                });
            });
            toast({
                title: 'Submission Failed',
                description: errorMsg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    const handleMouseEnter = () => {
        let tl = gsap.timeline();
        gsap.to(iconRef.current, {
            rotate: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        tl.from(sendTextRef.current, {
            y: -10,
            opacity: 0,
            duration: 0.6,
            color: themeColor,
            ease: "sine.inOut",
            stagger: 0.05
        });
    };
    const handleMouseLeave = () => {
        gsap.to(iconRef.current, {
            rotate: !iconSent ? -45 : 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    };

    return (
        <VStack
            // border='1px solid blue'
            gridArea={area}
        >

            <FormControl as='form' onSubmit={submitHandler} ref={formRef}>
                <Grid
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
                        gridArea='btn'
                        justifyContent='center'
                    >
                        <Button
                            type="submit"
                            variant='unstyled'
                            border='2px solid #808080'
                            borderRadius='20px'
                            w='140px'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            gap='1'
                            pos='relative'
                            overflow='hidden'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Box
                                ref={iconRef}
                                pos='absolute'
                                left='25px'
                                top='50%'
                                transform={`translateY(-50%) ${!iconSent ? 'rotate(-45deg)' : 'rotate(0deg)'}`}
                                zIndex='1'
                            >
                                {!iconSent ? <IoMdSend size='20' /> : <IoMdCheckmarkCircle size='20' />}
                            </Box>
                            <Text fontWeight="bold">
                                {
                                    (!iconSent ? "Send" : "Sent").split("").map((char, i) => (
                                        <Box
                                            as="span"
                                            key={i}
                                            ref={el => sendTextRef.current[i] = el}
                                            display="inline-block"
                                        >
                                            {char}
                                        </Box>
                                    ))
                                }
                            </Text>
                        </Button>
                    </Flex>

                </Grid>
            </FormControl>

        </VStack>
    );
};