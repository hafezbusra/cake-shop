import React from 'react'

import { Heading, Text, Box, HStack, SimpleGrid, Flex, GridItem, VStack, Button, Grid, Divider, Icon, Image, useMediaQuery } from "@chakra-ui/react"
import Feature from "../components/Feature";
import { FcLike, FcDonate, FcInTransit } from 'react-icons/fc';
import WhatsappButton from "../images/whatsapp.png";

const Navbar = (props) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")

    return <Flex align="center" justify="center">
    <Box maxW="7xl" marginTop={{lg: "100px", base: "20px"}} mx="auto">
    <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <Heading fontSize="6xl" fontWeight="700" ml="20px">
              Farhani's Dessert
            </Heading>
            {!isMobile &&
            <Button 
            colorScheme="green"
            size="md"
            onClick={() => {
              window.open("https://wa.me/60132995307", "_blank");
            }}
           >
            {/* <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank"> */}
              <Image 
                w ='50%' 
                src={WhatsappButton} 
                alt="Segun Adebayo"
                _hover={{ "box-shadow": "5px 10px #888888"}}
                transform="auto" 
                _hover={{ scaleX: "1.1", scaleY: "1.1" } }
                />
            {/* //     </a> */}
            </Button>}
            
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <Text as="i" marginTop={{lg: "30px", base: "5px"}} marginLeft="12px" marginRight="12px" fontSize='xl' fontWeight="400">
              Preparing dessert delight for crazy <Text as='mark'>cheese cake </Text>fans! Available in lots of flavours according to your preferences
              <br/>
              Deboom Cheezilicious, Ultimate Cheesensation!
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    <Flex
      // bg="gray.400"
      w="auto"
      justifyContent="center"
      alignItems="center"
      marginTop={{lg: "70px", base: "10px"}}
    >
      <Box p={4} 
          bg="yellow.100"
          boxShadow='xl'
          rounded='xl'
          margin={4}
          >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
           icon={<Icon as={FcLike} w={10} h={10} />}
          title={'Flavours'}
          text={
            'Lots of choices that will meet your tastebuds! We are open for custom flavours that will met you appetite. The limit is your imagination'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Affordable'}
          text={
            'We offer desert that will not only met your tastebuds, but also your budget. Good food does not always come from expensive shop arent they?'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Fresh'}
          text={
            'We make sure the desert is delivered to you not more that 48 hours after its was made. We want our customers to experience only the best desertious experiences!'
          }
        />
      </SimpleGrid>
    </Box>
    </Flex>
            </Box>
  </Flex>;
  
   
}

export default Navbar;
  

