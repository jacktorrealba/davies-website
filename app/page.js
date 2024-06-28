'use client'
import { ChakraProvider , Box , Flex, Text, Link, Heading, Center, Image} from "@chakra-ui/react";
import PageTransition from "@/components/page-transition"
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <ChakraProvider>
      <PageTransition>
        <Box h="auto">
          <Heading p="5">
              Welcome to Davie Loria&apos;s portfolio. 
          </Heading>
        </Box>
        <Box p="5">
          <Link id="linkedIn-link" href="https://www.linkedin.com/in/davie-loria-262587193/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="50px"></FaLinkedin>
          </Link>
        </Box>
      </PageTransition>
    </ChakraProvider>
    </>
  )
}