import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import Lottie from "react-lottie";

export default function TrackShipment() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./lottiefiles/MOGRAPH.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [orderLocation, setOrderLocation] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [showLocation, setShowLocation] = useState("");

  async function onClickTrackOrder() {
    const res = await axios.get(
      `https://courier-backend-vvsg.onrender.com/users/${orderId}`
    );

    const obj = {
      text: res.data.currentLocation,
    };

    setShowLocation(obj.text.split(",")[0]);

    const urllocation = new URLSearchParams(obj).toString();
    const location = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?${urllocation}&apiKey=3ab20da7ff4d4f828591517860636c2d`
    );
    const lat = location.data.features[0].properties.lat;
    const lon = location.data.features[0].properties.lon;
    setOrderLocation([lat, lon]);
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
      <Stack
        h={"100%"}
        w={"100%"}
        spacing={5}
        direction={{ base: "column", xl: "row" }}
      >
        <VStack w={{ base: "100%", lg: "50%" }} h="100%" spacing={5}>
          <FormControl as="fieldset">
            <FormLabel>Enter your Order Id </FormLabel>
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
        <Box height={{ base: "20rem", xl: "100%" }} width={"100%"}>
          {orderLocation.length ? (
            <MapContainer
              center={[23.42605475, 75.4064082]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[orderLocation[0], orderLocation[1]]}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{showLocation}</Popup>
              </Marker>
              <RecenterAutomatically
                lat={orderLocation[0]}
                lng={orderLocation[1]}
              />
            </MapContainer>
          ) : (
            <Lottie
              options={defaultOptions}
              style={{ position: "relative", height: "100%", width: "100%" }}
              isClickToPauseDisabled="true"
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
}

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};
