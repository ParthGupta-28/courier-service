import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

export default function SignUp({
  setUserDetails,
  isOpenSignUp,
  onCloseSignUp,
  onOpenLogin,
  userName,
}) {
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    nameOfSender: "",
    phoneOfSender: "",
    stateOfSender: "",
    cityOfSender: "",
    addressOfSender: "",
    pincodeOfSender: "",
  });

  const [identityCreds, setIdentityCreds] = useState({
    password: "",
    confPassword: "",
  });

  const handleClickPass = () => setShowPass(!showPass);
  const handleClickConfPass = () => setShowConfPass(!showConfPass);

  function onChangeCredentials(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [name]: value,
      };
    });
  }

  function onChangeIdentityCreds(e) {
    const name = e.target.name;
    const value = e.target.value;

    setIdentityCreds((prevIdentityCreds) => {
      return {
        ...prevIdentityCreds,
        [name]: value,
      };
    });
  }

  const inputBreakpoint = { xl: "sm", "2xl": "md" };

  async function onClickSignUp() {
    if (identityCreds["confPassword"] === identityCreds["password"]) {
      try {
        const res = await axios.post("http://localhost:8080/users", {
          ...credentials,
          password: identityCreds["password"],
        });

        setUserDetails((prevDetails) => {
          return { ...prevDetails, ...res.data };
        });

        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        userName.current = res.data.nameOfSender;
        onCloseSignUp();
      } catch (err) {
        let statement;

        if (err.response.data.errors) {
          statement = err.response.data.errors[0].defaultMessage;
        } else {
          statement = err.response.data.message;
        }
        toast({
          title: "Error.",
          description: statement,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Password does not match.",
        description: "password and confirm password does not match.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }

  function onClickLogin() {
    onCloseSignUp();
    onOpenLogin();
  }

  return (
    <Modal
      isOpen={isOpenSignUp}
      size={{ base: "lg", lg: "5xl" }}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent>
        <Box
          borderRadius={"xl"}
          w="100%"
          h="100%"
          p={"30"}
          bg="lavenderblush"
          borderColor="black"
          borderWidth={"2px"}
        >
          <FormControl h="100%">
            <Stack spacing={6} direction={{ base: "column", lg: "row" }}>
              <VStack alignItems={"stretch"} spacing={6}>
                <HStack>
                  <FormLabel width={80} htmlFor="name">
                    Name:
                  </FormLabel>
                  <Input
                    type="text"
                    borderColor={"black"}
                    name="nameOfSender"
                    id="name"
                    onChange={onChangeCredentials}
                    value={credentials["nameOfSender"]}
                    size={inputBreakpoint}
                  />
                </HStack>

                <HStack>
                  <FormLabel width={80} htmlFor="state">
                    State:
                  </FormLabel>
                  <Input
                    type="text"
                    borderColor={"black"}
                    name="stateOfSender"
                    id="state"
                    onChange={onChangeCredentials}
                    value={credentials["stateOfSender"]}
                    size={inputBreakpoint}
                  />
                </HStack>

                <HStack>
                  <FormLabel width={80} htmlFor="email">
                    Email address:
                  </FormLabel>
                  <Input
                    type="email"
                    borderColor={"black"}
                    name="email"
                    id="email"
                    onChange={onChangeCredentials}
                    value={credentials["email"]}
                    size={inputBreakpoint}
                  />
                </HStack>

                <HStack spacing={0}>
                  <FormLabel width={80} htmlFor="password">
                    Password:
                  </FormLabel>

                  <InputGroup p="0" m="0" size={inputBreakpoint}>
                    <Input
                      type={showPass ? "text" : "password"}
                      variant="outline"
                      borderColor={"black"}
                      name="password"
                      id="password"
                      onChange={onChangeIdentityCreds}
                      value={identityCreds["password"]}
                    />
                    <InputRightElement height={"100%"} width={"2.5rem"}>
                      <IconButton
                        size={{ base: "xs", "2xl": "sm" }}
                        onClick={handleClickPass}
                        icon={showPass ? <FaEyeSlash /> : <FaEye />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </HStack>
              </VStack>

              <VStack alignItems={"stretch"} spacing={6}>
                <HStack>
                  <FormLabel width={"20rem"} htmlFor="phoneNo">
                    Phone Number:
                  </FormLabel>
                  <Input
                    type="number"
                    borderColor={"black"}
                    name="phoneOfSender"
                    id="phoneNo"
                    onChange={onChangeCredentials}
                    value={credentials["phoneOfSender"]}
                    size={inputBreakpoint}
                  />
                </HStack>

                <HStack>
                  <FormLabel width={80} htmlFor="city">
                    City:
                  </FormLabel>
                  <Input
                    type="text"
                    borderColor={"black"}
                    name="cityOfSender"
                    id="city"
                    onChange={onChangeCredentials}
                    value={credentials["cityOfSender"]}
                    size={inputBreakpoint}
                  />
                </HStack>

                <HStack>
                  <FormLabel width={80} htmlFor="pincode">
                    Pincode:
                  </FormLabel>
                  <Input
                    type="number"
                    borderColor={"black"}
                    name="pincodeOfSender"
                    id="pincode"
                    onChange={onChangeCredentials}
                    value={credentials["pincodeOfSender"]}
                    size={inputBreakpoint}
                  />
                </HStack>

                <HStack spacing={0}>
                  <FormLabel width={80} htmlFor="confPassword">
                    Confirm Password:
                  </FormLabel>
                  <InputGroup p="0" m="0" size={inputBreakpoint}>
                    <Input
                      type={showConfPass ? "text" : "password"}
                      variant="outline"
                      borderColor={"black"}
                      name="confPassword"
                      id="confPassword"
                      onChange={onChangeIdentityCreds}
                      value={identityCreds["confPassword"]}
                    />
                    <InputRightElement height={"100%"} width={"2.5rem"}>
                      <IconButton
                        size={{ base: "xs", "2xl": "sm" }}
                        onClick={handleClickConfPass}
                        icon={showConfPass ? <FaEyeSlash /> : <FaEye />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </HStack>
              </VStack>
            </Stack>
            <HStack mt={6}>
              <FormLabel width={80} htmlFor="address">
                Address:
              </FormLabel>
              <Input
                type="text"
                borderColor={"black"}
                name="addressOfSender"
                id="address"
                onChange={onChangeCredentials}
                value={credentials["addressOfSender"]}
                size={inputBreakpoint}
              />
            </HStack>

            <Center>
              <ButtonGroup p={4} variant="solid" mt={"5%"}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Button colorScheme="blue" onClick={onClickSignUp}>
                    Sign up
                  </Button>
                </motion.div>
              </ButtonGroup>
            </Center>
          </FormControl>
          <Center>
            <Text>
              Already Have An Account?{" "}
              <Link color={"blue"} onClick={onClickLogin}>
                Login
              </Link>
            </Text>
          </Center>
        </Box>
      </ModalContent>
    </Modal>
  );
}
