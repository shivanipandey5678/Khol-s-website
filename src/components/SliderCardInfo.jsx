


import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

export default function SliderCardInfo({ img, description, LinkNav, title, color }) {
  return (
    <Box shadow='md' borderWidth='1px' p={5} mt={35} borderRadius={6} bg={color} color={'white'}>
    <Flex align={'center'} w={'350px'} h={'70'}>
      <Image src={img} h={10} />
      <Box p={5}  >
        <Text as='b'>{title}</Text>
        <Text fontSize={'smaller'} textAlign={'left'}>{description}</Text>
        <Link href='#' textDecoration='underline'>
          {LinkNav}
        </Link>
      </Box>
    </Flex>
    </Box>
  );
}

  
