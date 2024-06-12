import logo3 from '../assets/logo3.png';
import close from '../assets/close.png';
import cross from '../assets/cross.png';
import tick from '../assets/tick.png';
import { useNavigate } from 'react-router-dom';
import {  Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";


import { AuthContext } from '../context/AuthContext';
import { useContext ,useEffect,useState} from 'react';

import { Image ,Box,Text,Divider,FormControl,FormLabel,Input,FormHelperText,Button,Container,Heading,Flex} from '@chakra-ui/react';
export default function PasswordCheckPage(){
    let navigate=useNavigate();
    let {email}=useContext(AuthContext);

    let {setPassword1}=useContext(AuthContext);
    let [user_password,setUserPassword]=useState("");
    let [valid,setValid]=useState({
        length:false,
        number:false,
        upperCase:false,
        lowerCase:false,
        maxLength:true,

    });


    useEffect(()=>{
       const length=user_password.length>=8;
       const number=/\d/.test(user_password);
       const upperCase=/[A-Z]/.test(user_password);
       const lowerCase=/[a-z]/.test(user_password);
       const maxLength=user_password.length<30;
       setValid({length,number,upperCase,lowerCase,maxLength})
    },[user_password])



    function handleClick(){
        if(Object.values(valid).every(Boolean)){
            setPassword1(user_password)
            navigate("/signup")
        }
       
    }


    return(
       <>
          <Flex direction="column" align="center" mt={10}>
        <Image src={logo3} h={8}/>
       <Container m={'auto'} mt={25} shadow={"md"} borderWidth={2} p={5} maxW={'440px'} position={'relative'}>
      
       <Box p={4}>
        <Flex  justify={'space-between'} align={'center'} mb={4}>
        <Text as={'b'} fontSize={28} p={1}>Join Kohl's Rewards</Text>
       < Image src={close} h={5} onClick={()=>{navigate("/")}}/>
        </Flex>
        {" "}
        <hr style={{color:"#a9a9a9"}}/>
        
        
         <FormControl mt={4}>
            <p>Let's create an account for</p>
            <p><b>{email}</b></p>
            <p style={{color:"blue",textDecoration:"underline"}}>Use a Different Email</p>
            <FormLabel mt={4}>Create Password</FormLabel>
            <Input type='email' placeholder='Enter your password here' onChange={(e)=>{setUserPassword(e.target.value)}}/>
             <Flex direction={"column"} mt={4}>
                <Flex  align={"center"} justify={'space-between'} color={valid.length?"green":"red"}>
                    <p>8+ characters</p>
                    <Image src={valid.length?tick:cross} h={5} ></Image>
                </Flex>
                <Flex align={"center"} justify={'space-between'} color={valid.number?"green":"red"}>
                    <p>A number</p>
                    <Image src={valid.number?tick:cross}  h={5}></Image>
                </Flex>
                <Flex align={"center"} justify={'space-between'} color={valid.upperCase?"green":"red"}>
                    <p>An upper case letter</p>
                    <Image src={valid.upperCase?tick:cross}  h={5}></Image>
                </Flex>
                <Flex align={"center"} justify={'space-between'} color={valid.lowerCase?"green":"red"}>
                    <p>A lower case letter</p>
                    <Image src={valid.lowerCase?tick:cross}  h={5}></Image>
                </Flex>
                <Flex align={"center"} justify={'space-between'} color={valid.maxLength?"green":"red"}>
                    <p>Less than 30 characters
                    </p>
                    <Image src={valid.maxLength?tick:cross}  h={5}></Image>
                </Flex>

             </Flex>
            
            <Button bg={'#a9a9a9'} color={'black'} w={"95%"} borderRadius={'30'} m={'auto' } mt={7} _hover={{background:"black",color:"white"}} onClick={handleClick}>Create Password</Button>
           
        </FormControl>
       </Box>
       
       </Container>
       

       </Flex>
       </>
    )
}