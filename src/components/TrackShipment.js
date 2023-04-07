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
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function TrackShipment() {
  const center = { lat: 28.6139, lng: 77.209 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBs14RzT2ISKOBjnYsd7YuqGYMyw15ZQ5s",
  });

  if (!isLoaded) {
    return <Skeleton />;
  }
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
      <HStack h={"100%"} w={"100%"} spacing={5}>
        <VStack w={"50%"} h="100%" spacing={5}>
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
            <Input variant={"outline"} type="number" borderColor={"black"} />
          </FormControl>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue">GO</Button>
          </motion.div>
        </VStack>
        <Box height={"100%"} width={"100%"}>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          ></GoogleMap>
        </Box>
      </HStack>
    </Box>
  );
}
