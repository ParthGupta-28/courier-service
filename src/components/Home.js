import React, { useState } from "react";
import { Box, Button, ButtonGroup, FormControl } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HomeComponent from "./HomeComponent";

export default function Home() {
  const [userDetails, setUserDetails] = useState({
    nameOfSender: "",
    phoneOfSender: "",
    stateOfSender: "",
    cityOfSender: "",
    addressOfSender: "",
    pincodeOfSender: "",

    nameOfReceiver: "",
    phoneOfReceiver: "",
    stateOfReceiver: "",
    cityOfReceiver: "",
    addressOfReceiver: "",
    pincodeOfReceiver: "",

    additionalDetails: "",
  });

  return (
    <Box
      borderRadius={"xl"}
      w="100%"
      h="100%"
      p={"30"}
      bg="lavenderblush"
      borderColor="black"
      border="1px"
    >
      <FormControl>
        <HomeComponent
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />

        <ButtonGroup p={4} variant="solid" spacing="6">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">Book Order</Button>
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
