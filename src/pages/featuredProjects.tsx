import React from "react";
import { VStack, Heading, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
  showAllLink: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, showAllLink }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
      <div className="container px-4 md:px-6">
        <VStack spacing={6}>
          <Heading size="2xl">Featured Projects</Heading>
          <Text fontSize="xl" maxW="700px" color="gray.500">Check out some of my recent work.</Text>
        </VStack>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          mt={8}
        >
          {projects.map(project => (
            <GridItem key={project.id}>
              {/* Card component here */}
            </GridItem>
          ))}
        </Grid>
        <Link href={showAllLink} mt={8} fontSize="xl" fontWeight="bold" color="blue.500">View All</Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
