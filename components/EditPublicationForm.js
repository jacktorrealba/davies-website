'use client'

import { useState } from "react"
import { getApiURL } from "./getApiURL";
import { useRouter } from "next/navigation";
import {Center, Card, CardHeader,Heading,CardBody,FormControl,FormLabel, Input, Textarea, Button, Link, CardFooter, Checkbox, Box, ChakraProvider} from "@chakra-ui/react"
import { formatDateDefault } from "@/utils/dateUtils";

export default function EditPublicationForm({id, title, description, datePublished, url, isShown}) {
    const formattedDate = formatDateDefault(datePublished);
    const router = useRouter()
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newDatePublished, setNewDatePublished] = useState(formattedDate);
    const [newURL, setNewURL] = useState(url);
    const [newIsShown, setIsShown] = useState(isShown);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch(getApiURL()+`/publications/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({newTitle, newDescription, newDatePublished, newURL, newIsShown})
            });

            if (!res.ok) {
                throw new Error("Failed to update publication")
            }

            router.push('/AllPublications')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <ChakraProvider>
            <Center id="publicationCenter" h="100vh">
                <Card id="newPublicationCard" w="80%" >
                    <CardHeader>
                        <Heading as='h2' size='lg' color="var(--pink)">
                            Edit Publication
                        </Heading>
                    </CardHeader>
                    <CardBody >
                        <form onSubmit={handleSubmit}>
                            
                            <FormControl mb="3">
                                <FormLabel>Title</FormLabel>
                                <Input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type='text' variant='filled'></Input>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Description</FormLabel>
                                <Textarea onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type='text' variant='filled'></Textarea>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Date Published</FormLabel>
                                <Input onChange={(e) => setNewDatePublished(e.target.value)} value={newDatePublished} type='date' variant='filled'></Input>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Link</FormLabel>
                                <Input onChange={(e) => setNewURL(e.target.value)} value={newURL} type='text' variant='filled'></Input>
                            </FormControl>
                            <FormControl mb="3">
                                <Checkbox onChange={(e) => setIsShown(e.target.checked)} isChecked={newIsShown} colorScheme="pink">Enable Publication</Checkbox>
                            </FormControl>
                            <Center>
                                <Button type='submit' className='pink-button'>Update</Button>
                            </Center>
                            
                        </form>
                    </CardBody>
                    <CardFooter>
                        <Center width='100%'>
                            <Link className="pinkLink-sm" href="/AllPublications">Cancel</Link>
                        </Center>
                    </CardFooter>
                </Card>
        </Center>
            </ChakraProvider>
            
        </>
    )
}