 import logo3 from '../../assets/logo3.png'
 import account from '../../assets/account.png';
 import cart from '../../assets/cart.png';
 import { FaSearch } from 'react-icons/fa'; 
 import { Image, Flex ,Text,InputGroup,InputLeftElement,Input } from '@chakra-ui/react'
 import { NavLink } from 'react-router-dom';
 import { useContext } from 'react';
 import { AuthContext } from '../../context/AuthContext';
 
 export function MiddleNavBar(){
  let {firstName}=useContext(AuthContext)
   return(
       <Flex
        
         justifyContent={'space-between'} 
         h={'min-content'} 
         pl={6} 
         align={'center'}
         pr={6}
         pt={2}
         pb={2}>
       <Flex  w={'50%'} >
       <NavLink to="/"><Image src={logo3} h={30} mr={7}/></NavLink>
       <InputGroup flex={1}>
    <InputLeftElement pointerEvents="none">
       
    <FaSearch color="gray.300" />
    </InputLeftElement>
    <Input
        type="text"
        placeholder='What are you looking for today?'
        flex={1}
        
        border="1px solid gray"
        
    />
</InputGroup>


       </Flex>
       <Flex w={'10%'}>
        <NavLink to="/emailcheck">
           <Flex direction={'column'} mr={5}>
               <Image  src={account} h={30}/>
               <Text>{firstName?firstName:"Account"}</Text>
           </Flex>
        </NavLink>
         <NavLink to="/card"> 
           <Flex direction={'column'}>
               <Image  src={cart} h={30}/>
               <Text>$00.00</Text>
           </Flex>
           </NavLink> 

       </Flex>
        
        
       </Flex>
   )
 }

