import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Box
      backgroundImage="url('https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={['200px', '300px', '400px']} // Ajusta la altura para diferentes tamaños de pantalla
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      position="relative" // Agregamos posición relativa al contenedor para posicionar el texto
      padding={['20px', '40px', '60px']} // Ajusta el espacio interior para diferentes tamaños de pantalla
    >
      {/* Contenedor para el texto */}
      <Box zIndex="1" position="relative" maxWidth="600px"> {/* Limitamos el ancho del texto */}
        <Heading as="h1" size={['md', 'lg', 'xl']} mb={4}> {/* Ajustamos el tamaño del título para diferentes tamaños de pantalla */}
          ¡Bienvenido a mi sitio!
        </Heading>
        <Text fontSize={['sm', 'md', 'lg']} mb={4}> {/* Ajustamos el tamaño del texto para diferentes tamaños de pantalla */}
          Esta es la descripción del sitio.
        </Text>
        <Button colorScheme="blue" size={['sm', 'md', 'lg']}> {/* Ajustamos el tamaño del botón para diferentes tamaños de pantalla */}
          Comenzar
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;

