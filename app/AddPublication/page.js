'use client';
import { Input, Center, Card, CardBody, CardHeader, FormControl, FormLabel, Textarea, Heading, Button, CardFooter, Link, Box, Checkbox } from '@chakra-ui/react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getApiURL } from '@/components/getApiURL';



export default function AddPublication() {
    
    // form submission to mongo db declarations
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datePublished, setDatePublished] = useState("");
    const [url, setUrl] = useState("");
    const [isShown, setIsShown] = useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault(); // prevent page refresh when button is clicked
        if(!title || !description || !datePublished || !url || !isShown) {
            alert("All fields are required");
            return;
        }

        try {
            const apiUrl = getApiURL() + '/publications';
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {"Content-Type": "appplication/json"},
                body: JSON.stringify({title, description, datePublished, url, isShown})
            });
            if (res.ok) {
                router.push('/');
            } else {
                throw new Error("Failed to create publication")
            }
        } catch (error) {
            throw new Error("Server Error");
        }
    }    
    return <Center id="publicationCenter" h="100vh">
            <Center w="100%" p="2rem 2rem 10rem 2rem">
                <Card id="newPublicationCard" w="80%">
                    <CardHeader>
                        <Heading as='h2' size='lg' color="var(--pink)">
                            Add New Publication
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSubmit}>
                            <FormControl mb="3">
                                <FormLabel>Title</FormLabel>
                                <Input onChange={(e) => setTitle(e.target.value)} value={title} type='text' variant='filled'></Input>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Description</FormLabel>
                                <Textarea onChange={(e) => setDescription(e.target.value)} value={description} type='text' variant='filled'></Textarea>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Date Published</FormLabel>
                                <Input onChange={(e) => setDatePublished(e.target.value)} value={datePublished} type='date' variant='filled'></Input>
                            </FormControl>
                            <FormControl mb="3">
                                <FormLabel>Link</FormLabel>
                                <Input onChange={(e) => setUrl(e.target.value)} value={url} type='text' variant='filled'></Input>
                            </FormControl>
                            <FormControl mb="3">
                                <Checkbox onChange={(e) => setIsShown(e.target.checked)} value={isShown} colorScheme="pink">Enable Publication</Checkbox>
                            </FormControl>
                            <Center>
                                <Button type='submit' className='pink-button'>Submit</Button>
                            </Center>
                        </form>
                    </CardBody>
                    <CardFooter>
                        <Center width='100%'>
                            <Link href='/Manage' className='pinkLink-sm'>Go Back</Link>
                        </Center>
                    </CardFooter>
                </Card>
            </Center>
    </Center>
    
}