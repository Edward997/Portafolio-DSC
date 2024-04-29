// pages/HomePage.tsx

import React from 'react';
import { Box, Heading, Text, Button, ChakraProvider } from '@chakra-ui/react'; // Importa componentes de Chakra UI según sea necesario
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';

const HomePage: React.FC = () => {
    return (
        <ChakraProvider>
            <Banner/>
            
            <Footer/>
        </ChakraProvider>

    );
};

export default HomePage;
