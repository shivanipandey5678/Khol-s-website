import React from 'react';
import { Container, Image, Text, Stack, Box, Flex, Button, Heading, Link as ChakraLink  } from '@chakra-ui/react';
import Navbar from '../components/Navbar.jsx/Navbar';
import SliderOfCards from "../components/SliderOfCards";
import HoverBordergrid from '../components/HoverBordergrid';
import HoverBordergrid2 from '../components/HoverBordergrid2';
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';
import Img from '../assets/Img.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';
import Img4 from '../assets/Img4.png';

export default function Home() {
  return (
    <>
      <Container maxW={'95%'} mt={25}>
        <Navbar/>
        <SliderOfCards />
        <HoverBordergrid/>

        {/* Section with Image and Overlay Text/Button */}
        <Box position="relative" mt={8} mb={8} >
          <Image src={Img2} alt="Descriptive Alt Text" boxSize="100%" objectFit="cover" />
          <Box
        position="absolute"
        top="50%"
        left={{ base: '10%', sm: '10%', md: '5%' }} // Adjust left positioning for different screens
        transform="translateY(-50%)"
        display="flex"
        flexDirection="column"
        color="green"
        p={4}
        borderRadius="md"
        width={{ base: '85%', sm: '70%', md: '40%' }}
       
      >
        <Stack spacing={4} textAlign="center">
          <Text fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} fontWeight="bold">
            Styles to Repeat
          </Text>
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}>
            Five days a week
          </Text>
          <Button colorScheme="blue" width={{ base: '50%' }} maxWidth="100%" m={"auto"}>
           SHOP NOW
          </Button>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ChakraLink
              as={RouterLink}
              to="//women"
              color="green"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
              mr={{ base: '5px', sm: '10px' }}
              mb={{ base: '5px', sm: '10px' }}
            >
              Women
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/homeshopping"
              color="green"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
              mr={{ base: '5px', sm: '10px' }}
              mb={{ base: '5px', sm: '10px' }}
            >
             Home Shopping
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/"
              color="green"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
              mr={{ base: '5px', sm: '10px' }}
              mb={{ base: '5px', sm: '10px' }}
            >
              Homes
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/shoes"
              color="green"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
              mr={{ base: '5px', sm: '10px' }}
              mb={{ base: '5px', sm: '10px' }}
            >
              shoes
            </ChakraLink>
          </Box>
        </Stack>
      </Box>
        </Box>

        <Heading as='h2' size='2xl' textAlign={'center'}>
          here are more great finds you'll love.
        </Heading>
        <HoverBordergrid2/>

        <Stack mt={"20px"}>
          <Text textAlign="center">*Here are the details: Earn amount of Kohl’s Cash® is approximate and may vary if additional coupons are applied to the purchase transaction. Details.</Text>
          <Text textAlign="center">PRICE is approximate and may vary if additional coupons or discounts are applied to the purchase transaction. See Kohls.com/details for a full list of included brands.</Text>
          <Text textAlign="center"><b>PRICES GOOD FOR A LIMITED TIME UNLESS OTHERWISE INDICATED.</b></Text>
          <Text textAlign="center">Pricing, promotions and merchandise availability may vary by location and at Kohls.com. "Sale" prices and percentage savings offered are discounts from Kohl’s Regular (Reg.) or Original (Orig.) prices, and are valid on selected styles of merchandise unless otherwise indicated. The Reg. or Orig. price of an item is the former or future offered price for the item or a comparable item by Kohl’s or another retailer. Actual sales may not have been made at the Reg. or Orig. prices, and intermediate markdowns may have been taken. Orig. prices may not have been in effect during the past 90 days or in all trade areas. Merchandise could be offered at the same or lower "Sale" prices during future promotional events beginning on or after the last day of this advertised event. The following merchandise are excluded from "Entire Stock" promotions in this advertisement: Clearance, Kohl’s Cares® cause or other charitable items, Licensed Team, Sephora at Kohl’s, emerging brands and Kohl’s Online-Exclusive items. In some events, actual savings may exceed the percent savings shown. Kohl’s® and Kohl’s brand names are trademarks of KIN, Inc. ©2024 Kohl’s, Inc. With respect to certain Price Break merchandise featured in this advertisement, the "previous sale" price represents sale prices recently advertised in Kohl’s print advertising. Clearance and Closeout Deal prices represent savings off original prices. Interim markdowns may have been taken. Selection of sizes, colors and styles may be limited per item. Sorry, no price adjustments.</Text>
        </Stack>
        
        
        
      </Container>
      <Footer/>
    </>
  );
}
