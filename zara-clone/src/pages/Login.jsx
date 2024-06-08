import { Flex, Input, VStack, Button, Box, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, authDetails: { isLoggedIn } } = useContext(AuthContext);
    const toast = useToast();

    async function handleClick() {
        try {
            let response = await axios.post("http://localhost:3000/userData", {
                email,
                password,
            });

            login(response.data.token, response.data.name);

            toast({
                title: "Login successful.",
                description: "You have successfully logged in.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

        } catch (error) {
            toast({
                title: "Login failed.",
                description: "Invalid email or password.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    }

    if (isLoggedIn) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <>
            <Heading size="md" ml={8} fontWeight={"300"}>
                LOGIN TO YOUR ACCOUNT
            </Heading>
            <Flex w={"60%"} ml={8} justifyContent={"space-between"} my={8} flexDirection={{ base: "column", md: "row" }}>
                <VStack spacing={8} w={{ base: "100%", md: "50%" }} justifyContent={"space-between"}>
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
                    <Button variant={"outline"} w={"100%"} border={"2px"} borderRadius={"none"} onClick={handleClick}>
                        LOGIN
                    </Button>
                    <Box alignSelf="start">
                        <Link>Have you Forgotten password?</Link>
                    </Box>
                </VStack>
                <Flex flexDirection={"column"} w={{ base: "100%", md: "40%" }} gap={8} mt={{ base: 8, md: 0 }}>
                    <Link >NEED AN ACCOUNT?</Link>
                    <Link to={"./signin"}>
                        <Button variant={"outline"} w={"100%"} border={"2px"} borderRadius={"none"}>
                            Register
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}
