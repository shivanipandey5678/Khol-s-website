import logo3 from '../assets/logo3.png';
import { FaSearch } from 'react-icons/fa'; 
import support from '../assets/support.png'
import { Tooltip,Image, Flex ,Text,InputGroup,InputLeftElement,Input, Heading, Divider, Button, VStack, Card } from '@chakra-ui/react'
import cart from '../assets/cart.png';
import Footer from './Footer';
export default function EmptyCard(){
     return(
        <>
        <Flex  justify={'space-evenly'} align={'center'} pb={2} pt={2}>
                <Flex w={'25%'} justify={'space-around'} align={'center'}>

                    <Image src={logo3} h={30} ></Image>
                    <Text fontSize={'x-large'}><b >My Cart</b></Text>
                </Flex>
                <InputGroup   w={'400px'}>
                    <InputLeftElement pointerEvents="none">
                    
                    <FaSearch color="gray.300" />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder='What are you looking for today?'
                        w={'400px'}
                        
                        border="1px solid gray"
                        
                    />
                </InputGroup>
               
        </Flex>
        <hr style={{ border: '1px solid gray', width: '100%' }} />
       <Flex align={'center'} w={'100vw'} h={'100vh'} justify={'space-evenly'}>
        <Flex direction={'column'}>
            <VStack>
            <Image src={cart}></Image>
            <Text>Your Cart is empty</Text>
            <Button bg={'black'} color={'white'} borderRadius={25}>START SHOPPING</Button>
            </VStack>
        </Flex>
        <Card shadow={'md'}>
        <Flex direction={'column'} w={'450px'} shadow={'md'}>
        <VStack>
            <Text textAlign={'left'}>POPULAR PRODUCTS</Text>
            <Flex borderTop={'1px solid black'}>

                <Flex direction={'column'}>
                <VStack>
                    <Image src="https://media.kohlsimg.com/is/image/kohls/6530363_Vital_White?wid=300&hei=300&op_sharpen=1"></Image>
                    <Text>Regular
                    $9.99</Text>
                </VStack>
                </Flex>
                <Flex  direction={'column'}>
                <VStack>
                    <Image src="https://media.kohlsimg.com/is/image/kohls/3500577_White?wid=300&hei=300&op_sharpen=1"></Image>
                    <Text>Regular
                    $11.99</Text>
                    </VStack>
                </Flex>
                <Flex  direction={'column'}>
                <VStack>
                    <Image src="https://media.kohlsimg.com/is/image/kohls/4887344_Black_Window_Tile?wid=300&hei=300&op_sharpen=1"></Image>
                    <Text>Regular
                    $14.99</Text>
                    </VStack>
                </Flex>
            </Flex>
            </VStack>
        </Flex>
        </Card>
        

       </Flex>
       <Flex direction={'row-reverse'} mr={6}>

       
        <Button bg={'#8F3030'} color={'white'} borderRadius={25} > <Image src={support} h={'80%'} color={'white'} ></Image>Ask us</Button>
        </Flex>
        <Footer/>
        </>
     )
}