import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Flex,
  Text,
  Input,
  Button,
  Divider,
  Checkbox,
  Grid,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Flex w="100%" h="100vh" alignItems={"center"}>
        <Flex w="100%" flexDir="column" color="white" ml={[5, 10, 20, 60, 80]}  mr={[5, 10, 20, 60, 80]} paddingX={[5, 10]}>
          {/* UPPER SECTION */}
          <Text fontSize={25} fontWeight={700} align={"center"} mb={[5, 10]}>
            Chores to-do-list
          </Text>

          <Grid gap={4} mb={5}>

            <Flex flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4">
                <Checkbox colorScheme="green" borderColor={"green"}></Checkbox>
                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  Create guest experience mobile check-in
                </Text>
                <Spacer />
                <IconButton
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={<DeleteIcon bg={"none"}/>}
                />

            </Flex>

            <Flex flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4">
                <Checkbox colorScheme="green" borderColor={"green"}></Checkbox>
                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  Document current CI/CD process
                </Text>
                <Spacer />
                <IconButton
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={<DeleteIcon bg={"none"}/>}
                />

            </Flex>

            <Flex flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4">
                <Checkbox colorScheme="green" borderColor={"green"}></Checkbox>
                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  Perform code review for final pillow-talk release
                </Text>
                <Spacer />
                <IconButton
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={<DeleteIcon bg={"none"}/>}
                />

            </Flex>

            <Flex flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4">
                <Checkbox colorScheme="green" borderColor={"green"}></Checkbox>
                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  Implement new color palette from design team
                </Text>
                <Spacer />
                <IconButton
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={<DeleteIcon bg={"none"}/>}
                />

            </Flex>

            <Flex flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4">
                <Checkbox colorScheme="green" borderColor={"green"}></Checkbox>
                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  Fix image uploading process for guest check-in
                </Text>
                <Spacer />
                <IconButton
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={<DeleteIcon bg={"none"}/>}
                />

            </Flex>

            <Flex flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4">
                <Checkbox colorScheme="green" borderColor={"green"}></Checkbox>
                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  Provide on-boarding documentation
                </Text>
                <Spacer />
                <IconButton
                  variant="solid"
                  colorScheme="red"
                  size="xs"
                  icon={<DeleteIcon bg={"none"}/>}
                />

            </Flex>


          </Grid>

          <Divider mt="2%" mb="2%" />

          {/* BOTTOM SECTION */}
          <Text fontSize={20} fontWeight={700}>
            Completed Task: 0
          </Text>

          <Divider mt="2%" mb="4%" />

          <Text fontSize={16} fontWeight={700}>
            Add a to-do task
          </Text>

          <Flex mt={"1%"}>
            <Input
              className="text-ellipsis"
              w={["100%", "50%"]}
              overflow={"hidden"}
              fontSize={15}
              placeholder="Write your task here"
              mr={5}
            />
            <Button fontSize={12} bg={"#90CDF4"} fontWeight={700}
            w={[20]}>
              ADD
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
