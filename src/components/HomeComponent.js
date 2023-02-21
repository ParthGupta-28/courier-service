import { FormLabel, HStack, Input, VStack } from "@chakra-ui/react";

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

  return (
    <div>
      <HStack>
        <VStack spacing={2}>
          <HStack>
            <FormLabel width={"60"}>Name of Sender:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="nameOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.nameOfSender}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> Phone Number of Sender:</FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="phoneOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.phoneOfSender}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> State:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="stateOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.stateOfSender}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> City:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="cityOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.cityOfSender}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> From:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="addressOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.addressOfSender}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> Pin code:</FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="pincodeOfSender"
              onChange={onChangeUserDetails}
              value={userDetails.pincodeOfSender}
            />
          </HStack>
        </VStack>

        <VStack spacing={2}>
          <HStack>
            <FormLabel width={"60"}> Name of Receiver:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="nameOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.nameOfReceiver}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> Phone Number of Receiver:</FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="phoneOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.phoneOfReceiver}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> State:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="stateOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.stateOfReceiver}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> City:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="cityOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.cityOfReceiver}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}>To:</FormLabel>
            <Input
              variant={"outline"}
              type="text"
              borderColor={"black"}
              name="addressOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.addressOfReceiver}
            />
          </HStack>

          <HStack>
            <FormLabel width={"60"}> Pin code:</FormLabel>
            <Input
              variant={"outline"}
              type="number"
              borderColor={"black"}
              name="pincodeOfReceiver"
              onChange={onChangeUserDetails}
              value={userDetails.pincodeOfReceiver}
            />
          </HStack>
        </VStack>
      </HStack>

      <HStack mt={"2"} alignItems={"stretch"}>
        <FormLabel width={"40"}>Anything else you would like to add:</FormLabel>
        <Input
          variant={"outline"}
          type="text"
          borderColor={"black"}
          name="additionalDetails"
          onChange={onChangeUserDetails}
          value={userDetails.additionalDetails}
        />
      </HStack>
    </div>
  );
}
