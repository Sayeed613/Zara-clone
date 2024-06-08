import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndcator";
import ErrorIndicator from "../components/ErrorIndicator";
import { Box, Flex, Image, Text, Button, useToast } from "@chakra-ui/react";
import { useShoppingBag } from "../context/ShoppingBagContext";

export default function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useShoppingBag();
  const [selectedSize, setSelectedSize] = useState(null);
  const toast = useToast();

  async function getProductDetail(productId) {
    setLoading(true);
    try {
      let response = await axios.get(`http://localhost:3000/products/${productId}`);
      let data = response.data;
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  if (loading || !product) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  function handleAddToBag() {
    if (!selectedSize) {
      toast({
        title: "Select Size",
        description: "Please select a size before adding to bag.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    dispatch({
      type: "ADD_TO_BAG",
      payload: {
        id: product.id,
        prod_name: product.prod_name,
        imgUrl: product.imgUrl,
        price: product.price,
        size: selectedSize,
      },
    });

    toast({
      title: "Product Added",
      description: "The product has been added to your shopping bag.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  const { prod_name, imgUrl, price, size, size1, size2, category, material } = product;

  return (
    <Flex justifyContent="space-evenly">
      <Box w="227px" border="1px" height="249px" mt="300px" textAlign="left">
        <Text p={2} mt={6} fontSize="12px" color="gray.500">
          COMPOSITION, CARE & ORIGIN
        </Text>
        <Text p={2} fontSize="12px" color="gray.500">
          COMPOSITION
        </Text>
        <Text p={2} fontSize="10px" color="gray.500" w="80%">
          We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a
        </Text>
        <Text pt={8} p={2} fontSize="8px" color="gray.500" w="80%">
          View
        </Text>
      </Box>
      <Box>
        <Image src={imgUrl} alt={prod_name} height="560px" border="1px" mr="90px" />
      </Box>
      <Box border="1px " height="auto" w="272px">
        <Text p={2} fontSize="10px" color="gray.400">
          FEW ITEMS LEFT
        </Text>
        <Flex>
          <Text p={2} fontSize="12px" color="gray.700">
            {prod_name}
          </Text>
          <Text p={2} fontSize="10px" color="gray.400">
            Category: {category}
          </Text>
        </Flex>
        <Text p={2} fontSize="12px" color="gray.700">
          ₹ {price}
        </Text>
        <Text p={2} fontSize="7px" color="gray.400">
          MRP incl. of all taxes
        </Text>
        <Text p={2} fontSize="10px" color="gray.700" w="80%">
          {material}
        </Text>
        <Text p={2} fontSize="9px" color="gray.500">
          CHECK IN-STORE AVAILABILITY
        </Text>
        <Text p={2} fontSize="9px" color="gray.500">
          SHIPPING, EXCHANGE AND RETURN
        </Text>
        <hr />
        <Text p={2} fontSize="10px" color="gray.400">
          BLUE | 9393223
        </Text>
        <Flex w="100%" p={2} gap={2} flexWrap="wrap">
          <Button
            variant="outline"
            h="22px"
            w={{ base: "50%", md: "40%" }}
            fontSize="12px"
            fontWeight="300"
            borderRadius="none"
            textAlign="center"
            onClick={() => setSelectedSize(size)}
            bgColor={selectedSize === size ? "gray.200" : ""}
          >
            {size}
          </Button>
          <Button
            variant="outline"
            h="22px"
            w={{ base: "50%", md: "40%" }}
            fontSize="12px"
            fontWeight="300"
            borderRadius="none"
            textAlign="center"
            onClick={() => setSelectedSize(size1)}
            bgColor={selectedSize === size1 ? "gray.200" : ""}
          >
            {size1}
          </Button>
          <Button
            variant="outline"
            h="22px"
            w={{ base: "50%", md: "40%" }}
            fontSize="12px"
            fontWeight="300"
            borderRadius="none"
            textAlign="center"
            onClick={() => setSelectedSize(size2)}
            bgColor={selectedSize === size2 ? "gray.200" : ""}
          >
            {size2}
          </Button>
          <Button
            variant="outline"
            h="22px"
            w={{ base: "50%", md: "40%" }}
            fontSize="12px"
            fontWeight="300"
            borderRadius="none"
            textAlign="center"
            onClick={() => setSelectedSize("XL")}
            bgColor={selectedSize === "XL" ? "gray.200" : ""}
          >
            XL
          </Button>
          <Button
            variant="outline"
            h="22px"
            w={{ base: "50%", md: "40%" }}
            fontSize="12px"
            fontWeight="300"
            borderRadius="none"
            textAlign="center"
            onClick={() => setSelectedSize("XXL")}
            bgColor={selectedSize === "XXL" ? "gray.200" : ""}
          >
            XXL
          </Button>
          <Button
            variant="outline"
            h="22px"
            w={{ base: "50%", md: "40%" }}
            fontSize="12px"
            fontWeight="300"
            borderRadius="none"
            textAlign="center"
            onClick={() => setSelectedSize("3XL")}
            bgColor={selectedSize === "3XL" ? "gray.200" : ""}
          >
            3XL
          </Button>
        </Flex>

        <Text p={2} fontSize="9px" color="gray.500">
          MEASUREMENT GUIDE
        </Text>
        <Button
          variant="outline"
          h="22px"
          w={{ base: "80px", md: "100%" }}
          fontSize="12px"
          fontWeight="300"
          borderRadius="none"
          textAlign="center"
          onClick={handleAddToBag}
        >
          ADD
        </Button>
      </Box>
    </Flex>
  );
}
