import connectMongoDb from "@/lib/mongodb";
import Publication from "@/models/publications";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    ChakraProvider,
    Heading,
    Center,
    Button,
    Box,
    Link
} from '@chakra-ui/react'



// get all publications
async function getPublications() {
    try {
        await connectMongoDb();
        // get all publications sorted by date (latest to oldest)
        const publications = await Publication
            .find({})
            .sort({ datePublished: -1 });

        // return the result
        const response = { publications };
        return response;
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}
export default async function AllPublications() {
    const data = await getPublications();

    return (
        <>
            <ChakraProvider>
                <Box display='flex' justifyContent='space-between' alignItems='center' p="2rem">
                    <Box>
                        <Heading as='h2' size='lg' color="var(--pink)">All Publications</Heading>
                    </Box>
                    <Box>
                        <Link href="/Manage" className="pinkLink-sm">Go Back</Link>
                    </Box>
                </Box>
                <Center p="2rem" width="100%" height="inherit">
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th fontWeight="bold">
                                        Title
                                    </Th>
                                    <Th fontWeight="bold">
                                        Description
                                    </Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>                        
                            <Tbody>
                                {data.publications.map((p) => (
                                    <Tr key={p._id}>
                                        <Td>{p.title}</Td>
                                        <Td width="50%">{p.description}</Td>
                                        <Td>
                                            <Link href={`/EditPublication/${p._id}`} textColor="var(--pink);">
                                                Edit
                                            </Link>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                </Center>
            </ChakraProvider>
        </>
    )
}