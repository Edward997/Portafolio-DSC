import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './components/banner';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Banner />
      <Navbar />
      {/* Aquí colocarás el resto de tu aplicación */}
    </ChakraProvider>
  );
}

export default App;
