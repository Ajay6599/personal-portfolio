// import { chakra, shouldForwardProp } from "@chakra-ui/react";
// import { motion, isValidMotionProp } from "framer-motion";

// export const MotionBox = chakra(motion.div, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

// export const MotionHeading = chakra(motion.h1, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

// import { Box, Button, Heading, VStack } from "@chakra-ui/react";
// import { MotionBox, MotionHeading } from "../utils/MotionComponents";

// export const Home = () => {
//   return (
//     <VStack h="100vh" justify="center" spacing={6}>
      
//       <MotionHeading
//         fontSize={["3xl", "4xl", "5xl"]}
//         color="teal.400"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Heading>Hello, I'm Ajay</Heading>
//       </MotionHeading>

//       <MotionBox
//         fontSize="xl"
//         textAlign="center"
//         maxW="500px"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//       >
//         <Box>I'm a MERN Full Stack Developer passionate about building modern web apps.</Box>
//       </MotionBox>

//       <MotionBox
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//       >
//         <Button colorScheme="teal" variant="solid">
//           Download CV
//         </Button>
//       </MotionBox>
//     </VStack>
//   );
// };