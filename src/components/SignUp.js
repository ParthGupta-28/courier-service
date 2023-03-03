import React, { useState } from "react";
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
  VStack,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const handleClickPass = () => setShowPass(!showPass);
  const handleClickConfPass = () => setShowConfPass(!showConfPass);

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
        <HStack spacing={6}>
          <VStack alignItems={"stretch"} spacing={6}>
            <HStack>
              <FormLabel width={80} htmlFor="name">
                Name:
              </FormLabel>
              <Input type="text" borderColor={"black"} name="name" id="name" />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="state">
                State:
              </FormLabel>
              <Input
                type="text"
                borderColor={"black"}
                name="state"
                id="state"
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
              />
            </HStack>

            <HStack spacing={0}>
              <FormLabel width={80} htmlFor="password">
                Password:
              </FormLabel>
              <InputGroup p="0" m="0">
                <Input
                  type={showPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="password"
                  id="password"
                />
                <InputRightElement>
                  <IconButton
                    h="1.75rem"
                    size="sm"
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
                name="phoneNo"
                id="phoneNo"
              />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="city">
                City:
              </FormLabel>
              <Input type="text" borderColor={"black"} name="city" id="city" />
            </HStack>

            <HStack>
              <FormLabel width={80} htmlFor="pincode">
                Pincode:
              </FormLabel>
              <Input
                type="number"
                borderColor={"black"}
                name="pincode"
                id="pincode"
              />
            </HStack>

            <HStack spacing={0}>
              <FormLabel width={80} htmlFor="confPassword">
                Confirm Password:
              </FormLabel>
              <InputGroup>
                <Input
                  type={showConfPass ? "text" : "password"}
                  variant="outline"
                  borderColor={"black"}
                  name="confPassword"
                  id="confPassword"
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    onClick={handleClickConfPass}
                    icon={showConfPass ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </VStack>
        </HStack>
        <HStack mt={6}>
          <FormLabel width={80} htmlFor="address">
            Address:
          </FormLabel>
          <Input
            type="text"
            borderColor={"black"}
            name="address"
            id="address"
          />
        </HStack>

        <ButtonGroup p={4} variant="solid" mt={"5%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Save</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Cancel</Button>
          </motion.div>
        </ButtonGroup>
      </FormControl>
    </Box>
  );
}
