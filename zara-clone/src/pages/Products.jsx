import { useEffect, useState } from 'react';
import axios from 'axios';
import { SimpleGrid, Button, Flex, Input } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import LoadingIndicator from "../components/LoadingIndcator";
import ErrorIndicator from "../components/ErrorIndicator";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [category, setCategory] = useState('women');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    async function fetchData() {
        setError(null);
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/products${category ? `?category=${category}` : ''}`);
            setProducts(response.data);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    useEffect(() => {
        setFilteredProducts(products.filter(product =>
            product.prod_name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery, products]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    return (
        <>
        <Flex justifyContent={"space-between"} w={"50%"} alignItems={"center"}>
            <Flex justifyContent={"space-evenly"} my={6} width={"50%"}>
                <Button variant={"outline"} h={"22px"} w={{ base: "80px", md: "20%" }} fontSize={"12px"} fontWeight={"300"} borderRadius={"none"} textAlign={"center"} onClick={() => handleCategoryClick('women')}>Women</Button>
                <Button variant={"outline"} h={"22px"} w={{ base: "80px", md: "20%" }} fontSize={"12px"} fontWeight={"300"} borderRadius={"none"} textAlign={"center"} onClick={() => handleCategoryClick('MEN')}>Men</Button>
                <Button variant={"outline"} h={"22px"} w={{ base: "80px", md: "20%" }} fontSize={"12px"} fontWeight={"300"} borderRadius={"none"} textAlign={"center"} onClick={() => handleCategoryClick('kids')}>Kids</Button>
                <Button variant={"outline"} h={"22px"} w={{ base: "80px", md: "20%" }} fontSize={"12px"} fontWeight={"300"} borderRadius={"none"} textAlign={"center"} onClick={() => handleCategoryClick('Beauty')}>Beauty</Button>
            </Flex>
            <Input
                outline={"black.200"}
                placeholder="SEARCH"
                size={"sm"}
                w={{ base: "90%", md: "30%" }}
                fontSize={"14px"}
                fontWeight={"500"}
                focusBorderColor="gray.200"
                value={searchQuery}
                onChange={handleSearchChange}
                />
           </Flex>
            <SimpleGrid columns={{ base: 2, md: 6, lg: 6 }}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        prod_name={product.prod_name}
                        imgUrl={product.imgUrl}
                        price={product.price}
                        size={product.size}
                        material={product.material}
                    />
                ))}
            </SimpleGrid>
        </>
    );
}
