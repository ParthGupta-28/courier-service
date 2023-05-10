import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function UpdateProfile({ setUserDetails, userDetails }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [credentials, setCredentials] = useState({
    nameOfSender: userDetails.nameOfSender,
    phoneOfSender: userDetails.phoneOfSender,
    stateOfSender: userDetails.stateOfSender,
    cityOfSender: userDetails.cityOfSender,
    addressOfSender: userDetails.addressOfSender,
    pincodeOfSender: userDetails.pincodeOfSender,
  });

  const [identity, setIdentity] = useState({
    currentpassword: "",
    password: "",
    confPassword: "",
  });

  const handleClickPass = () => setShowPass(!showPass);
  const handleClickConfPass = () => setShowConfPass(!showConfPass);
  const handleClickNewPass = () => setShowNewPass(!showNewPass);
  const toast = useToast();

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
  function onChangeIdentity(e) {
    const name = e.target.name;
    const value = e.target.value;

    setIdentity((prevIdentity) => {
      return {
        ...prevIdentity,
        [name]: value,
      };
    });
  }
  async function onClickUpdate() {
    try {
      const res = await axios.put(
        `https://courier-backend-vvsg.onrender.com/users/update/${userDetails.email}/${identity.currentpassword}`,
        {
          ...credentials,
          password: identity.password,
        }
      );
      setUserDetails((prevDetails) => {
        return {
          ...prevDetails,
          ...credentials,
        };
      });
      toast({
        title: "Account Updated.",
        description: "We've updated your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
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
  }

  const inputBreakpoint = { xl: "sm", "2xl": "md" };

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
      <FormControl h="100%">
        <Stack spacing={6} direction={{ base: "column", xl: "row" }}>
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

            <HStack spacing={0}>
              <FormLabel width={80} htmlFor="currentpassword">
                Current Password:
              </FormLabel>
              <InputGroup p="0" m="0" size={inputBreakpoint}>
                <Input
                  type={showPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="currentpassword"
                  id="currentpassword"
                  onChange={onChangeIdentity}
                  value={identity["currentpassword"]}
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

            <HStack spacing={0}>
              <FormLabel width={80} htmlFor="password">
                New Password:
              </FormLabel>

              <InputGroup p="0" m="0" size={inputBreakpoint}>
                <Input
                  type={showNewPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="password"
                  id="password"
                  onChange={onChangeIdentity}
                  value={identity["password"]}
                />
                <InputRightElement height={"100%"} width={"2.5rem"}>
                  <IconButton
                    size={{ base: "xs", "2xl": "sm" }}
                    onClick={handleClickNewPass}
                    icon={showNewPass ? <FaEyeSlash /> : <FaEye />}
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
                Confirm New Password:
              </FormLabel>
              <InputGroup p="0" m="0" size={inputBreakpoint}>
                <Input
                  type={showConfPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="confPassword"
                  id="confPassword"
                  onChange={onChangeIdentity}
                  value={identity["confPassword"]}
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

        <ButtonGroup p={4} variant="solid" mt={"5%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button onClick={onClickUpdate} colorScheme="blue">
              Update
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Cancel</Button>
          </motion.div>
        </ButtonGroup>
      </FormControl>
    </Box>
  );
}
