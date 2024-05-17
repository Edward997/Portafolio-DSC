import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import homePage from './pages/homePage';
import FeaturedProjects from './pages/featuredProjects';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/Portafolio-DSC/" Component={homePage} />
        <Route path="/Portafolio-DSC/featuredProjects" Component={FeaturedProjects} />
      </Routes>
    </ChakraProvider>
);
}

export default App;