import React from 'react'

import { Box, HStack, Heading, Button, Center, Image, Stack, Text, useColorModeValue, Grid, GridItem } from "@chakra-ui/react"
import Product from './Product';
import MangoCheeseCake from "../images/mango_cheese_cake.png";
import ChocolateCheeseCake from "../images/chocolate_cheesecake.png";
import OreoCheeseCake from "../images/oreo_cheese_cake.png";
import CheesecuteCheeseCake from "../images/cheesecute_cheese_cake.png";
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
  pulse: {
    animation: 'x 1s ease-in-out infinite',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
}

class AnimationTitle extends React.Component {
  render() {
    return (
      <Heading fontSize={'xl'} fontWeight={700}>
        <StyleRoot>
        <HStack >
          <Box>
            <div style={styles.pulse}>
              <Text as='mark'>{this.props.header}</Text>
            </div>
          </Box>
          <Box>{this.props.title}</Box>
        </HStack>
        </StyleRoot>
      </Heading>
    
    )
  }
}
 
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

var cakes = [
  {
    image: MangoCheeseCake,
    header: 'Mango',
    title: ' Cheese Sweettooth',
    description: 'Harmony combination of fine CREAM CHEESE and MANGO with fresh mango toppings!',
    trademark: '"A taste of calmness"'
  },
  {
    image: ChocolateCheeseCake,
    header: 'Chocolate',
    title: 'Cheese Sweettooth',
    description: 'A sweet endeavour of chocolates and cheese. A mixture of FINE CHOCOLATE with CREAM CHEESE with chocolate toppings!',
    trademark: '"A daredevil for chocolate lover"' 
  },
  {
    image: OreoCheeseCake,
    header: 'Oreo',
    title: 'Cheese Sweettooth',
    description: 'Sweetbitter combination of OREO and fine CREAM CHEESE with crunchy oreo toppings!', 
    trademark: '"A taste of bold and manliness"'
  },
  {
    image: CheesecuteCheeseCake,
    header: 'Cheesecute',
    title: 'Cheesekut',
    description: 'Cute and adorable taste of cream cheese and milky cream cracker with Nestum toppings!', 
    trademark: '"A sweettooth for legends"'
  }
]

function Menu() {
  //   return <Box display="flex" alignItems="center" justifyContent="space-between" >
  //   <Flex
  //     bg="#F9FAFB"
  //     p={50}
  //     w="full"
  //     alignItems="center"
  //     justifyContent="center"
  //   >
  //     <Flex
  //       direction="column"
  //       justifyContent="center"
  //       alignItems="center"
  //       w="sm"
  //       mx="auto"
  //     >
  //       <Box
  //         bg="gray.300"
  //         h={64}
  //         w="full"
  //         rounded="lg"
  //         shadow="md"
  //         bgSize="cover"
  //         bgPos="center"
  //         style={{
  //           backgroundImage:
  //             "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
  //         }}
  //         _hover={{
  //           "box-shadow": "5px 10px #888888"
  //         }}
  //         transform="auto" _hover={{ scaleX: "1.2", scaleY: "1.2" } }
  //         saturation={0.4}
  //       ></Box>

  //       <Box
  //         w={{ base: 56, md: 64 }}
  //         bg="gray.800"
  //         mt={-10}
  //         shadow="lg"
  //         rounded="lg"
  //         overflow="hidden"
  //       >
  //         <Heading 
  //         as="h3"
  //           py={2}
  //           textAlign="center"
  //           fontWeight="bold"
  //           textTransform="uppercase"
  //           color="gray.800"
  //           letterSpacing={1}
  //         >
  //           Nike Revolt
  //         </Heading>

  //         <Flex
  //           alignItems="center"
  //           justifyContent="space-between"
  //           py={2}
  //           px={3}
  //           bg="gray.700"
  //         >
  //           <span
  //             fontWeight="bold"
  //             color="gray.700"
  //           >
  //             $129
  //           </span>
  //           <Button
  //             bg="gray.800"
  //             fontSize="xs"
  //             fontWeight="bold"
  //             color="white"
  //             px={2}
  //             py={1}
  //             rounded="lg"
  //             textTransform="uppercase"
  //             _hover={{
  //               bg: "gray.700",
  //             }}
  //             _focus={{
  //               bg: "gray.700",
  //               outline: "none",
  //             }}
  //           >
  //             Add to cart
  //           </Button>
  //         </Flex>
  //       </Box>
  //     </Flex>
  //   </Flex>
  // </Box>;

  return (
    <Center py={12}>
      <Grid templateColumns={{lg: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)'}} gap={6}>
        {cakes.map((cake, index) => (
          <GridItem key={index}>
            <Product 
              image={cake.image} 
              description={cake.description} 
              trademark={cake.trademark}
              title= {<AnimationTitle header={cake.header} title={cake.title} />}
            />
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
  
}

export default Menu;