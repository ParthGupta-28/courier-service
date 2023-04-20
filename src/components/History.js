import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  IconButton,
  FormControl,
  HStack,
  Input,
  Spacer,
  InputGroup,
  InputRightAddon,
  Button,
  FormLabel,
  VStack,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import axios from "axios";

export default function History({ userDetails }) {
  const toast = useToast();
  const [orderDetail, setOrderDetail] = useState({
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
  const history = useRef([]);
  const index = useRef(0);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    async function preOrders() {
      try {
        const res = await axios.get(
          `http://localhost:8080/users/${userDetails.email}/order`
        );
        history.current = res.data;
        if (history.current.length) {
          setOrderDetail(history.current[index.current]);
        }
      } catch (err) {}
    }

    preOrders();
  }, [userDetails.email]);

  function onClickLeftButton() {
    index.current = index.current - 1;
    setOrderDetail(history.current[index.current]);
  }

  function onClickRightButton() {
    index.current = index.current + 1;
    setOrderDetail(history.current[index.current]);
  }

  function onChangeOrderId(e) {
    setOrderId(e.target.value);
  }

  function onClickSearchButton() {
    let orderIndex = -1;
    for (let i = 0; i < history.current.length; i++) {
      const obj = history.current[i];

      if (obj.orderID === orderId) {
        orderIndex = i;
      }
    }

    if (orderIndex > -1) {
      index.current = orderIndex;
      setOrderDetail(history.current[index.current]);
    } else {
      toast({
        title: "Error.",
        description: "OrderId does not exist.",
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
      borderWidth={"2px"}
    >
      <FormControl>
        <HStack>
          <VStack
            spacing={{ lg: "1", "2xl": "3" }}
            alignItems="stretch"
            alignContent={"stretch"}
            width="50%"
            htmlFor=""
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Order Id:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.orderID}
              </Text>
            </Flex>
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Name of Sender:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.nameOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor=" ">
                Phone Number of Sender:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.phoneOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.stateOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.cityOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                From:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.addressOfSender}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.pincodeOfSender}
              </Text>
            </Flex>
          </VStack>

          <VStack
            spacing={3}
            alignItems="stretch"
            alignContent={"stretch"}
            width="50%"
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Status:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.status}
              </Text>
            </Flex>
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Name of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.nameOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor=" ">
                Phone Number of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.phoneOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.stateOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.cityOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                To:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.addressOfReceiver}
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }} textAlign="left">
                {orderDetail.pincodeOfReceiver}
              </Text>
            </Flex>
          </VStack>
        </HStack>

        <HStack mt={"3%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              isDisabled={index.current === 0}
              onClick={onClickLeftButton}
              icon={<VscTriangleLeft size={"100%"} />}
              colorScheme="blue"
            />
          </motion.div>
          <Spacer />
          <InputGroup size="lg" w={"50rem"}>
            <Input
              type="text"
              variant="outline"
              size="lg"
              borderColor={"black"}
              borderRadius={10}
              value={orderId}
              onChange={onChangeOrderId}
            />
            <InputRightAddon
              alignItems="stretch"
              padding={0}
              size="lg"
              borderRightRadius={10}
              children={
                <Button
                  onClick={onClickSearchButton}
                  height="100%"
                  colorScheme={"blue"}
                  borderRightRadius={10}
                  borderLeftRadius={0}
                >
                  Search
                </Button>
              }
            />
          </InputGroup>
          <Spacer />

          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              isDisabled={index.current === history.current.length - 1}
              onClick={onClickRightButton}
              icon={<VscTriangleRight size={"100%"} />}
              colorScheme="blue"
            />
          </motion.div>
        </HStack>
      </FormControl>
    </Box>
  );
}
