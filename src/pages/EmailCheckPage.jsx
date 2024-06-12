import logo3 from '../assets/logo3.png';
import close from '../assets/close.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import React, { useContext, useEffect, useState } from "react";
import {  Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Image ,Box,Text,Divider,FormControl,FormLabel,Input,FormHelperText,Button,Container,Heading,Flex} from '@chakra-ui/react';
export default function EmailCheckPage(){
  let navigate=useNavigate();
  const { setSign } = useContext(AuthContext);
  const { setEmail1 } = useContext(AuthContext);
  const [email,setEm]=useState("");
function submitForm(e){
  e.peventDefault;
  setEmail1(email)
}

useEffect(()=>{
  setSign();
  return setSign;
},[])

    return(
        <Flex direction="column" align="center" mt={10}>
        <Image src={logo3} h={8}/>
       <Container m={'auto'} mt={25} shadow={"md"} borderWidth={2} p={5} maxW={'440px'} position={'relative'}>
      
       <Box p={4}>
        <Flex  justify={'space-between'} align={'center'} mb={4}>
        <Text as={'b'} fontSize={20}  p={2}>Sign In or Join Kohl's Rewards</Text>
       < Image src={close} h={5} onClick={()=>{navigate("/")}}/>
        </Flex>
        {" "}
        <hr style={{color:"#a9a9a9"}}/>
        
        
         <FormControl  mt={4}>
            <FormLabel >Email address</FormLabel>
            <Input type='email' placeholder='Enter your email here' onChange={(e)=>setEm(e.target.value)}/>
            <FormHelperText mt={4}><b>Don't have any account yet?.</b></FormHelperText>
            <Text  mt={0.5}>Enter your email and we will help you create one!</Text>
           <ChakraLink as={ReactRouterLink} to="/passwordcheck">
            <Button bg={'black'} color={'white'} w={"95%"} borderRadius={'30'} m={'auto' } mt={7} onClick={(e)=>{submitForm(e)}}>Continue</Button>
            </ChakraLink>
        </FormControl>
       </Box>
       
       </Container>
       <Container maxW={'440px'} mt={5}>
       <p style={{fontSize:"smaller"}}>
        
         By selecting "Continue" you are agreeing to create a Kohl's account and to enroll in Kohl's Rewards and acknowledge having read and agree to, <span style={{color:"blue",textDecoration:"underline"}}><b>Kohl's Privacy Policy, Legal Notices. Notice of Financial Incentive, and Rewards Terms</b></span> and certify that you are at least 16 years old and a US resident.
       </p>
       </Container>

       </Flex>
    )

}