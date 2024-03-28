import { Box, Flex, Link, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex>
        <Box p="2">
          <Link href="#">Inicio</Link>
        </Box>
        <Spacer />
        <Box p="2">
          <Link href="#">Acerca de</Link>
        </Box>
        <Box p="2">
          <Link href="#">Servicios</Link>
        </Box>
        <Box p="2">
          <Link href="#">Contacto</Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
