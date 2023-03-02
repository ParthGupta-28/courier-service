import React from "react";
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

export default function History() {
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
            htmlFor=""
          >
            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Name of Sender:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor="">
                Phone Number of Sender:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                From:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
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
              <FormLabel width={"60"} htmlFor="">
                Name of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"} alignItems="center" alignContent={"stretch"}>
              <FormLabel width={"60"} htmlFor="">
                Phone Number of Receiver:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                State:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                City:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                To:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>

            <Flex width={"100%"}>
              <FormLabel width={"60"} htmlFor="">
                Pin code:
              </FormLabel>
              <Text sx={{ width: "100%" }}></Text>
            </Flex>
          </VStack>
        </HStack>

        <HStack mt={"3"} alignItems="center" alignContent={"stretch"}>
          <FormLabel width={"40"} htmlFor="">
            Anything else you would like to add:
          </FormLabel>
          <Text sx={{ width: "100%" }}></Text>
        </HStack>

        <HStack mt={"3%"}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              icon={<VscTriangleLeft size={"lg"} />}
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
            />
            <InputRightAddon
              alignItems="stretch"
              padding={0}
              size="lg"
              children={
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Button height="100%" colorScheme={"blue"} borderRadius="0">
                    Search
                  </Button>
                </motion.div>
              }
            />
          </InputGroup>
          <Spacer />

          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton
              icon={<VscTriangleRight size={"lg"} />}
              colorScheme="blue"
            />
          </motion.div>
        </HStack>
      </FormControl>
    </Box>
  );
}
