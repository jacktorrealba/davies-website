'use client'
import PageTransition from "@/components/page-transition"
import { ChakraProvider , Heading, Link, Center, Text, Box, List, ListItem} from "@chakra-ui/react";


const Publications = () => {
    return (
        <>
            <ChakraProvider>
                <PageTransition>
                    <Box h="100vh" id="publicationsPageBox" overflowY="scroll">
                        <Heading p="2rem 0 1rem 1rem">
                            PUBLICATIONS
                        </Heading>
                        <Box p="0rem 3rem 0rem 3rem">
                            <List spacing={6}>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/if-you-feel-it-chase-it-using-seismic-signals-to-detect-tornadoes/" target="_blank" rel="noopener noreferrer">
                                        If you feel it, chase it: using seismic signals to detect tornadoes
                                    </Link>
                                    <Text className="publicationDate">
                                        31 July 2024
                                    </Text>
                                    <Text>
                                        The threat of destruction and injury the tornado chasers show viewers in the 2024 movie “Twisters” is real, 
                                        so what can be done currently to warn against tornadoes, and how do we detect and track them using geophysics?
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/natural-hazards-put-some-species-at-increased-risk-of-extinction/" target="_blank" rel="noopener noreferrer">
                                        Natural hazards put some species at increased risk of extinction
                                    </Link>
                                    <Text className="publicationDate">
                                        30 July 2024
                                    </Text>
                                    <Text>
                                    A new study looks at natural hazards occurring where at-risk species live in order to help guide conservation efforts for ensuring their survival.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/what-is/uas/" target="_blank" rel="noopener noreferrer">
                                        What are Uncrewed Aerial Systems?
                                    </Link>
                                    <Text className="publicationDate">
                                        24 July 2024
                                    </Text>
                                    <Text>
                                        Overview of Unscrewed Aerial Systems (UAS) for EarthScope&apos;s “What is ___?” series.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/intern-spotlight-summer-czarnowski-resess/" target="_blank" rel="noopener noreferrer">
                                        Intern Spotlight: Summer Czarnowski (RESESS)
                                    </Link>
                                    <Text className="publicationDate">
                                        23 July 2024
                                    </Text>
                                    <Text>
                                        Interview with Summer Czarnowski, one of EarthScope&apos;s Summer 2024 RESESS Interns working at Sandia National Labs in Albuquerque, New Mexico.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/remote-sensing-and-armed-conflict-a-unique-humanitarian-role-for-geophysics/" target="_blank" rel="noopener noreferrer">
                                        Remote sensing and armed conflict—a unique humanitarian role for geophysics
                                    </Link>
                                    <Text className="publicationDate">
                                        22 July 2024
                                    </Text>
                                    <Text>
                                        Remote sensing can be essential for rapidly collecting information about destruction levels, famine, 
                                        and other humanitarian questions in areas where ground investigations are difficult, as can be the case in times of conflict.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/intern-spotlight-juan-cruz-resess-intern/" target="_blank" rel="noopener noreferrer">
                                        Intern Spotlight: Juan Cruz (RESESS)
                                    </Link>
                                    <Text className="publicationDate">
                                        16 July 2024
                                    </Text>
                                    <Text>
                                        Interview with Juan Cruz, one of EarthScope&apos;s Summer 2024 RESESS Interns working in Boulder, Colorado.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.usgs.gov/observatories/yvo/news/yellowstone-gps-stations-help-monitor-solar-storms-cause-widespread-auroras" target="_blank" rel="noopener noreferrer">
                                        Yellowstone GPS stations help to monitor solar storms that cause widespread auroras
                                    </Link>
                                    <Text className="publicationDate">
                                        15 July 2024
                                    </Text>
                                    <Text>
                                        For a couple nights in May an extreme solar storm created a beautiful night sky for many people in areas that normally are too far away to see auroras. 
                                        Some of the GPS stations in Yellowstone are among the tools used to monitor space weather like that solar storm.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/intern-spotlight-hayley-bricker-davie-loria-student-careers/" target="_blank" rel="noopener noreferrer">
                                        Intern Spotlight: Hayley Bricker & Davie Loria (Student Careers)
                                    </Link>
                                    <Text className="publicationDate">
                                        11 July 2024
                                    </Text>
                                    <Text>
                                        Interview with Hayley Bricker and Davie Loria, EarthScope&apos;s Summer 2024 Science Communication Career Interns.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/what-is/tls/" target="_blank" rel="noopener noreferrer">
                                        What is Terrestrial Laser Scanning?
                                    </Link>
                                    <Text className="publicationDate">
                                        11 July 2024
                                    </Text>
                                    <Text>
                                        Overview of Terrestrial Laser Scanning (TLS) for EarthScope&apos;s “What is ___?” series.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/information-revealed-by-2018-kilauea-eruptions-leads-to-new-caldera-models/" target="_blank" rel="noopener noreferrer">
                                        NSF SAGE/GAGE Community Science Workshop highlights the breadth of the geophysical toolkit
                                    </Link>
                                    <Text className="publicationDate">
                                        10 July 2024
                                    </Text>
                                    <Text>
                                        The techniques in our geophysical toolkit have grown exponentially over the years. 
                                        By understanding research in these fields using these tools, 
                                        we can see the applications to geophysics and bettering society.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/intern-spotlight-marc-garcia-student-career/" target="_blank" rel="noopener noreferrer">
                                        Information revealed by 2018 Kīlauea eruptions leads to new caldera models
                                    </Link>
                                    <Text className="publicationDate">
                                        3 July 2024
                                    </Text>
                                    <Text>
                                        Article about a new paper that lays out a helpful timeline of the Kīlauea eruptions in 2018, 
                                        as well as addresses the applications for the future from the collected data.
                                    </Text>
                                </ListItem>
                                <ListItem className="publicationLink">
                                    <Link className="pinkLink" href="https://www.earthscope.org/news/intern-spotlight-marc-garcia-student-career/" target="_blank" rel="noopener noreferrer">
                                        Intern Spotlight: Marc Garcia - Student Career
                                    </Link>
                                    <Text className="publicationDate">
                                        1 July 2024
                                    </Text>
                                    <Text>
                                        Interview with Marc Garcia, EarthScope&apos;s Summer 2024 Cloud On-Ramp Career Intern.
                                    </Text>
                                </ListItem>
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
                                    <Link className="pinkLink" href="https://www.earthscope.org/what-is/das/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://planetforward.org/story/playing-god-new-research-suggests-a-way-to-stimulate-rainfall/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://bpb-us-e1.wpmucdn.com/blogs.gwu.edu/dist/7/135/files/2022/06/Research-Showcase-2022AbstractBookletFINAL.pdf" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/climate/extreme-temperatures/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/wildfires/smoke-childrens-health/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/climate/heat-agriculture/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/social-sciences/eviction-moratorium/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/social-sciences/unemployment-unfilled-jobs/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/social-sciences/commercial-real-estate/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://www.sciline.org/tech/ransomware/" target="_blank" rel="noopener noreferrer">
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
                                    <Link className="pinkLink" href="https://pen.org/the-pen-ten-with-lindsey-fitzharris/" target="_blank" rel="noopener noreferrer">
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