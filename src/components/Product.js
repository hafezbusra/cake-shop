import React from 'react'

import { Box, Flex, Heading, Button, Center, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"


const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function Product() {
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
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        m="10px">
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
  );
  
}

export default Product;