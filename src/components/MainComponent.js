import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { VStack, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MdCall, MdEmail } from "react-icons/md";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import TrackShipment from "./TrackShipment";
import History from "./History";

export default function MainComponent() {
  return (
    <VStack p={10} alignItems="center">
      <Center>
        <Heading
          fontWeight={"extrabold"}
          bgGradient="linear(to-r,purple.500,purple.700,purple.900)"
          bgClip="text"
        >
          ONLINE COURIER SERVICES
        </Heading>
      </Center>
      <Divider p={4} />

      <Tabs
        isManual
        variant="soft-rounded"
        colorScheme="red"
        isLazy="true"
        isFitted="true"
      >
        <TabList mb={"2"}>
          <Tab color={"blackAlpha.700"}>wadd</Tab>
          <Tab color={"blackAlpha.700"}>Home</Tab>
          <Tab color={"blackAlpha.700"}>Login</Tab>
          <Tab color={"blackAlpha.700"}>Sign Up</Tab>
          <Tab color={"blackAlpha.700"}>Track Shipment</Tab>
          <Tab color={"blackAlpha.700"}>Previous Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel w={"70rem"} h={"30rem"}></TabPanel>
          <TabPanel w={"70rem"} h={"30rem"}>
            <Home />
          </TabPanel>
          <TabPanel w={"70rem"} h={"30rem"}>
            <Login />
          </TabPanel>
          <TabPanel w={"70rem"} h={"30rem"}>
            <SignUp />
          </TabPanel>
          <TabPanel w={"70rem"} h={"30rem"}>
            <TrackShipment />
          </TabPanel>
          <TabPanel w={"70rem"} h={"30rem"}>
            <History />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Stack
        direction="row"
        spacing={4}
        alignSelf={"baseline"}
        position="absolute"
        bottom={3}
      >
        <Button leftIcon={<MdEmail />} colorScheme="purple" variant="solid">
          Email
        </Button>
        <Button rightIcon={<MdCall />} colorScheme="purple" variant="outline">
          Call us
        </Button>
      </Stack>
    </VStack>
  );
}
