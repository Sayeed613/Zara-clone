import {
  VStack,
  Input,
  Button,
  Heading,
  Flex,
  Checkbox,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const formWidth = useBreakpointValue({ base: "100%", md: "400px" });

  async function handleClick(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",

        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return;
    }

    if (!password || password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",

        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!name || !nameRegex.test(name)) {
      toast({
        title: "Error",
        description: "Name should contain only alphabets.",

        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return;
    }

    const telephoneRegex = /^[0-9]+$/;
    if (!telephone || !telephoneRegex.test(telephone)) {
      toast({
        title: "Error",
        description: "Phone number should contain only numbers.",

        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return;
    }

    if (!isPrivacyChecked) {
      toast({
        title: "Error",
        description: "You must accept the privacy statement to create an account.",
        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return;
    }

    try {
      let response = await axios({
        method: "POST",
        url: "http://localhost:3000/userData",
        data: {
          email,
          password,
          name,
          telephone,
        },
      });
      if (response.status === 201) {
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Registration failed. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "black",
          color: "white",
        },
      });
    }
  }

  return (
    <>
      <Heading size="md" ml={8} fontWeight={"300"} mb={4}>
        PERSONAL DETAILS
      </Heading>
      <form onSubmit={handleClick}>
        <Flex direction={flexDirection} alignItems="start">
          <VStack spacing={8} my={8} mx={4} ml={8} w={formWidth}>
            <Input
              placeholder="E-MAIL"
              border="none"
              borderBottom="2px"
              borderColor="gray.300"
              borderRadius="none"
              focusBorderColor="transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="PASSWORD"
              border="none"
              borderBottom="2px"
              borderColor="gray.300"
              borderRadius="none"
              focusBorderColor="transparent"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="NAME"
              border="none"
              borderBottom="2px"
              borderColor="gray.300"
              borderRadius="none"
              focusBorderColor="transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="TELEPHONE"
              border="none"
              borderBottom="2px"
              borderColor="gray.300"
              borderRadius="none"
              focusBorderColor="transparent"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <Flex flexDirection="column" gap={4} w="100%">
              <Heading size="xs" fontWeight={"400"} textAlign="center">
                We will send you an SMS to verify your phone number
              </Heading>
              <Checkbox
                size="sm"
                colorScheme="blue"
                aria-label="Receive Zara news on my e-mail"
              >
                I wish to receive Zara news on my e-mail
              </Checkbox>
              <Checkbox
                size="sm"
                colorScheme="blue"
                aria-label="Accept the privacy statement"
                isChecked={isPrivacyChecked}
                onChange={(e) => setIsPrivacyChecked(e.target.checked)}
              >
                I accept the privacy statement
              </Checkbox>
            </Flex>
            <Button
              variant={"outline"}
              w={"100%"}
              border={"2px"}
              borderRadius={"none"}
              type="submit"
            >
              CREATE ACCOUNT
            </Button>
          </VStack>
        </Flex>
      </form>
    </>
  );
}
