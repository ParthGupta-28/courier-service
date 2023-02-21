import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function TrackShipment() {
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
      <FormControl as="fieldset">
        <FormLabel>Enter your: </FormLabel>
        <RadioGroup defaultValue="Order No.">
          <HStack spacing="24px">
            <Radio value="Order no." borderColor={"black"}>
              Order Number::
            </Radio>
            <Radio value="Refrence no." borderColor={"black"}>
              Reference Number::
            </Radio>
          </HStack>
        </RadioGroup>
        <Input variant={"outline"} type="number" borderColor={"black"}></Input>
      </FormControl>
      <ButtonGroup p={4} variant="solid" spacing="6">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button colorScheme="blue">GO</Button>
        </motion.div>
      </ButtonGroup>
    </Box>
  );
}
