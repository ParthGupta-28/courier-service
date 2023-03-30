import "./App.css";
import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MdCall, MdEmail } from "react-icons/md";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TrackShipment from "./components/TrackShipment";
import History from "./components/History";
import UpdateProfile from "./components/UpdateProfile";
//import MainComponent from "./components/MainComponent";

function App() {
  const [panels, setPanels] = useState({
    home: false,
    login: false,
    signup: false,
    trackship: false,
    prevorder: false,
    updateprofile: false,
  });

  const [userDetails, setUserDetails] = useState({
    email: "",
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

  function onHandleClick(e) {
    const name = e.target.name;

    setPanels((prevPanels) => {
      return {
        home: false,
        login: false,
        signup: false,
        trackship: false,
        prevorder: false,
        updateprofile: false,
        [name]: !prevPanels[name],
      };
    });
  }

  return (
    <div>
      <Tabs
        variant="soft-rounded"
        align="center"
        colorScheme="red"
        isLazy
        pt={10}
        defaultIndex={-1}
      >
        <Flex width={"100%"} m={0}>
          <Heading
            fontWeight={"extrabold"}
            bgGradient="linear(to-r,purple.500,purple.700,purple.900)"
            sx={{ flex: 1 }}
            bgClip="text"
          >
            <Flex pl={10}>Online Courier Service</Flex>
          </Heading>

          <TabList mb={"2"}>
            <Tab color={"blackAlpha.700"} name="home" onClick={onHandleClick}>
              Home
            </Tab>
            <Tab color={"blackAlpha.700"} name="login" onClick={onHandleClick}>
              Login
            </Tab>
            <Tab color={"blackAlpha.700"} name="signup" onClick={onHandleClick}>
              Sign Up
            </Tab>
            <Tab
              color={"blackAlpha.700"}
              name="trackship"
              onClick={onHandleClick}
            >
              Track Shipment
            </Tab>
            <Tab
              color={"blackAlpha.700"}
              name="prevorder"
              onClick={onHandleClick}
            >
              Previous Orders
            </Tab>
            <Tab
              color={"blackAlpha.700"}
              name="updateprofile"
              onClick={onHandleClick}
            >
              Update Profile
            </Tab>
          </TabList>

          <div style={{ flex: 1 }}>
            {userDetails.email && <Avatar name={userDetails.nameOfSender} />}
          </div>
        </Flex>

        <TabPanels>
          <TabPanel w={"70rem"} h={"32rem"}>
            {panels.home && (
              <Home userDetails={userDetails} setUserDetails={setUserDetails} />
            )}
          </TabPanel>
          <TabPanel w={"70rem"} h={"32rem"}>
            {panels.login && <Login setUserDetails={setUserDetails} />}
          </TabPanel>
          <TabPanel w={"70rem"} h={"32rem"}>
            {panels.signup && <SignUp setUserDetails={setUserDetails} />}
          </TabPanel>
          <TabPanel w={"70rem"} h={"32rem"}>
            {panels.trackship && <TrackShipment />}
          </TabPanel>
          <TabPanel w={"70rem"} h={"32rem"}>
            {panels.prevorder && <History userDetails={userDetails} />}
          </TabPanel>
          <TabPanel w={"70rem"} h={"32rem"}>
            {panels.updateprofile && (
              <UpdateProfile
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <HStack spacing={4} position="absolute" bottom={0} p={10}>
        <Button leftIcon={<MdEmail />} colorScheme="purple" variant="solid">
          Email
        </Button>
        <Button rightIcon={<MdCall />} colorScheme="purple" variant="outline">
          Call us
        </Button>
      </HStack>
    </div>
  );
}

export default App;
