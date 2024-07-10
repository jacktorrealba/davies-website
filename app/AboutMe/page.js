'use client'
import { ChakraProvider, Heading, Box, Text, Link} from "@chakra-ui/react"
import PageTransition from "@/components/page-transition"

const AboutMe = () => {
    return (
        <>
            <ChakraProvider>
                <PageTransition>
                    <Box h="100vh" id="aboutMePageBox" overflowY="scroll">
                        <Heading p="2rem 0 1rem 1rem">
                            ABOUT
                        </Heading>
                        <Box p="0rem 3rem 0rem 3rem">
                            <Box className="aboutMeBox">
                                <Text as="span" className="boldText">Davie Nicole Loria</Text> &#40;she/her/hers&#41; was born and raised in New York.
                            </Box>
                            <Box className="aboutMeBox">
                                She attended <Link className="pinkLink-sm" href="https://www.gwu.edu/" target="_blank" rel="noopener noreferrer">The George Washington University</Link> in Washington, D.C. and earned a 
                                <Text as="span" className="boldText"> Bachelor of Science in physics</Text> and minors in 
                                <Text as="span" className="boldText"> journalism & mass communications</Text> and 
                                <Text as="span" className="boldText"> mathematics</Text>.
                            </Box>
                            <Box className="aboutMeBox">
                                She is currently a doctoral student at <Link className="pinkLink-sm" href="https://www.stevens.edu/" target="_blank" rel="noopener noreferrer">Stevens Institute of Technology</Link> in Hoboken, NJ 
                                working towards a <Text as="span" className="boldText"> Ph.D. in physics</Text> with an estimated completion of May 2027. 
                                She received a <Text as="span" className="boldText"> certificate in photonics</Text> in May 2024, 
                                and will receive a <Text as="span" className="boldText"> master&apos;s in physics</Text> in December 2024.
                            </Box>
                            <Box className="aboutMeBox">
                                Her research focuses on satellite remote sensing of <Text as="span" className="boldText"> aerosol-cloud-radiation-climate</Text> interactions, modeling, and feedback 
                                using computational and statistical physics in a Python application/driver tool. 
                                She is conducting research under <Link className="pinkLink-sm" href="https://www.stevens.edu/profile/kstamnes" target="_blank" rel="noopener noreferrer"> Knut Stamnes</Link> in the 
                                <Link href="https://www.stevens.edu/light-and-life-laboratory" className="pinkLink-sm" target="_blank" rel="noopener noreferrer"> Light and Life Laboratory</Link> at Stevens.
                            </Box>
                            <Box className="aboutMeBox">
                                All research and career opportunities she has done have had an undertone of <Text as="span" className="boldText"> science communications </Text> 
                                and an ultimate goal of communicating her work—as well as work done by other research groups—to the 
                                general public. Few courses offered at GW were scicomm specific, so all work she did in journalism 
                                courses she took in undergrad &#40;when able and not inherently a scicomm course&#41; were science 
                                related by her and the professor&apos;s design. Interview assignments were done with researchers, 
                                news articles were written about recent publications or discoveries, et cetera. Her undergrad physics 
                                research was also done with the <Text as="span" className="boldText"> intention of working on science communications</Text> 
                                with her mentor <Link href="https://physics.columbian.gwu.edu/gary-white" target="_blank" rel="noopener noreferrer" className="pinkLink-sm"> Gary White</Link>, 
                                physics professor at GW and editor of The Physics Teacher.
                            </Box>
                            <Box className="aboutMeBox">
                                She hopes to use her developed skills to write her dissertation in a way that is understandable to the 
                                general public. She wants to <Text as="span" className="boldText"> emphasize the climate change applications</Text> of her research in a way that a 
                                non-science-as-a-career person can understand. She then hopes to get a 
                                <Text as="span" className="boldText"> career in the science communications niche</Text>, as her scicomm internships over the years at places like 
                                <Link href="https://www.sciline.org/" target="_blank" rel="noopener noreferrer" className="pinkLink-sm"> SciLine</Link> &#40;AAAS&#41; and 
                                <Link href="https://www.earthscope.org/" target="_blank" rel="noopener noreferrer" className="pinkLink-sm"> EarthScope Consortium</Link> have 
                                only increased her interest in the area.
                            </Box>
                        </Box>
                    </Box>
                </PageTransition>
            </ChakraProvider>
        </>
    )
}
export default AboutMe;