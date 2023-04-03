import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import axios from "axios";

export default function Login({
  setUserDetails,
  onCloseLogin,
  isOpenLogin,
  onOpenSignUp,
}) {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [creds, setCreds] = useState({ email: "", password: "" });

  function onChangeCreds(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCreds((prevCreds) => {
      return {
        ...prevCreds,
        [name]: value,
      };
    });
  }

  function onClickSignUp() {
    onCloseLogin();
    onOpenSignUp();
  }

  async function onClickLogin() {
    try {
      const res = await axios.get(
        `http://localhost:8080/users/${creds["email"]}/${creds["password"]}`
      );

      setUserDetails((prevDetails) => {
        return { ...prevDetails, ...res.data };
      });

      toast({
        title: "Login Sucessful.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      onCloseLogin();
    } catch (err) {
      toast({
        title: "Error.",
        description: err.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./lottiefiles/MOGRAPH.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal isOpen={isOpenLogin} isCentered={true} borderRadius={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <Box
          w="100%"
          h="100%"
          p={"30"}
          bg="lavenderblush"
          borderColor="black"
          borderWidth={"2px"}
        >
          <Center>
            <Heading>Login</Heading>
          </Center>
          <br />
          <br />
          <FormControl>
            <HStack>
              <VStack width={"50%"}>
                <Flex alignSelf={"flex-start"}>
                  <FormLabel htmlFor="email">
                    Email address/Phone Number
                  </FormLabel>
                </Flex>
                <Flex alignSelf={"flex-start"}>
                  <Input
                    width={"80"}
                    type="email"
                    borderColor={"black"}
                    name="email"
                    id="email"
                    onChange={onChangeCreds}
                    value={creds["email"]}
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
                      onChange={onChangeCreds}
                      value={creds["password"]}
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
                    <Button colorScheme={"blue"} onClick={onClickLogin}>
                      Login
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Button colorScheme={"blue"} onClick={onClickSignUp}>
                      signUp
                    </Button>
                  </motion.div>
                </ButtonGroup>
              </VStack>
            </HStack>
          </FormControl>
        </Box>
      </ModalContent>
    </Modal>
  );
}
