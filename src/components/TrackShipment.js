import React, { useState } from "react";
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
  Stack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

export default function TrackShipment() {
  const center = { lat: 28.6139, lng: 77.209 };
  const [orderId, setOrderId] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBTmMDKVdnUUkrEtB1xfOHNmAITcWnZpEk",
  });

  async function onClickTrackOrder() {
    const res = await axios.get(`http://localhost:8080/users/${orderId}`);
    let result = new google.maps.Geocoder(); // eslint-disable-line
    const xxx = await result.geocode({ address: "bhopal" });
    console.log(xxx);
  }

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
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </FormControl>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Button colorScheme="blue" onClick={onClickTrackOrder}>
              GO
            </Button>
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
