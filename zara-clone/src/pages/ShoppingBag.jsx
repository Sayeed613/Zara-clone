import { Flex, Text, Image, Box, SimpleGrid, Button, useToast } from "@chakra-ui/react";
import { useShoppingBag } from '../context/ShoppingBagContext';
import { useState, useEffect } from "react";
import { CloseIcon } from "@chakra-ui/icons";

export default function ShoppingBag() {
  const { state, dispatch } = useShoppingBag();
  const [showSavedItemsMessage, setShowSavedItemsMessage] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const toast = useToast();

  useEffect(() => {
    calculateTotalPrice();
  }, [state.items]);

  const calculateTotalPrice = () => {
    let totalPrice = state.items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  };

  const handleRemoveFromBag = (itemId, itemPrice) => {
    dispatch({ type: "REMOVE_FROM_BAG", payload: itemId });
    setTotalPrice((prevTotal) => prevTotal - itemPrice);
  };

  const handleWishListClick = () => {
    setShowSavedItemsMessage(!showSavedItemsMessage);
  };

  const handleAddedButton = () => {
    toast({
      title: "Order Successful",
      description: "Your products have been ordered successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box h={"53vh"}>
      <Flex w={{ base: "100%", md: "70%" }} textAlign="center" my="40px"  cursor="pointer">
        <Text border="1px" w="50%">
          ShoppingBag
        </Text>
        <Text border="1px" w="50%">
          FAVOURITES
        </Text>
      </Flex>
      {state.items.length === 0 && !showSavedItemsMessage ? (
        <Text textAlign="left" fontSize="12px" mt="20px" ml="20px">
          YOUR SHOPPING BASKET IS EMPTY
        </Text>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }} spacing={4} m="auto">
          {state.items.map((item) => (
            <Box
              key={item.id}
              h="auto"
              border="1px"
              w="full"
              maxW="254px"
              cursor="pointer"
              textDecoration="none"
              mx="auto"
            >
              <Image src={item.imgUrl} h={{ base: "250px", md: "376px" }} w="full" borderBottom="1px" objectFit="cover" />
              <Flex justifyContent="space-between" alignItems="center" p={1} w="100%">
                <Text fontSize="10px">
                  {item.prod_name}
                </Text>
                <CloseIcon
                  color="black.500"
                  w={2}
                  h={2}
                  onClick={() => handleRemoveFromBag(item.id, item.price)}
                />
              </Flex>
              <Flex justifyContent="space-between" p={1}>
                <Text fontSize="10px">Size {item.size}</Text>
                <Text fontSize="10px">₹{item.price}</Text>
              </Flex>
              {showSavedItemsMessage && (
                <Text
                  fontSize="10px"
                  p={2}
                  color="red"
                  onClick={() => handleRemoveFromBag(item.id, item.price)}
                >
                  Remove from Bag
                </Text>
              )}
            </Box>
          ))}
        </SimpleGrid>
      )}
      <Box
        position={{ base: "static", md: "absolute" }}
        bottom={{ base: "auto", md: "31%" }}
        left={0}
        width="100%"
        border="1px"
        height="auto"
      >
        <Flex w="100%" justifyContent="space-between" flexWrap="wrap"  h={"100px"}>
          <Text fontSize="10px" my={8} w={{ base: "100%", md: "70%" }} textAlign={{ base: "center", md: "left" }}>
            *By continuing, I declare that I have read and accept the Purchase Conditions and understand Zara's Privacy and Cookie Policy.
          </Text>
          <Flex flexDirection="column" my={6} textAlign={{ base: "center", md: "right" }} w={{ base: "100%", md: "auto" }}>
            <Text fontSize="12px" fontWeight="bold">Total ₹ {totalPrice.toFixed(2)}</Text>
            <Text fontSize="9px" color="gray.400" pt={2}>INCLUDING TAX</Text>
            <Text fontSize="9px" pt={2} color="gray.400">*EXCL SHIPPING COST</Text>
          </Flex>
          <Button
            onClick={handleAddedButton}
            border="none"
            h="100px"
            w={{ base: "100%", md: "10%" }}
            background={"black"}
            color={"white"}
            mt={{ base: 4, md: 0 }}
          >
            Continue
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
