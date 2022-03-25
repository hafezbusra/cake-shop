import React from "react";
import {
  Stack,
  Text,
  Flex,
  Icon,
  Heading,
} from "@chakra-ui/react";

const Feature = (props) => {
    return (
    <Stack>
      <Flex
        align={'center'}
        justify={'left'}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>    
            {props.icon}
        </Flex>
        <Heading fontSize="xl" fontWeight={600} ml="15px">{props.title}</Heading>
      </Flex>
      <Text color={'gray.600'}><b>{props.text}</b></Text>
    </Stack>

    );
  };

  export default Feature;
