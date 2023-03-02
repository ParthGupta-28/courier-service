import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./lottiefiles/MOGRAPH.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box
      borderRadius={"xl"}
      w="100%"
      h="100%"
      p={"30"}
      bg="lavenderblush"
      borderColor="black"
      borderWidth={"2px"}
    >
      <FormControl>
        <HStack>
          <VStack width={"50%"}>
            <Flex alignSelf={"flex-start"}>
              <FormLabel htmlFor="email">Email address/Phone Number</FormLabel>
            </Flex>
            <Flex alignSelf={"flex-start"}>
              <Input
                width={"80"}
                type="email"
                borderColor={"black"}
                name="email"
                id="email"
              />
            </Flex>

            <Flex alignSelf={"flex-start"}>
              <FormLabel mt="6" htmlFor="password">
                Password
              </FormLabel>
            </Flex>

            <Flex alignSelf={"flex-start"}>
              <InputGroup width={"80"}>
                <Input
                  pr="3.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  variant="outline"
                  borderColor={"black"}
                  width={"80"}
                  name="password"
                  id="password"
                />
                <InputRightElement width="2.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    icon={show ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </Flex>

            <br />

            <ButtonGroup p={4} variant="solid" spacing="6" mt={6}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Button colorScheme={"blue"}>Login</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Button colorScheme={"blue"}>Cancel</Button>
              </motion.div>
            </ButtonGroup>
          </VStack>

          <Lottie options={defaultOptions} height={"25rem"} />
        </HStack>
      </FormControl>
    </Box>
  );
}
