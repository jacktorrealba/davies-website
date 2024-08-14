import { Center, ChakraProvider, SimpleGrid, Box, Card, CardBody, Link, Heading} from "@chakra-ui/react"

export default function Manage() {
    return (
        <>
            <ChakraProvider>
                <Center id="manageDiv" h='100vh' p="2rem 2rem 10rem 2rem">
                    <Box>
                        <Box margin='1rem 2rem 1rem 2rem'>
                            <Link href="/AddPublication" className="tileLink">
                                <Card className="tileCard" size='lg' border='4px solid var(--pink)'>
                                    <CardBody textAlign='center'>
                                        <Heading as='h2' size='lg'>Add Publication</Heading>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Box>
                        <Box margin='1rem 2rem 1rem 2rem'>
                            <Link href="/AllPublications" className="tileLink">
                                <Card className="tileCard" size='lg' border='4px solid var(--pink)'>
                                    <CardBody textAlign='center'>
                                        <Heading as='h2' size='lg'>View All Publications</Heading>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Box>
                    </Box>
                </Center>
            </ChakraProvider>
        </>
    )
}