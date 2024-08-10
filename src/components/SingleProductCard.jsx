

import React from 'react';
import { useToast } from '@chakra-ui/react'
import Navbar from "./Navbar.jsx/Navbar";
import Footer from "./Footer";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';

import star from '../assets/star-solid.svg';
import {  Heading, Image, Flex, Container, Text, Box, Badge, Button} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, Link as ChakraLink } from '@chakra-ui/react';

export default function SingleProductCard({ smalldescription, header, sellnumber, img, id,price, previousPrice, tags }) {
    let navigate=useNavigate();
    let [err,setErr]=useState(false);
    let [loding,setLoading]=useState(false);
    let ProductData={
        smalldescription,
        header,
        sellnumber,
        img,
        id,
        price,
        previousPrice,
        tags
    }
    async function AddingData(){
       
        try {
          setLoading(true)
          let res=await axios({
          method:"POST",
          url:`https://khols-website-server.onrender.com/Card`,
          data:ProductData,
        })
      
        if(res.status===201){
          alert("added")
         
          navigate("/card")
          setLoading(false)
        }
        } catch (error) {
          setErr(true)
          setLoading(false)
        }
        
      }
    
    return (
        <>
            <Navbar />
            <Container maxW='80vw' p={4}>
            <Breadcrumb 
            spacing={{ base: '4px', md: '8px' }} 
            separator=">" 
            fontSize={{ base: 'sm', md: 'md' }}
        >
            <BreadcrumbItem>
                <ChakraLink as={Link} to="/">Home</ChakraLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <ChakraLink as={Link} to="/women">Women</ChakraLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <ChakraLink as={Link} to="/men">Men</ChakraLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <ChakraLink as={Link} to="/kids">Kids</ChakraLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <ChakraLink as={Link} to="/under10">Under $10</ChakraLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <ChakraLink as={Link} to="/under20">Under $20</ChakraLink>
            </BreadcrumbItem>
        </Breadcrumb>

                <Box mt={6} mb={6}>
                    <Heading as='h2' size='xl'>{smalldescription}</Heading>
                    <Text fontSize='larger' color="#52C3C8" textDecoration="underline">{header}</Text>
                </Box>

                <Flex alignItems='center' mb={4}>
                    <Flex>
                        <Image src={star} boxSize='20px' />
                        <Image src={star} boxSize='20px' />
                        <Image src={star} boxSize='20px' />
                        <Image src={star} boxSize='20px' />
                    </Flex>
                    <Flex w='30%' justify='space-around' ml={4}>
                        <Text as="u">({sellnumber})</Text>
                        <Link as="u" href="#">Write a review</Link>
                        <Link as="u" href="#">Ask a question</Link>
                    </Flex>
                </Flex>

                <Image src={img} h={'250px'} />

                <Box mt={4}>
                    <Flex>
                        <Box mr={6}>
                    <Text fontSize="xl" fontWeight="bold">{price}</Text>
                    {previousPrice && <Text fontSize="lg" color="gray.500" textDecoration="line-through">{previousPrice}</Text>}
                    </Box>
                    <Button colorScheme="teal" onClick={AddingData}>Add to Card</Button>
                    </Flex>
                    <Flex mt={2}>
                        {tags && tags.map((tag, index) => (
                            <Badge key={index} colorScheme="teal" mr={2}>{tag}</Badge>
                        ))}
                       
                    </Flex>
                    
                </Box>
            </Container>
            <Footer />
        </>
    );
}