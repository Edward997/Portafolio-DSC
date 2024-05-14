// App.tsx
import * as React from "react"
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import homePage from './pages/homePage';
import FeaturedProjectsTabs from "./pages/featuredProjects";
import FeaturedProjects from "./pages/featuredProjects";


export const App = () =>(

    <ChakraProvider>
      <Routes>
        <Route path="/" Component={homePage} />
        <Route path="/" element={<Navigate replace to="/" />} />
        <Route path="/featuredProjects" element={<FeaturedProjects/>} />
      </Routes>
    </ChakraProvider>

)

