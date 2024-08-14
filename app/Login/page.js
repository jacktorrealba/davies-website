"use client"
import { useState } from "react";
import { Box, Button, Center, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { getApiURL } from "@/components/getApiURL";

export default function Login() {
    // setting password and error variables
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
     // function executed on form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = getApiURL() + "/auth"
        try {
            // fetch api - send password in the body
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({password})
            });

            // if the response is ok - navigate to the manage page
            if (res.ok) {
                window.location.href = '/Manage';
            } else {
                setError('Invalid passcode')
            }
        } catch (error) {
            setError('Server error')
        }
    }
    return (
        <Center h="100vh">
            <Box>
                <form onSubmit={handleSubmit}>   
                    <FormControl mb="3">
                        <FormLabel>Password</FormLabel>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password'></Input>
                    </FormControl>
                    <Center>
                        <Button type="submit" className='pink-button'>Enter</Button>
                    </Center>
                    {error && <Text>{error}</Text>}
                </form>
            </Box>
        </Center>
    )
}