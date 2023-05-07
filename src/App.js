import "./App.css";
import React, { useRef, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  HStack,
  Avatar,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TrackShipment from "./components/TrackShipment";
import History from "./components/History";
import UpdateProfile from "./components/UpdateProfile";
//import MainComponent from "./components/MainComponent";

function App() {
  const userName = useRef();

  const {
    isOpen: isOpenLogin,
    onClose: onCloseLogin,
    onOpen: onOpenLogin,
  } = useDisclosure({ defaultIsOpen: true });
  const {
    isOpen: isOpenSignUp,
    onClose: onCloseSignUp,
    onOpen: onOpenSignUp,
  } = useDisclosure();

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

    orderID: "",
    status: "",
  });

  return (
    <div>
      <Login
        setUserDetails={setUserDetails}
        isOpenLogin={isOpenLogin}
        onCloseLogin={onCloseLogin}
        onOpenSignUp={onOpenSignUp}
        userName={userName}
      />
      <SignUp
        setUserDetails={setUserDetails}
        isOpenSignUp={isOpenSignUp}
        onCloseSignUp={onCloseSignUp}
        onOpenLogin={onOpenLogin}
        userName={userName}
      />
      <Tabs
        variant="soft-rounded"
        align="center"
        colorScheme="red"
        isLazy
        defaultIndex={0}
        pt={{ xl: "2", "2xl": "10" }}
      >
        <Flex width={"100%"} m={0}>
          <Heading
            fontFamily={"mono"}
            fontWeight={"extrabold"}
            //bgGradient="linear(to-r,purple.500,purple.700,purple.900)"
            sx={{ flex: 1 }}
            //bgClip="text"
            color={"yellow.200"}
          >
            <Flex pl={10}>Bon Voyage</Flex>
          </Heading>

          <TabList mb={"2"}>
            <Tab color={"blackAlpha.700"} name="home">
              Home
            </Tab>
            <Tab color={"blackAlpha.700"} name="trackship">
              Track Shipment
            </Tab>
            <Tab color={"blackAlpha.700"} name="prevorder">
              Previous Orders
            </Tab>
            <Tab color={"blackAlpha.700"} name="updateprofile">
              Update Profile
            </Tab>
          </TabList>

          <div style={{ flex: 1 }}>
            <Flex justifyContent={"end"} pr={10}>
              {userDetails.email && <Avatar name={userName.current} />}
            </Flex>
          </div>
        </Flex>

        <TabPanels>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "28rem", "2xl": "32rem" }}
          >
            {<Home userDetails={userDetails} setUserDetails={setUserDetails} />}
          </TabPanel>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "28rem", "2xl": "32rem" }}
          >
            {<TrackShipment />}
          </TabPanel>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "28rem", "2xl": "32rem" }}
          >
            {<History userDetails={userDetails} />}
          </TabPanel>
          <TabPanel
            w={{ base: "32rem", xl: "70rem" }}
            h={{ xl: "28rem", "2xl": "32rem" }}
          >
            {
              <UpdateProfile
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            }
          </TabPanel>
        </TabPanels>
      </Tabs>

      <HStack
        spacing={4}
        position="absolute"
        bottom={0}
        p={{ xl: "5", "2xl": "10" }}
      >
        <Link href="mailto: bonvoyage20234@gmail.com">
          <Button leftIcon={<MdEmail />} colorScheme="purple" variant="solid">
            Contact Us
          </Button>
        </Link>
      </HStack>
    </div>
  );
}

export default App;
