import { Box, Container, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      h={{ base: 'auto', md: '40vh' }}
      m="auto"
      width={{ base: '90%', md: '80%' }}
      my={{ base: '120px', md: '240px' }}
      p={4}
    >
      <Text textAlign="center" color="gray.400" mb={4}>
        Join our Newsletter
      </Text>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        w={{ base: '100%', sm: '80%', md: '60%', lg: '30%' }}
        m="auto"
        flexWrap="wrap"
        gap={2}
        mb={8}
      >
        <Text fontSize="12px" color="gray.500">INSTAGRAM</Text>
        <Text fontSize="12px" color="gray.500">FACEBOOK</Text>
        <Text fontSize="12px" color="gray.500">X</Text>
        <Text fontSize="12px" color="gray.500">PINTEREST</Text>
        <Text fontSize="12px" color="gray.500">YOUTUBE</Text>
        <Text fontSize="12px" color="gray.500">SPOTIFY</Text>
      </Flex>
      <Box my={{ base: '150px', md: '300px' }}>
        <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
          Name and address of the manufacturer:
        </Text>
        <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
          Industria de Diseño Textil, S.A. (INDITEX, S.A.)
        </Text>
        <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
          Avenida de la Diputación, Edificio Inditex, 15143, Arteixo (A Coruña),
          Spain
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
