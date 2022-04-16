import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  StackDivider
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Center } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import "@fontsource/courgette"
import "@fontsource/sawarabi-mincho";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

const theme = extendTheme({
  fonts: {
    heading: 'Courgette',
    body: 'Sawarabi Mincho',
  },
  styles: {
    global: {
      // styles for the `body`
      p: {
        fontSize: 'md'
      }
    }
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        // divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        // bg='antiquewhite'
        bgGradient='linear(to-r, yellow.100 0%, blue.100 30%, red.100 95%)'
      >
       <Header/>
        <Menu/>
        <Footer/>
        <FloatingWhatsApp 
          phone     ="+601159135307"
          showPopup = {false}
          zIndex    ={9999}
          message   ="Hai, saya ingin membuat tempahan kek."
          headerTitle="A Farhan's Sweettooth"
          autoOpenTimeout={5000}
        />
      </VStack>
    </ChakraProvider
      
    >
  );
}

export default App;
