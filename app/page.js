'use client'
import { ChakraProvider , Box , Flex, Text, Link, Heading, Center, Image, Card, CardHeader, CardBody, CardFooter, Button, Divider, AbsoluteCenter} from "@chakra-ui/react";



export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box display="flex" flexDirection="column" minHeight="100vh" >

          <Box>
            <Heading id="welcomeMessage" p="5">
                Welcome to Davie Loria&apos;s portfolio. 
            </Heading>
          </Box>
          
          <Box>
          <Divider />
            <Center bg='white' padding="2rem">
              <Heading as='h4' size='md'>Featured</Heading>
            </Center>
          </Box>
          
          <Flex id="featuredBox" pl="1rem" pr="1rem" justifyContent='space-between'>
            <Card w="48%" variant='filled'>
              <CardHeader>
                <Heading className="featuredPubHeading" size='md'>
                  <Link className="pinkLink" href="https://www.earthscope.org/news/remote-sensing-and-armed-conflict-a-unique-humanitarian-role-for-geophysics/" target="_blank" rel="noopener noreferrer">
                    Remote sensing and armed conflict—a unique humanitarian role for geophysics
                  </Link>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                Remote sensing can be essential for rapidly collecting information about destruction levels, famine, 
                and other humanitarian questions in areas where ground investigations are difficult, as can be the case in times of conflict.
                </Text>
              </CardBody>
            </Card>
            <Card w="48%" variant='filled'>
              <CardHeader>
                <Heading className="featuredPubHeading" size='md'>
                <Link className="pinkLink" href="https://www.usgs.gov/observatories/yvo/news/yellowstone-gps-stations-help-monitor-solar-storms-cause-widespread-auroras" target="_blank" rel="noopener noreferrer">
                    Yellowstone GPS stations help to monitor solar storms that cause widespread auroras
                </Link>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>For a couple nights in May an extreme solar storm created a beautiful night sky for many people in areas that normally are too far away to see auroras. 
                Some of the GPS stations in Yellowstone are among the tools used to monitor space weather like that solar storm.</Text>
              </CardBody>
            </Card>
          </Flex>

          <Box id="mobileBox" display="none">
            <Card m="0 1rem 1rem 1rem" variant='filled' size="sm">
                <CardHeader>
                  <Heading size='sm'>
                    <Link className="pinkLink" href="https://www.earthscope.org/news/remote-sensing-and-armed-conflict-a-unique-humanitarian-role-for-geophysics/" target="_blank" rel="noopener noreferrer">
                      Remote sensing and armed conflict—a unique humanitarian role for geophysics
                    </Link>
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                  Remote sensing can be essential for rapidly collecting information about destruction levels, famine, 
                  and other humanitarian questions in areas where ground investigations are difficult, as can be the case in times of conflict.
                  </Text>
                </CardBody>
              </Card>
              <Card m="0 1rem 1rem 1rem" variant='filled'>
                <CardHeader>
                  <Heading size='sm'>
                  <Link className="pinkLink" href="https://www.usgs.gov/observatories/yvo/news/yellowstone-gps-stations-help-monitor-solar-storms-cause-widespread-auroras" target="_blank" rel="noopener noreferrer">
                      Yellowstone GPS stations help to monitor solar storms that cause widespread auroras
                  </Link>
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>For a couple nights in May an extreme solar storm created a beautiful night sky for many people in areas that normally are too far away to see auroras. 
                  Some of the GPS stations in Yellowstone are among the tools used to monitor space weather like that solar storm.</Text>
                </CardBody>
              </Card>
          </Box>


          <Center mt="auto" mb="2rem">
            <Link href="/Manage" color="lightgray">
              Manage
            </Link>
          </Center>
        </Box>
      </ChakraProvider>
    </>
  )
}