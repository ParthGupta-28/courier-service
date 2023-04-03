import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import axios from "axios";

export default function History({ userDetails }) {
  const [orderDetail, setOrderDetail] = useState({});
  let history;

  useEffect(() => {
    async function preOrders() {
      try {
        const res = await axios.get(
          `http://localhost:8080/users/${userDetails.email}/order`
        );
        history = res.data;
        setOrderDetail(history[0]);
      } catch (err) {}
    }

    preOrders();
  }, [userDetails.email]);

  console.log(orderDetail);

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
            spacing={3}
            alignItems="stretch"
            alignContent={"stretch"}
            width="50%"
          >
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
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                From:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
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
                Name of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor=" ">
                Phone Number of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                To:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor=" ">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>
          </VStack>
        </HStack>

        <HStack mt={"3"} alignItems="center" alignContent={"stretch"}>
          <FormLabel width={"40"} htmlFor=" ">
            Anything else you would like to add:
          </FormLabel>
          <Text sx={{ width: "100%" }}></Text>
        </HStack>

        <HStack mt={"3%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
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
            />
            <InputRightAddon
              alignItems="stretch"
              padding={0}
              size="lg"
              borderRightRadius={10}
              children={
                <Button
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
              icon={<VscTriangleRight size={"100%"} />}
              colorScheme="blue"
            />
          </motion.div>
        </HStack>
      </FormControl>
    </Box>
  );
}
