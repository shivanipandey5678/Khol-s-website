 import logo3 from '../../assets/logo3.png'
 import account from '../../assets/account.png';
 import cart from '../../assets/cart.png';
 import { FaSearch } from 'react-icons/fa'; 
 import { Image, Flex ,Text,InputGroup,InputLeftElement,Input } from '@chakra-ui/react'
 import { NavLink } from 'react-router-dom';
 import { useContext } from 'react';
 import { AuthContext } from '../../context/AuthContext';
 
//  export function MiddleNavBar(){
//   let {firstName}=useContext(AuthContext)
//    return(
//        <Flex
        
//          justifyContent={'space-between'} 
//          h={'min-content'} 
//          pl={6} 
//          align={'center'}
//          pr={6}
//          pt={2}
//          pb={2}>
//        <Flex  w={'50%'} >
//        <NavLink to="/"><Image src={logo3} h={30} mr={7}/></NavLink>
//        <InputGroup flex={1}>
//     <InputLeftElement pointerEvents="none">
       
//     <FaSearch color="gray.300" />
//     </InputLeftElement>
//     <Input
//         type="text"
//         placeholder='What are you looking for today?'
//         flex={1}
        
//         border="1px solid gray"
        
//     />
// </InputGroup>


//        </Flex>
//        <Flex w={'10%'}>
//         <NavLink to="/emailcheck">
//            <Flex direction={'column'} mr={5}>
//                <Image  src={account} h={30}/>
//                <Text>{firstName?firstName:"Account"}</Text>
//            </Flex>
//         </NavLink>
//          <NavLink to="/card"> 
//            <Flex direction={'column'}>
//                <Image  src={cart} h={30}/>
//                <Text>$00.00</Text>
//            </Flex>
//            </NavLink> 

//        </Flex>
        
        
//        </Flex>
//    )
//  }

export function MiddleNavBar() {
    let { firstName } = useContext(AuthContext);

    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            h={'min-content'}
            pl={{ base: 4, md: 6 }}
            pr={{ base: 4, md: 6 }}
            pt={{ base: 4, md: 2 }}
            pb={{ base: 4, md: 2 }}
            align={'center'}
            wrap={'wrap'}
        >
            {/* Logo and Search Bar */}
            <Flex
                w={{ base: '100%', md: '50%' }}
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
                mb={{ base: 4, md: 0 }}
                justify={{ base: 'center', md: 'flex-start' }}
            >
                <NavLink to="/">
                    <Image src={logo3} h={30} mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 7 }} />
                </NavLink>
                <InputGroup flex={1} width={{ base: '100%', md: 'auto' }}>
                    <InputLeftElement pointerEvents="none">
                        <FaSearch color="gray.300" />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder='What are you looking for today?'
                        border="1px solid gray"
                    />
                </InputGroup>
            </Flex>

            {/* Account and Cart Icons */}
            <Flex
                w={{ base: '100%', md: '10%' }}
                direction={{ base: 'row', md: 'column' }}
                align={{ base: 'center', md: 'flex-start' }}
                justify={{ base: 'center', md: 'flex-end' }}
                wrap={'wrap'}
            >
                <NavLink to="/emailcheck">
                    <Flex direction={'row'} align={'center'} mb={{ base: 4, md: 0 }} mr={{ base: 2, md: 5 }}>
                        <Image src={account} h={30} />
                        <Text ml={2}>{firstName ? firstName : "Account"}</Text>
                    </Flex>
                </NavLink>
                <NavLink to="/card">
                    <Flex direction={'row'} align={'center'}>
                        <Image src={cart} h={30} />
                        <Text ml={2}>$00.00</Text>
                    </Flex>
                </NavLink>
            </Flex>
        </Flex>
    );
}
