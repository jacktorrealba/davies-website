"use client"
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";
import Link from 'next/link'
import { ChakraProvider, Flex, Box , List, ListItem, Menu, MenuList, MenuButton, MenuItem, Text} from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaUser, FaFolder, FaHome } from "react-icons/fa";
import PageTransition from "@/components/page-transition";


const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}) {
  const pathname = usePathname();
  return (
    <>
    <html>
      <title>Davie Loria</title>
      <body>
      <ChakraProvider>
        <PageTransition>
          <Flex id="main" h="100vh">
            <Box id="navContents">
              <List spacing={3} color="white">
                <ListItem className="customLinkStyle">
                  <Link passHref className="myNavLink"  href="/">
                    <Text color={pathname === '/' ? '#dd00ad' : ''} className="navLinkText">HOME</Text>
                  </Link>
                </ListItem>
                <ListItem className="customLinkStyle">
                  <Link passHref className="myNavLink" href="/AboutMe">
                    <Text color={pathname === '/AboutMe' ? '#dd00ad' : ''} className="navLinkText">ABOUT</Text>
                  </Link>
                </ListItem>
                <ListItem className="customLinkStyle">
                  <Link passHref className="myNavLink" href="/Publications">
                    <Text color={pathname === '/Publications' ? '#dd00ad' : ''} className="navLinkText">PUBLICATIONS</Text>
                  </Link>
                </ListItem>
                <ListItem className="customLinkStyle">
                    <Link className="myNavLink" href='mailto:davieloria@gmail.com' target="_blank" rel="noopener noreferrer">
                      <Text className="navLinkText">CONTACT</Text>
                    </Link>
                </ListItem>
                
                <ListItem>
                  <Link id="linkedIn-link" href="https://www.linkedin.com/in/davie-loria-262587193/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size="50px"></FaLinkedin>
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box id="pageContents" w="50%">
              {children}
            </Box>
          </Flex>
        </PageTransition>
      </ChakraProvider>
      </body>
    </html>
    </>
  )
}
