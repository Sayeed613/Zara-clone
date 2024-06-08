import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider"; // Adjust the path as necessary
import { Flex, Image,  Box, Stack, Link } from "@chakra-ui/react";
import {  Link as ReactLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { authDetails, logout} = useContext(AuthContext);
  const navigate = useNavigate()

  const links = [
    { to: "/help", label: "HELP" },
    { to: "/shoppingbag", label: "SHOPPING BAG" },
  ];


  return (
    <Flex
      justifyContent={"space-between"}
      w={{ base: "100%", md: "90%" }}
      m={"auto"}
      my={6}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "stretch" }}
    >
      <Flex flexDirection={"column"} alignItems={{ base: "center", md: "flex-start" }}>
        <Image src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png" h={"80px"} w={"180px"} onClick={() =>{
          {logout}
          navigate("/login")
        }}  cursor={"pointer"} />

      </Flex>
      <Flex display={{ base: "flex", md: "flex" }}  w={{ base: "100%", md: "30%" }}>
        <Stack direction={"row"} spacing={8} justify={{ base: "center", md: "flex-end" }} width={"100%"}>
          {authDetails.isLoggedIn ? (
            <Box>Welcome, {authDetails.name}</Box>
          ) : (
            <Link as={ReactLink} to="/login">
              LOGIN
            </Link>
          )}
          {links.map((link) => (
            <Link as={ReactLink} key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}
