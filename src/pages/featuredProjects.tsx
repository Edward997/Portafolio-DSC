import React, { useState } from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { ChakraProvider, Box, Container, Heading, SimpleGrid, Link, IconButton, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Stack } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react";

//Impor images
import guionInstruccional from '../assets/images/guion_Instruccional.png';
import theArgentino from '../assets/images/theArgentino.png';
import pdfGenerator from '../assets/images/pdfReportGUI.png';
import acountingProject from '../assets/images/pdf_Generator.jpeg';
import movieDB from '../assets/images/moviesDatabase.png';
import gloveAI from '../assets/images/gloveAI.png';
import schoolManagement from '../assets/images/schoolManagmentSystem.png';
import musicPlayer from '../assets/images/musicPlayer.png';
import pathFinder from '../assets/images/pathFinderVisualizer.png';
import sortVisualizer from '../assets/images/sortVisualizer.png';

// Define tus proyectos y sus categorías
const projects = [
  {
    category: "Web Projects",
    items: [
      {
        id: 1,
        title: "Society Events",
        description: "This project is a platform that allows the creation of social events which encourage the participation of the community to solve problems that afflict society without a profit motive.",
        image: "https://raw.githack.com/TheIcySpark/Society-events/main/screenshots/1.png",
        youtubeLink: "",
        githubLink: "https://github.com/TheIcySpark/Society-events",
        githubPagesLink: ""
      },
      {
        id: 2,
        title: "Instructional Script",
        description: "Website development for didactic instructional script with html,css and pure javascript (vanilla) designed responsive.",
        image: guionInstruccional,
        youtubeLink: "",
        githubLink: "https://github.com/TheIcySpark/Guion-instruccional",
        githubPagesLink: "https://theicyspark.github.io/Guion-instruccional/instructionalScript/units/index.html",

      }
      ,
      {
        id: 3,
        title: "Market Scraping and Updating",
        description:
          <>
            The project involves an application to extract <b style={{ color: 'green' }}>data</b> from online stores, similar to Amazon. It uses <b style={{ color: 'green' }}>Puppeteer</b> for <b style={{ color: 'green' }}>scraping</b> product information. The <b style={{ color: 'green' }}>data</b> is stored in a <b style={{ color: 'green' }}>database</b> and accessed through a user interface developed with <b style={{ color: 'green' }}>Electron</b>, <b style={{ color: 'green' }}>Node</b>, and <b style={{ color: 'green' }}>React.js</b>. The application integrates with the <b style={{ color: 'green' }}>DeepL</b> API for automatic translation and connects to a <b style={{ color: 'green' }}>Shopify</b> store. It combines <b style={{ color: 'green' }}>scraping</b> techniques, user interface development, and connection to an e-commerce platform to manage product <b style={{ color: 'green' }}>data</b> in <b style={{ color: 'green' }}>Shopify</b>.
          </>,
        image: theArgentino,
        youtubeLink: "",
        githubLink: "",
        githubPagesLink: "",

      }
    ]
  },
  {
    category: "Desktop Projects",
    items: [
      {
        id: 4,
        title: "PDF Report Generator",
        description:
          <>
            Desktop application, made with{' '}
            <Text color="green.200" as={'b'}>
              Java
            </Text>
            . An application was needed to generate a report in PDF format running on Windows. This was to avoid using a Word document where formatting mistakes could occur. The application includes fields to complete and a button to generate the corresponding PDF file.
          </>
        ,
        image: pdfGenerator,
        youtubeLink: "",
        githubLink: "https://github.com/TheIcySpark/Java-pdf-report-generator",
        githubPagesLink: ""
      },
      {
        id: 5,
        title: "Accounting Project",
        description: "Accounting software implementation of a pdf report generator for the treatment of information from excel files for income and expense balance."
        ,
        image: acountingProject,
        youtubeLink: "",
        githubLink: "",
        githubPagesLink: ""
      }
    ]
  },
  {
    category: "School Projects",
    items: [
      {
        id: 6,
        title: "Movies database",
        description:
          <>
            <Text>
              Web application created with{" "}
              <Text color="green.200" as={'b'}>ASP.Net Core</Text>, uses OAuth2
              authentication for access to users by saving them in a{" "}
              <Text color="green.200" as={'b'}>SQL </Text> database which is
              manipulated within the framework with{" "}
              <Text color="green.200" as={'b'}>C#</Text>, as well as having a record
              of the different data of the film. The database connects to the IMDB{" "}
              <Text color="green.200" as={'b'}>API </Text> to update its data.
            </Text>
          </>
        ,
        image: movieDB,
        youtubeLink: "https://www.youtube.com/watch?v=xSsXQeolOvI&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/PAM",
        githubPagesLink: ""
      },
      {
        id: 7,
        title: "Artificial Intelligence Glove",
        description:
          <>
            <Text>
              The project consists of a glove which has different{" "}
              <Text color="green.200" as={'b'}>sensors </Text>
              connected to detect how much each finger is flexed. From this, the user
              can create an alphabet with defined letters, and is{" "}
              <Text color="green.200" as={'b'}>loaded </Text>
              into the program that letter is being represented in the glove. These{" "}
              <Text color="green.200" as={'b'}>data </Text>
              are used to <Text color="green.200" as={'b'}>train </Text>
              a <Text color="green.200" as={'b'}>neural network</Text>, which is used
              to identify which letter is being represented in the glove.
            </Text>
          </>
        ,
        image: gloveAI,
        youtubeLink: "https://www.youtube.com/watch?v=VqprLYphfFU&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Flex-Sensors-Glove",
        githubPagesLink: ""
      },
      {
        id: 8,
        title: "School Managment System",
        description:
          <>
            <Text>
              The School Management System is capable of tracking members within a
              school, as well as books and sets of books within an academic space.
              The application supports different types of users, such as students,
              library administrators, and management system administrators, each
              having different levels of access to the application secured through{" "}
              <Text color="green.200" as={'b'}>authorization</Text> and{" "}
              <Text color="green.200" as={'b'}>authentication</Text>. The
              application interface is created with{" "}
              <Text color="green.200" as={'b'}>React</Text>, while the backend was
              developed with <Text color="green.200" as={'b'}>Java Spring</Text>.
              Data is stored using <Text color="green.200" as={'b'}>SQL</Text>, and{" "}
              <Text color="green.200" as={'b'}>Postman</Text> was used to test the
              communication.
            </Text>
          </>
        ,
        image: schoolManagement,
        youtubeLink: "https://www.youtube.com/watch?v=QvOo7E49PRM&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Control-Scholar",
        githubPagesLink: ""
      },
      {
        id: 9,
        title: "Music Player",
        description:
          <>
            <Text>
              The project is developed with <Text color="green.200" as={'b'}>Django (Python)</Text> and <Text color="green.200" as={'b'}>React (JavaScript)</Text>. Music is automatically downloaded by connecting to the Spotify <Text color="green.200" as={'b'}>API</Text> to fetch song data such as images, name, album, etc. The actual songs are downloaded using a library to download audios from YouTube, leveraging the information collected from Spotify. All this data is stored in a local <Text color="green.200" as={'b'}>MySQL</Text> database, facilitated by custom commands programmed in <Text color="green.200" as={'b'}>Python</Text>. Each user can create their own account with custom playlists.
            </Text>
          </>
        ,
        image: musicPlayer,
        youtubeLink: "https://www.youtube.com/watch?v=SvrwKZk7tT4&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/django-music-app",
        githubPagesLink: ""
      }
    ]
  },
  {
    category: "Personal Projects",
    items: [
      {
        id: 10,
        title: "Path Finder Visualizer",
        description:
          <>
            <Text>
              This application is created using <Text color="green.200" as={'b'}>React JS</Text>. Its purpose is to demonstrate various <Text color="green.200" as={'b'}>algorithms</Text> used in searches from point A to point B. Users can select from a set of different search algorithms and specify the points A and B.
            </Text>
          </>
        ,
        image: pathFinder,
        youtubeLink: "https://www.youtube.com/watch?v=3pnwV86JDyk&t=9s&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Visualizador-buscador-de-caminos",
        githubPagesLink: "https://visualizador-buscador.web.app/"
      },
      {
        id: 11,
        title: "Sort visualizer",
        description:
          <>
            <Text >
              Application created using <Text color="green.200" as={'b'}>React JS</Text>, it is composed of a set of different popular <Text color="green.200" as={'b'}>algorithms</Text> used to sort data. It features a graphical interface that visualizes the sorting process.
            </Text>
          </>
        ,
        image: sortVisualizer,
        youtubeLink: "https://www.youtube.com/watch?v=ALpLMqqhjmQ&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Visualizador-Ordenamientos",
        githubPagesLink: "https://visualizador-ordenamientos.web.app/"
      }
    ]
  },
  {
    category: "UX/UI Design",
    items: [
      {
        id: 12,
        title: "Digital Document Center",
        description: "",
        image: "",
        youtubeLink: "",
        githubLink: "",
        githubPagesLink: ""
      },
    ]
  }
];

const FeaturedProjects = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ChakraProvider>
      <Box bg="#F1FAEE"  minH="100vh">
        <Container maxW="container.xl" py={12}>
          <Box textAlign="center" mb={12}>
            <Heading as="h2" mb={4} fontSize="3xl" fontWeight="bold">
              Featured Projects
            </Heading>
            <Text className="mx-auto max-w-[700px]" color="gray.500" fontSize={['xl', 'lg', 'xl']} textStyle={['relaxed', 'base', 'relaxed']} colorScheme="gray">
              Check out some of my recent work.
            </Text>

          </Box>
          {/* Pestañas para diferentes categorías */}
          <Tabs isFitted variant="enclosed-colored" colorScheme="teal" defaultIndex={0} onChange={index => setTabIndex(index)}>
            <TabList mb="1em">
              {projects.map((category, index) => (
                <Tab key={index}>{category.category}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {projects.map((category, index) => (
                <TabPanel key={index}>
                  <SimpleGrid columns={1} gap={6}>
                    {category.items.map((project) => (
                      <Box
                        key={project.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        bg="white"
                        overflow="hidden"
                        display={{ base: "block", lg: "flex" }}
                      >
                        <Stack
                          flex="1"
                          p={6}
                          spacing={4}
                          justifyContent="center"
                          alignItems={{ base: "center", lg: "flex-start" }}
                        >
                          <Heading as="h3" size="md" mb={2}>
                            {project.title}
                          </Heading>
                          <Text color="gray.500" colorScheme="gray">
                            {project.description}
                          </Text>
                          <Stack direction="row" spacing={2}>
                            {project.youtubeLink && (
                              <Link href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red' />
                              </Link>
                            )}
                            {project.githubLink && (
                              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray' />
                              </Link>
                            )}
                            {project.githubPagesLink && (
                              <Link href={project.githubPagesLink} target="_blank" rel="noopener noreferrer">
                                <Button colorScheme="teal" size="sm" mr={2}>GitHub Pages</Button>
                              </Link>
                            )}
                          </Stack>
                        </Stack>
                        <Box flex="1">
                          <img
                            alt={project.title}
                            src={project.image}
                            className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                            width="100%"
                            height="auto"
                          />
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default FeaturedProjects;