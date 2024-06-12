
// import logo3 from '../assets/logo3.png';
// import close from '../assets/close.png';
// import { useNavigate } from 'react-router-dom';
// import { useContext,useState,useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Image ,Box,Text,Divider,FormControl,FormLabel,Input,FormHelperText,Button,Container,Heading,Flex} from '@chakra-ui/react';
// export default function SignupPage(){
//   let {setFirstName,setLastName,setBirth,setPhone,setInfoSignUp,password,email}=useContext(AuthContext);
//   let navigate=useNavigate();
//      const [fName,setFName] = useState("");
//      const [lName,setLName] = useState("");
//      const [birthday,setBirthDay] = useState("");
//      const [ph,setPh] = useState("");

//      function handleClick(){
//       setFirstName(fName)
//       setLastName(lName)
//       setBirth(birthday)
//       setPhone(ph)
//       setInfoSignUp(fName,password,lName,email,ph,birthday)
//      }
//     return(
//         <Flex direction="column" align="center" mt={10}>
//         <Image src={logo3} h={8}/>
//        <Container m={'auto'} mt={25} shadow={"md"} borderWidth={2} p={5} maxW={'400px'} position={'relative'}>
      
//        <Box p={4}>
//         <Flex  justify={'space-between'} align={'center'} mb={4}>
//         <Text as={'b'} fontSize={20}  p={2}>Complete Your Account</Text>
//        < Image src={close} h={5} onClick={()=>{navigate("/")}}/>
//         </Flex>
//         {" "}
//         <hr style={{color:"#a9a9a9"}}/>
        
        
//          <FormControl  mt={4}>

//             <FormLabel >First Name</FormLabel>
//             <Input type='text' placeholder='Enter your First Name' onChange={(e)=>{setFName(e.target.value)}}/>


//             <FormLabel  mt={3}>Last Name</FormLabel>
//             <Input type='text' placeholder='Enter your Lat Name'  onChange={(e)=>{setLName(e.target.value)}}/>



            

//             <FormLabel  mt={3}>Birthday</FormLabel>
//             <Input type='date' placeholder='Enter your email here'  onChange={(e)=>{setBirthDay(e.target.value)}}/>


//             <FormLabel  mt={3}>Mobile Phone</FormLabel>
//             <Input type='Number' placeholder='Enter your email here'  onChange={(e)=>{setPh(e.target.value)}}/>
           


//             <Button bg={'gray'} color={'black'} w={"95%"} borderRadius={'30'} m={'auto' } mt={7} _hover={{background:"black",color:"white"}} onClick={handleClick}>Complete Your Account</Button>
//         </FormControl>
//        </Box>
       
//        </Container>
//        <Container maxW={'420px'} mt={5}>
//        <p style={{fontSize:"smaller"}}>
        
//          By selecting "Continue" you are agreeing to create a Kohl's account and to enroll in Kohl's Rewards and acknowledge having read and agree to, <span style={{color:"blue",textDecoration:"underline"}}><b>Kohl's Privacy Policy, Legal Notices. Notice of Financial Incentive, and Rewards Terms</b></span> and certify that you are at least 16 years old and a US resident.
//        </p>
//        </Container>

//        </Flex>
//     )

// }



import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Image, Box, Text, FormControl, FormLabel, Input, Button, Container, Flex, useToast, Heading } from '@chakra-ui/react';
import logo3 from '../assets/logo3.png';
import close from '../assets/close.png';

export default function SignupPage() {
  const { setFirstName, setLastName, setBirth, setPhone, setInfoSignUp, password, email } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ph, setPh] = useState("");

  function handleClick() {
    if (!fName || !lName || !birthday || !ph) {
      toast({
        title: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setFirstName(fName);
    setLastName(lName);
    setBirth(birthday);
    setPhone(ph);
    setInfoSignUp(fName, password, lName, email, ph, birthday);

    toast({
      title: "Account created.",
      description: "Your account has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    navigate('/'); 
  }

  return (
    <Flex direction="column" align="center" mt={10}>
      <Image src={logo3} h={8} />
      <Container m={'auto'} mt={25} shadow={"md"} borderWidth={2} p={5} maxW={'400px'} position={'relative'}>
        <Box p={4}>
          <Flex justify={'space-between'} align={'center'} mb={4}>
            <Text as={'b'} fontSize={20} p={2}>Complete Your Account</Text>
            <Image src={close} h={5} onClick={() => { navigate("/") }} />
          </Flex>
          <hr style={{ color: "#a9a9a9" }} />

          <FormControl mt={4}>
            <FormLabel>First Name</FormLabel>
            <Input type='text' placeholder='Enter your First Name' onChange={(e) => { setFName(e.target.value) }} />

            <FormLabel mt={3}>Last Name</FormLabel>
            <Input type='text' placeholder='Enter your Last Name' onChange={(e) => { setLName(e.target.value) }} />

            <FormLabel mt={3}>Birthday</FormLabel>
            <Input type='date' placeholder='Enter your birthday' onChange={(e) => { setBirthday(e.target.value) }} />

            <FormLabel mt={3}>Mobile Phone</FormLabel>
            <Input type='number' placeholder='Enter your phone number' onChange={(e) => { setPh(e.target.value) }} />

            <Button
              bg={'gray'}
              color={'black'}
              w={"95%"}
              borderRadius={'30'}
              m={'auto'}
              mt={7}
              _hover={{ background: "black", color: "white" }}
              onClick={handleClick}
            >
              Complete Your Account
            </Button>
          </FormControl>
        </Box>
      </Container>
      <Container maxW={'420px'} mt={5}>
        <p style={{ fontSize: "smaller" }}>
          By selecting "Continue" you are agreeing to create a Kohl's account and to enroll in Kohl's Rewards and acknowledge having read and agree to, <span style={{ color: "blue", textDecoration: "underline" }}><b>Kohl's Privacy Policy, Legal Notices. Notice of Financial Incentive, and Rewards Terms</b></span> and certify that you are at least 16 years old and a US resident.
        </p>
      </Container>
    </Flex>
  );
}
