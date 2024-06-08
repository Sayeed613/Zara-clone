import { Box, Image, Flex, Text } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

export default function ProductCard({ id, prod_name, imgUrl, price, size }) {
  const navigate = useNavigate();
  return (
    <Box
      h={"auto"}
      border={"1px"}
      w="full"
      maxW="254px"
      onClick={() => {
        navigate(`/product/details/${id}`)
      }}
      cursor="pointer"
      textDecoration="none"
    >
      <Image src={imgUrl} h="376px" w="full" borderBottom={"1px"} objectFit="cover" />
      <Text fontSize={"10px"} p={2}>
        {prod_name}
      </Text>
      <Flex justifyContent="space-between" p={1} w={"40%"}>
        <Text fontSize={"10px"}>Size {size}</Text>
        <Text fontSize={"10px"}>₹{price}</Text>
      </Flex>
    </Box>
  );
}
