import React from 'react'
import WhatsappButton from "../images/whatsapp.png";
import { Heading, Text, Box, HStack, Center, Flex, useColorModeValue, Button, Container, Stack, VisuallyHidden } from "@chakra-ui/react"
import { FaInstagram } from 'react-icons/fa';


const Footer = (props) => {
    // return <Box  sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', bottom: '0px'}} align="center" justify="center" >
    //    <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">
    //    <Image w ='50%' src={WhatsappButton} alt="Segun Adebayo"/>
    //     </a>
    // </Box>;
    return <Box
      bg='gray.700'
      color='gray.200'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
        <Button
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          rounded={'full'}
          cursor={'pointer'}
          as={'a'}
          href={'https://www.instagram.com/afarhansweettooth/'}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          }}>
          <VisuallyHidden>Instagram</VisuallyHidden>
          <FaInstagram />
        </Button>
        </Stack>
        <Text>© 2022 A Farhan's Sweettooth. All rights reserved</Text>
      </Container>
    </Box>;
  
   
}

export default Footer;