// import { Button, Container, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import toparrow from '../assets/toparrow.png';
import facebookF from '../assets/facebook-f.svg';
import instagramlogo from '../assets/instagramlogo.svg';
import pinterestp from '../assets/pinterestp.svg';
import youtube from '../assets/youtube.svg';
import tiktok from '../assets/tiktok.svg';
import qr from '../assets/qr.png';





import React from 'react';
import { Flex, Image, Text, Button, SimpleGrid } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Flex
        bg={'beige'}
        direction={'column'}
        h={'min-content'}
        mt={20}
        pb={8}
      >
        <Flex justify={'center'} align={'center'} py={4}>
          <Image src={toparrow} h={5} />
          <Text ml={2}>BACK TO TOP</Text>
        </Flex>

        <Flex
          justify={'space-between'}
          px={{ base: '4', md: '20', lg: '32' }}
          borderBottom={'1px solid #AFE7E9'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Flex
            justify={'space-evenly'}
            flex={1}
            align={'center'}
            borderRight={{ md: '1px solid #AFE7E9' }}
            mb={{ base: 4, md: 0 }}
            pr={{ md: 4 }}
          >
            <Text w={'100px'} fontSize={{ base: 'sm', md: 'md' }}>
              <b>CONNECT WITH US</b>
            </Text>
            <Image src={facebookF} h={5} />
            <Image src={tiktok} h={5} />
            <Image src={pinterestp} h={5} />
            <Image src={instagramlogo} h={5} />
            <Image src={youtube} h={5} />
          </Flex>

          <Flex
            flex={1}
            justify={'space-evenly'}
            align={'center'}
            pl={{ md: 4 }}
          >
            <Text w={'100px'} fontSize={{ base: 'sm', md: 'md' }}>
              <b>GET OUR APP</b>
            </Text>
            <Image src={qr} h={20}  display={{base:"none",md:"flex"}}/>
            <Flex
              direction={'column'}
              justify={'space-between'}
              w={'200px'}
            >
              <Text fontSize={{ base: 'xs', md: 'sm' }}>
                Scan the code to download the Kohl's App today
              </Text>
              <Button
                bg={'black'}
                color={'white'}
                borderRadius={4}
                w={32}
                mt={2}
              >
                Learn More
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <SimpleGrid
          columns={{ base: 2,sm:3, md: 4, lg: 5 }}
          fontSize={'sm'}
          px={{ base: '4', md: '20', lg: '32' }}
          lineHeight={2}
          py={5}
          borderBottom={'1px solid #AFE7E9'}
          spacingY={5}
        >
          <Flex direction={'column'} w={'150px'}>
            <Text><b>CUSTOMER SERVICE</b></Text>
            <Text>Contact Us</Text>
            <Text>Order Status</Text>
            <Text>Coupon Eligibility</Text>
            <Text>Shipping</Text>
            <Text>Returns</Text>
            <Text>Rebates</Text>
            <Text>Recalls</Text>
            <Text>Product Guides</Text>
            <Text>Kohl’s Cash</Text>
          </Flex>
          <Flex direction={'column'} w={'150px'}>
            <Text><b>SHOP KOHL’S</b></Text>
            <Text>Today’s Ad</Text>
            <Text>Get 15% off when you sign up for our emails</Text>
            <Text>Site Map</Text>
            <Text>Store Locator</Text>
            <Text>Gift Cards</Text>
            <Text>Rebates</Text>
            <Text>Recalls</Text>
            <Text>Kohl’s Coupons</Text>
            <Text>Kohl’s Blog</Text>
          </Flex>
          <Flex direction={'column'} w={'150px'}>
            <Text><b>MY ACCOUNT</b></Text>
            <Text>Sign In</Text>
            <Text>My Account</Text>
            <Text>Update Password</Text>
            <Text>Order Status</Text>
            <Text>Rewards Account</Text>
            <Text>Gift Card Balance & Kohl’s Cash Balance</Text>
          </Flex>
          <Flex direction={'column'} w={'150px'}>
            <Text><b>KOHL’S CARD & REWARDS</b></Text>
            <Text>Kohl's Card</Text>
            <Text>Kohl's Rewards</Text>
            <Text>Pay & Manage My Kohl's Card</Text>
            <Text>Pay & Manage My Kohl's Rewards® Visa</Text>
            <Text>Apply for a Kohl’s Card</Text>
            <Text>See if you prequalify</Text>
          </Flex>
          <Flex direction={'column'} w={'150px'}>
            <Text><b>ABOUT KOHL’S</b></Text>
            <Text>Community</Text>
            <Text>Diversity & Inclusion</Text>
            <Text>Sustainability</Text>
            <Text>Careers</Text>
            <Text>Apply for Seasonal Jobs</Text>
            <Text>Associate Services</Text>
            <Text>Investor Relations</Text>
            <Text>Affiliate Program</Text>
            <Text>Advertise with Us</Text>
          </Flex>
        </SimpleGrid>

        <Flex
          justify={'center'}
          direction={'column'}
          textAlign={'center'}
          fontSize={'smaller'}
          py={4}
        >
          <Text>2024 Kohl's Inc.</Text>
          <Text>KOHL'S" and Kohl's brand names are trademarks owned by KIN, Inc.</Text>
          <Text>All rights reserved</Text>
          <Text color={'blue'} textDecoration={'underline'}>
            <b>Android, Google Play and the Google Play logo are trademarks of Google Inc. App Store is a service mark of Apple Inc.</b>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
