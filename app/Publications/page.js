'use client'
import PageTransition from "@/components/page-transition"
import { ChakraProvider , Heading, Link, Center, Text, Box, List, ListItem} from "@chakra-ui/react";


const Publications = () => {
    return (
        <>
            <ChakraProvider>
                <PageTransition>
                    <Box h="100vh" id="publicationsPageBox" overflowY="scroll">
                        <Heading p="1rem 0 1rem 1rem">
                            PUBLICATIONS
                        </Heading>
                        <Box p="0rem 1rem 0rem 1rem">
                            <List spacing={6}>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/intern-spotlight-quincey-nielson-student-career/" target="_blank" rel="noopener noreferrer">
                                        Intern Spotlight: Quincey Nielson - Student Career
                                    </Link>
                                    <Text className="publicationDate">
                                        21 June 2024
                                    </Text>
                                    <Text>
                                        Interview with Quincey Nielson, EarthScope&apos;s Summer 2024 Alaska Field Engineer Career Intern.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        What is Distributed Acoustic Sensing?
                                    </Link>
                                    <Text className="publicationDate">
                                        6 June 2024
                                    </Text>
                                    <Text>
                                        Overview of Distributed Acoustic Sensing &#40;DAS&#41;.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Playing God? New Research Suggests a way to Stimulate Rainfall
                                    </Link>
                                    <Text className="publicationDate">
                                        27 April 2022
                                    </Text>
                                    <Text>
                                        Article on a recent research publication that proposes using drones to expedite the rainfall process in areas with severe drought.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        No Matter How the Dice Fall - Looking into Casino Dice
                                    </Link>
                                    <Text className="publicationDate">
                                        12 April 2022
                                    </Text>
                                    <Text>
                                        Undergraduate research abstract about the geometry of casino dice and highlighint the lack of research in that area &#40;page 310&#41;.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. John J. Wiens: Hot Days, Disappearing Species
                                    </Link>
                                    <Text className="publicationDate">
                                        26 August 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with professor of ecology and evolutionary
                                        biology John J. Wiens about the threat of extreme temperatures for species of plants 
                                        and animal endangerment and extinction.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. Stephanie Holm: Wildfire Smoke and Children&apos;s Health
                                    </Link>
                                    <Text className="publicationDate">
                                        24 August 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with pediatrician Stephanie Holm about how smoke
                                        from wildfires is threatening to human health, particularly for children.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. Wolfram Schlenker: Rising Temperatures and Agriculture
                                    </Link>
                                    <Text className="publicationDate">
                                        19 August 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with professor of economics Wolfram Schlenker 
                                        about how extreme heat and drought are causing crop damage and losses for U.S. agriculture.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. Eva Rosen: Evictions
                                    </Link>
                                    <Text className="publicationDate">
                                        5 August 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with assistant professor 
                                        Eva Rosen about how the federal eviction moratorium, 
                                        implemented by the Centers for Disease Control &#40;CDC&#41;
                                        to slow the spread of COVID-19, was set to expire on July 31.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. Kathryn Anne Edwards: Unemployment and Unfilled Jobs
                                    </Link>
                                    <Text className="publicationDate">
                                        4 August 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with economist Kathryn Anne Edwards 
                                        about how millions of jobs -
                                        particularly in certain industries, such as hospitality and manufacturing - 
                                        are going unfilled across the country, even as millions of people are seeking work.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. Tracy Hadden Loh: What&apos;s Next for Downtowns?
                                    </Link>
                                    <Text className="publicationDate">
                                        27 July 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with fellow at the Brookings Institution Tracy Hadden Loh 
                                        about how many people who used to commute to offices have been working from home since the 
                                        early days of the pandemic will not return, even when COVID-19 recedes.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        Dr. Josephine Wolff: Ransomware
                                    </Link>
                                    <Text className="publicationDate">
                                        14 June 2021
                                    </Text>
                                    <Text>
                                        Interview transcript and edited video with associate professor of cybersecurity policy Josephine Wolff
                                        about how increasingly high-profile cyber-attacks are crippling government agencies, hospitals, 
                                        universities, and critical infrastructure, with the goal of extracting a ransom.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink">
                                        The PEN Ten with Lindsey Fitzharris
                                    </Link>
                                    <Text className="publicationDate">
                                        12 July 2018
                                    </Text>
                                    <Text>
                                        PEN Ten &#40;PEN America&apos;s weekly interview series&#41; with medical historian Dr. Lindsey Fitzharris, 
                                        author of The Butchering Art, which won the 2018 PEN/E.O. Wilson Literary Science Writing Award.
                                    </Text>
                                </ListItem>
                            </List>
                            
                        </Box>
                    </Box>
                </PageTransition>
            </ChakraProvider>
        </>
    )
}
export default Publications;