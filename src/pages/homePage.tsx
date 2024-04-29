// pages/HomePage.tsx

import React from 'react';
import { Box, Heading, Text, Button, ChakraProvider, Container, Link, SimpleGrid } from '@chakra-ui/react'; // Importa componentes de Chakra UI según sea necesario
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';
import FeaturedProjects from './featuredProjects';

const HomePage: React.FC = () => {
    // Array de proyectos para mostrar en la página de inicio
    const projects = [
        { 
            id: 1, 
            title: "Society Events", 
            description: "This project is a platform that allows the creation of social events which encourage the participation of the community to solve problems that afflict society without a profit motive.", 
            image: "https://raw.githack.com/TheIcySpark/Society-events/main/screenshots/1.png" 
        },
        { id: 2, title: "Project 2", description: "Description for Project 2" },
        { id: 3, title: "Project 3", description: "Description for Project 3" },
    ];

    return (
        <ChakraProvider>
            <Banner />
            <Box bg="#F1FAEE">
                <Container maxW="container.xl" py={12}>
                    <Box textAlign="center" mb={12}>
                        <Heading as="h2" mb={4} fontSize="3xl" fontWeight="bold">
                            Featured Projects
                        </Heading>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Check out some of my recent work.
                        </p>
                    </Box>
                    <SimpleGrid columns={[1, 2, 3]} gap={6}>
                        {/* Renderizar los tres proyectos */}
                        {projects.map((project) => (
                            <Box key={project.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                                <img
                                    alt={project.title}
                                    src={project.image}
                                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                                    height="310"
                                    width="550"
                                />
                                <Box p={6}>
                                    <Heading as="h3" size="md" mb={2}>
                                        {project.title}
                                    </Heading>
                                    <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                                </Box>
                                <Box px={6} py={4}>
                                    <Link href={`/projects/${project.id}`} >
                                        <Button
                                            as="a"
                                            colorScheme="gray"
                                            size="sm"
                                            rounded="md"
                                            _hover={{ bg: "gray.700", color: "white" }}
                                        >
                                            View Project
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                    {/* Botón para ver todos los proyectos */}
                    <Box mt={8} textAlign="center">
                        <Link href="/featured-projects">
                            <Button variant="outline" colorScheme="gray" size="lg">
                                View All
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </ChakraProvider>

    );
};

export default HomePage;
