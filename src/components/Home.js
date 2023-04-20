import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import HomeComponent from "./HomeComponent";
import axios from "axios";

export default function Home({ userDetails, setUserDetails }) {
  const toast = useToast();

  async function onClickBookOrder() {
    try {
      console.log(userDetails);
      const res = await axios.post(
        `http://localhost:8080/users/${userDetails.email}/order`,
        userDetails
      );

      toast({
        title: "Your Order Was Booked Successfully.",
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

  return (
    <Box
      borderRadius={"xl"}
      w="100%"
      h="100%"
      p={"30"}
      bg="lavenderblush"
      borderColor="black"
      border="2px"
    >
      <FormControl>
        <HomeComponent
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />

        <ButtonGroup p={4} variant="solid" spacing="6">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button onClick={onClickBookOrder} colorScheme="blue">
              Book Order
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Sign up</Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Cancel</Button>
          </motion.div>
        </ButtonGroup>
      </FormControl>
    </Box>
  );
}
