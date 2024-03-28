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
  Spacer,
  textDecoration,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  const [tasks, setTasks] = useState([
    {name: "Create guest experience mobile check-in", completed: false},
    {name: "Document current CI/CD process", completed: false},
    {name: "Perform code review for final pillow-talk release", completed: false},
    {name: "Implement new color palette from design team", completed: false},
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  };

  function addTask(event) {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, {name: newTask, completed:false}]);
      setNewTask("");
    }
  };

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  };

  function handleTaskStatusChange(index, isChecked) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = isChecked;
    setTasks(updatedTasks);
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  const totalCompletedTasks = tasks.filter(task => task.completed).length;

  return (
    <>
      <Flex w="100%" h="100vh" alignItems={"center"}>
        <Flex
          w="100%"
          flexDir="column"
          border={"1px"}
          color="white"
          ml={[5, 10, 20, 60, 80]}
          mr={[5, 10, 20, 60, 80]}
          paddingX={[5, 10]}
        >
          {/* UPPER SECTION */}
          <Text fontSize={25} fontWeight={700} align={"center"} mb={[5, 10]} mt={[5, 10]}>
            Chores to-do-list
          </Text>

          <Grid gap={4} mb={5}>
            {tasks.map((task, index) => (
              <Flex
                key={index}
                flexDir={"row"}
                h="100%"
                alignItems={"center"}
                className="space-x-4"
              >
                <Checkbox
                  colorScheme="green"
                  borderColor={"green"}
                  size="lg"
                  onChange={() => handleTaskStatusChange(index, !task.completed)}
                ></Checkbox>

                <Text
                  fontSize={15}
                  className="text-wrap"
                  alignSelf="center"
                  ml={3}
                >
                  {task.name}
                </Text>

                <Spacer />

                <Button
                  className="delete-button"
                  variant="solid"
                  bg="none"
                  border="1px"
                  borderColor="#9B2C2C"
                  size="xs"
                  _hover={{ bg: '#9B2C2C' }}
                  onClick={() => deleteTask(index)}
                >
                  <DeleteIcon bg="none" color='#F56565'   />
                </Button>
              </Flex>
            ))}
          </Grid>

          <Divider mt="2%" mb="2%" />

          {/* BOTTOM SECTION */}
          <Text fontSize={20} fontWeight={700}>
            Completed Task: {totalCompletedTasks}
          </Text>

          <Divider mt="2%" mb="4%" />

          <Text fontSize={16} fontWeight={700}>
            Add a to-do task
          </Text>

          <form onSubmit={addTask}>
          <Flex mt={"1%"}>
            <Input
              value={newTask}
              onChange={handleInput}
              className="text-ellipsis"
              w={["100%", "50%"]}
              overflow={"hidden"}
              fontSize={15}
              placeholder="Write your task here"
              mr={5}
            />

            <Button
            type="submit"
              onClick={addTask}
              fontSize={12}
              bg={"#90CDF4"}
              fontWeight={700}
              w={[20]}
              mb={[5, 10]}
            >
              {" "}
              ADD
            </Button>
          </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
