
import CardBox from '../components/Card';
import HoverBorderEffect from '../components/HoverBorderEffect';
import Navbar from '../components/Navbar.jsx/Navbar'
import Footer from '../components/Footer';
import axios from 'axios';
import {useEffect,useState} from 'react';
import LoadingIndicater from '../components/LoginIndicater';
import ErrorIndicater from '../components/ErrorIndicater';


import {
  SimpleGrid,
  Flex,
  Container,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Checkbox,Heading,
  Text,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Select,

} from '@chakra-ui/react';

export default function WomenProduct() {
  let [womenproduct,setWomenProduct]=useState([]);
  let [err,setErr]=useState(false);
  let [loding,setLoading]=useState(false);
  let [womenSlider,setWomenSlider]=useState([]);
  async function fetching(){
    try {
      setLoading(true)
    let res=await axios({
      method:"get",
      url:"https://khols-website-server.onrender.com/WomenAllProduct",
    })
    if(res.status===200){
      setWomenProduct(res?.data)
      console.log(res.data)
      setLoading(false)
    }
    } catch (error) {
      setErr(true)
      setLoading(false)
    }
    
  }

  

 
  useEffect(()=>{
    fetching()
  },[])

  if(loding){
     return <LoadingIndicater/>
  }

  if(err){
    return <ErrorIndicater/>

  }
  return (
    <>
    <Navbar/>
   
      <Flex direction="row" justifyContent={'space-around'}>
        
        <Flex w={'20%'}   ml={5} display={['none', 'none', 'flex']}>
        
          <Accordion defaultIndex={[0]} allowMultiple>
          <Heading as='h5' fontSize={'2rem'}>Women's Clothing </Heading>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Bottoms ({4249})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Dresses ({5155})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Outerwear ({3439})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Sleepwear ({3179})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Socks & Hosiery ({1380})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Swimsuits ({1933})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Tops ({65})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Underwear ({55})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Clothing Sets ({15})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">One-Piece ({100})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    Size Range
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Regular({80957})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Plus({22795})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Petite({704})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Maternity({1058})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Big & Tall ({107})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    SIZE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">XXS({60})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">XS({188})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">S ({453})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">M({194})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">L({63})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">XL ({453})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">2XL({194})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">3XL({63})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    PRICE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Rs. 1500 - Rs. 1999({904})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Rs. 2000 - Rs. 2499({3})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Rs. 3000 - Rs. 3499({51})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    GENDER
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Unisex({836})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Women({117})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Kids({4})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Men({1})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    BRAND
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Croft & Barrow({650})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Sonoma Goods For Life({301})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Andrew Marc({4})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Eddie Bauer({1})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">SO({650})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Levi's({301})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Tek Gear({4})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Nine West({1})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    MATERIALS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Light({650})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Average({301})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Kids({4})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Men({1})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Light({650})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Average({301})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    Promotions
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Clearance({1650})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Sale({44301})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    Coupon Eligible
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Eligible({6350})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                    Customer Rating
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">5</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">4</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">3</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">2</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">1</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
          <Box>
            <h2 style={{textAlign:'center',fontSize:'25px',marginTop:'45px'}}> Shop by size</h2>
           <Flex wrap={'Flex-wrap'} justify={'space-evenly'} mt={2} mb={4} display={['none', 'none', 'none','flex']} >
       
             <HoverBorderEffect  bg="#d4c4a0"  text="$Women"  colorborder="black" to="/women" />
             <HoverBorderEffect  bg="#d4c4a0"  text="Women Pus"  colorborder="black" to="/women" />
             <HoverBorderEffect  bg="#d4c4a0"  text="Petites"  colorborder="black" to="/women" />
             <HoverBorderEffect  bg="#d4c4a0"  text="Maternity"  colorborder="black" to="/women" />
             <HoverBorderEffect  bg="#d4c4a0"  text="juniors"  colorborder="black" to="/women" />
             <HoverBorderEffect  bg="#d4c4a0"  text="junior's Plus"  colorborder="black" to="/women" />
             </Flex>
             <Heading as='h2' size='2xl' textAlign={'center'} mb={8}>
             Staple pieces at perfect prices.
              </Heading>
              <Flex gap={4} mb={6}>

                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-tops' h={'400px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Tops & Tee</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-shorts'  h={'400px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Shorts, Capris and Skirts</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-dresses'  h={'400px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Dresses</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-swim'  h={'400px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Swimwear</b></Text>
                </Box>
              </Flex>


              <Flex gap={4} mb={6}>

                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-shirts' h={'200px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Shirts & Blouses</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-jeans'  h={'200px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Jeans & Pants</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-active'  h={'200px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Activewear</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-intimates'  h={'200px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Intimates</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-pajamas'  h={'200px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>Pajamas & Robes</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/2024-127809-new-arrival'  h={'200px'}></Image>
                 <Text textDecoration={'underline'} textAlign={'center'}><b>New Arrivals</b></Text>
                </Box>
              </Flex>
              <Heading as='h2' size='md' mb={3}>Shop Women's</Heading>
              <Flex gap={4} mb={6} justify={'space-around'}>

                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/240502-128152-VisNav-summerShop?wid=125&hei=125&op_sharpen=1' h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Summer Shop</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/6702929_ALT2?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text   _hover={{ textDecoration: 'underline' }}  textAlign={'center'}><b>Trending: Eyelet</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/6649084_Yellow_Tulare_Stripe?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Trending: Linen
                 </b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/6789604_Blue_Cream_Stripe?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Matching Sets
                 </b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/6794086_ALT65?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Dress Lookbook</b></Text>
                </Box>
              </Flex>
            <Flex justify={'space-between'} mr={7}>
              <HStack spacing={4}>
      {/* Transparent background tag */}
      <Tag
        size="md"
        borderRadius="full"
        bg="transparent"
        border="1px solid"
        p={2}
        
      >
        <TagLabel>Women's</TagLabel>
        <TagCloseButton />
      </Tag>

      {/* Outlined tag */}
      <Tag
        size="md"
        borderRadius="full"
        variant="outline"
        p={2}
      >
        <TagLabel>shopping</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
        <Select placeholder='Sort by Features' w={'300px'}>
        <option value='desc'>Price : High to Low</option>
        <option value='asc'>Price : Low to High</option>
        <option value='bestseller'>Best Seller</option>
      </Select>
      </Flex>
             
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={7} mt={10}>
              {womenproduct.map((each) => {
                return (
                  <CardBox {...each} key={each.id} />
                )
              })}
            </SimpleGrid>
           


          </Box>
          
        
      </Flex>
      <Footer/>
      </>
    
  )
}
