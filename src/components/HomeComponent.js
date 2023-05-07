import { FormLabel, HStack, Input, Stack, VStack } from "@chakra-ui/react";

export default function HomeComponent({ userDetails, setUserDetails }) {
  function onChangeUserDetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  const inputBreakpoint = { xl: "sm", "2xl": "md" };

  return (
    <div>
      <Stack direction={{ base: "column", xl: "row" }}>
        <VStack spacing={2} width={{ base: "100%", xl: "50%" }}>
          <HStack>
            <FormLabel width={"60"} htmlFor="nameOfSender">
              Name of Sender:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="nameOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.nameOfSender}
              id="nameOfSender"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="phoneOfSender">
              Phone Number of Sender:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="phoneOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.phoneOfSender}
              id="phoneOfSender"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="stateOfSender">
              State:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="stateOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.stateOfSender}
              id="stateOfSender"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="cityOfSender">
              City:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="cityOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.cityOfSender}
              id="cityOfSender"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="addressOfSender">
              From:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="addressOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.addressOfSender}
              id="addressOfSender"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="pincodeOfSender">
              Pin code:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="pincodeOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.pincodeOfSender}
              id="pincodeOfSender"
              size={inputBreakpoint}
            />
          </HStack>
        </VStack>

        <VStack spacing={2} width={{ base: "100%", xl: "50%" }}>
          <HStack>
            <FormLabel width={"60"} htmlFor="nameOfReceiver">
              Name of Receiver:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="nameOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.nameOfReceiver}
              id="nameOfReceiver"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="phoneOfReceiver">
              Phone Number of Receiver:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="phoneOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.phoneOfReceiver}
              id="phoneOfReceiver"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="stateOfReceiver">
              State:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="stateOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.stateOfReceiver}
              id="stateOfReceiver"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="cityOfReceiver">
              City:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="cityOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.cityOfReceiver}
              id="cityOfReceiver"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="addressOfReceiver">
              To:
            </FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="addressOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.addressOfReceiver}
              id="addressOfReceiver"
              size={inputBreakpoint}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"} htmlFor="pincodeOfReceiver">
              Pin code:
            </FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="pincodeOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.pincodeOfReceiver}
              id="pincodeOfReceiver"
              size={inputBreakpoint}
            />
          </HStack>
        </VStack>
      </Stack>
    </div>
  );
}
