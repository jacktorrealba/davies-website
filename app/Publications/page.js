
import { ChakraProvider , Heading, Center, Text, Box, List, ListItem, Link} from "@chakra-ui/react";
import {formatDate} from '@/utils/dateUtils';
import connectMongoDb from "@/lib/mongodb";
import Publication from "@/models/publications";


async function getPublications(perPage, page) {
    try {
        await connectMongoDb();
        const publications = await Publication
            .find({isShown: true}) // find all records where isShown is true
            .skip(perPage * (page - 1)) // indicates which records to skip based on page number
            .sort({datePublished: -1}) // sort by latest date
            .limit(perPage); // limit by variable set below on export

        const publicationsCount = await Publication.countDocuments({isShown: true}); // get the count of pages where isShown is true
        const response = {publications, publicationsCount};
        return response;
        
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}

export default async function Publications( {searchParams} ) {
    let page = parseInt(searchParams.page, 10);
    page = !page || page < 1 ? 1 : page;
    const perPage = 5; // two records per page
    const data = await getPublications(perPage, page);
    const prevPage = page - 1 > 0 ? page -1 : 1; // if the current page minus 1 is greater than 0 then set the prevPage to that number otherwise set to 1
    const nextPage = page + 1; // our next page will always be the current page plus 1
    const totalPages = Math.ceil(data.publicationsCount / perPage); // math.ceil to get the total number of pages based on what perPage is set to

    // define an array to hold our page numbers
    const pageNumbers = [];
    const offSetNumber = 3; // our offset is how many numbers from the current page are visible
    
    // this loop will return the list of page numbers visible to the user 
    // i = the current page minus the offSetNumber (if this is negative, it will indicate which page numbers to show before the current page)
    for (let i = page - offSetNumber; i <= page + offSetNumber; i ++) {
        if (i >= 1 && i <= totalPages) {
            pageNumbers.push(i)
        }
    }


    return (
        <>
            <ChakraProvider>
                <Box h="100vh" id="publicationsPageBox" overflowY="scroll">
                    <Heading p="2rem 0 3rem 1rem">
                        PUBLICATIONS
                    </Heading>
                    <Box p="0rem 3rem 0rem 3rem">
                        <List spacing={6}>
                            {data.publications.map((p) => (
                                
                                <ListItem key={p._id} className="publicationLink">
                                    <Link className="pinkLink" href={p.url}target="_blank" rel="noopener noreferrer">
                                        {p.title}
                                    </Link>
                                    <Text className="publicationDate">
                                        {formatDate(p.datePublished)}
                                    </Text>
                                    <Text>
                                        {p.description}
                                    </Text>
                                </ListItem>
                                
                            ))}
                        </List>
                    </Box>
                    
                    <Center mb="7rem" mt="14rem">
                        <Box className="pagination">
                            {page === 1 ? (
                                <Link className="paginationLinkDisabled">
                                    Prev
                                </Link>
                            ): (
                                <Link className="paginationLink" href={`?page=${prevPage}`}>
                                    Prev
                                </Link>
                            )}
                            {pageNumbers.map((pageNumber, index) => (
                                <Link 
                                    key={index}
                                    className={
                                        page === pageNumber
                                        ? "paginationLinkHighlight"
                                        :
                                        "paginationLink"
                                    }
                                    href={`?page=${pageNumber}`}
                                    >
                                    {pageNumber}
                                </Link>
                            ))}
                            {page === totalPages ? (
                                <Link className="paginationLinkDisabled">
                                    Next
                                </Link>
                            ): (
                                <Link className="paginationLink" href={`?page=${nextPage}`}>
                                    Next
                                </Link>
                            )}
                        </Box>
                    </Center>
                </Box>
            </ChakraProvider>
        </>
    )
}
