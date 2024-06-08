import { Flex, Image } from "@chakra-ui/react";

export default function LoadingIndicator() {
  return (
    <Flex height="50vh" alignItems="center" justifyContent="center">
      <Image src="https://static.zara.net/stdstatic/6.11.0/images/loader.gif" alt="Loading" />
    </Flex>
  );
}
