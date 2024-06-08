import { Box, Flex , Image, IconButton} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";


const images = [
  {
    id: 1,
    url: "https://static.zara.net/assets/public/c7bd/853d/5332492596b7/48a1b1ed9623/image-landscape-fill-ef7d39c2-1699-4ebe-8042-ece4c21d0ceb-default_0.jpg?ts=1716476175692&w=1921"
  },
  {
    id: 2,
    url: "https://static.zara.net/assets/public/5974/b046/5ac048b9b07a/26e8340a9e1f/image-landscape-fill-760fa54c-e8e5-4c4b-bd9c-b213e77d90b4-default_0.jpg?ts=1717396740790&w=1921"
  },
  {
    id: 3,
    url: "https://static.zara.net/assets/public/f498/5f73/213042f7a993/f59368e8282a/image-landscape-fill-433595a4-9f60-474c-b0ef-286ef49be0d6-default_0.jpg?ts=1717396921026&w=1921"
  },
  {
    id: 4,
    url: "https://static.zara.net/assets/public/8615/f96b/a05d4d689910/e4761bfc9af0/image-landscape-fill-f80d02ba-a755-4406-b1ca-752619a736ec-default_0.jpg?ts=1717397049489&w=1921"
  },
  {
    id: 5,
    url: "https://static.zara.net/assets/public/fad9/081a/093744ed96c2/3599d725425f/image-landscape-fill-95d41363-9452-4a80-bcf7-083423f90aa2-default_0.jpg?ts=1717397229753&w=1921"
  },
  {
    id: 6,
    url: "https://static.zara.net/assets/public/bec5/107a/432742228fb6/7d20dbb6f2c2/image-landscape-fill-87bbfcb6-a869-47d7-80b1-4389a0ddb283-default_0.jpg?ts=1717397340325&w=1921"
  },
  {
    id: 7,
    url: "https://static.zara.net/assets/public/822a/f463/1e124e99ae74/bca521b4904e/image-portrait-ipad-fill-29e77ed3-f720-4fa8-9ade-aaecc7cb52f6-default_0.jpg?ts=1717397356330&w=960"
  },
  {
    id: 8,
    url: "https://static.zara.net/assets/public/123e/b55d/4b654d1a8b60/334d655b0390/image-portrait-ipad-fill-3a9f2479-9eb0-48a0-a9c8-edceeaf3a125-default_0.jpg?ts=1717397728638&w=960"
  },
  {
    id: 9,
    url: "https://static.zara.net/assets/public/123e/b55d/4b654d1a8b60/334d655b0390/image-portrait-ipad-fill-3a9f2479-9eb0-48a0-a9c8-edceeaf3a125-default_0.jpg?ts=1717397728638&w=960"
  },
  {
    id: 10,
    url: "https://static.zara.net/assets/public/1524/70a8/fba94671abef/92500db3f4f0/image-portrait-ipad-default-fill-ed0d1fc4-c2de-4c22-b323-3709c4b651e2-default_0.jpg?ts=1716461996345&w=960"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box h="100vh" overflowY="hidden" position="relative">
      {images.map((image, index) => (
        <Flex
          key={image.id}
          h="100vh"
          bgImage={`url(${image.url})`}
          bgSize="cover"
          bgPosition="center"
          align="center"
          justify="center"
          position="absolute"
          top={0}
          left={0}
          opacity={index === currentImageIndex ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          zIndex={index === currentImageIndex ? 1 : 0}
        >
          <Link to={`/products`}>
            <Image src={image.url} alt={`Image ${index + 1}`} />
          </Link>
        </Flex>
      ))}
      <IconButton
        aria-label="Previous Image"
        icon={<MdArrowBack />}
        onClick={goToPrevImage}
        position="absolute"
        top="50%"
        left={4}
        transform="translateY(-50%)"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        color="white"
        zIndex={2}
      />
      <IconButton
        aria-label="Next Image"
        icon={<MdArrowForward />}
        onClick={goToNextImage}
        position="absolute"
        top="50%"
        right={4}
        transform="translateY(-50%)"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        color="white"
        zIndex={2}
      />
    </Box>
  );
}