import { Box, Image, Text ,Flex} from "@chakra-ui/react";

export default function Help() {
  return (
    <Box>
        <Image src="https://static.zara.net/assets/public/ff7b/94a6/80e64b208bd7/2750f514b1b0/image-landscape-web-2897f714-842d-468d-9d27-67a0b0e7e4a8-default_0.jpg?ts=1716796467419&w=2908" />

        <Box width={"60%"} m={"auto"} my={"40px"}>
        <Text fontSize={"15px"} fontWeight={"bold"} >FREQUENTLY ASKED QUESTIONS</Text>
        <Flex justifyContent={"space-evenly"} my={"40px"} mr={"200px"}>
        <Text fontSize={"10px"}  border={"1px"} p={1}>ITEMS AVAILABILITY</Text>
        <Text fontSize={"10px"} border={"1px"} p={1} >RETRIEVE MY STORE RECEIPT</Text>
        <Text fontSize={"10px"}  border={"1px"} p={1}>ORDER STATUS</Text>
        <Text fontSize={"10px"}  border={"1px"} p={1}>HOW TO RETURN</Text>
        <Text fontSize={"10px"}  border={"1px"} p={1}>REFUNDS</Text>
        </Flex>
        </Box>
    </Box>
  )
}
