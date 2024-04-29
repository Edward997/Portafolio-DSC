// pages/HomePage.tsx

import React from 'react';
import { Box, Heading, Text, Button, ChakraProvider } from '@chakra-ui/react'; // Importa componentes de Chakra UI según sea necesario
import Navbar from '../components/navbar';
import Banner from '../components/banner';

const HomePage: React.FC = () => {
    return (
        <ChakraProvider>
            <Banner/>
            
            <Box textAlign="center" mt={8}>
                <Heading as="h1" size="xl" mb={4}>Bienvenido a mi sitio</Heading>
                <Text fontSize="lg" mb={4}>Esta es la página de inicio de mi aplicación.</Text>
                <Button colorScheme="blue" size="lg">Comenzar</Button>
            </Box>
        </ChakraProvider>

    );
};

export default HomePage;
