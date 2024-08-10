
import CardBox from '../components/Card';
import HoverBorderEffect from '../components/HoverBorderEffect';
import Navbar from '../components/Navbar.jsx/Navbar'
import Footer from '../components/Footer';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect,useState} from 'react';
import LoadingIndicater from '../components/LoginIndicater';
import ErrorIndicater from '../components/ErrorIndicater';
import star from '../assets/star-solid.svg'


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

export default function MenProduct() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  let [menproduct,setMenProduct]=useState([]);
  let [err,setErr]=useState(false);
  let [loding,setLoading]=useState(false);
 
  
  async function fetching(){
    try {
      setLoading(true)
    let res=await axios({
      method:"get",
      url:"https://khols-website-server.onrender.com/MenAllProduct",
    })
    if(res.status===200){
        setMenProduct(res?.data)
      
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
        
        <Flex w={'20%'}   ml={5} display={['none', 'none', 'flex']} position={'sticky'} top={0} >
        
          <Accordion defaultIndex={[0]} allowMultiple>
          <Heading as='h5' fontSize={'2rem'}>Men's Clothing </Heading>
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
            
             
             
               
              <Heading as='h2' size='md' mb={3}>Men's Clothing</Heading>
              <Flex gap={4} mb={6} justify={'space-around'}>

                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls//3910467_Dark_Sky?wid=125&hei=125&op_sharpen=1' h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Tops</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/5702969_Gray?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text   _hover={{ textDecoration: 'underline' }}  textAlign={'center'}><b>Bottomst</b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/5262221_Silver_Spring?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Activewear
                 </b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/5162510_Blue_Block?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Swimsuits
                 </b></Text>
                </Box>
                <Box>
                 <Image src='https://media.kohlsimg.com/is/image/kohls/3974513_Green_Sketchy_Geo?wid=125&hei=125&op_sharpen=1'  h={'130px'}></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Big &Tall</b></Text>
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
        <TagLabel>Men's</TagLabel>
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
      <Tag
        size="md"
        borderRadius="full"
        variant="outline"
        p={2}
      >
        <TagLabel>Eligible</TagLabel>
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
              {menproduct.map((each) => {
                return (
                  <CardBox {...each} key={each.id} />
                )
              })}
            </SimpleGrid>
           


          </Box>
          
        
      </Flex>
      <Container maxW={'80%'} mt={35}>
        <Heading textAlign={'center'} as='h2' size="xl" mb={6}>Best Sellers</Heading>

        {/* Box to handle responsive display */}
        <Box display={{ base: 'none', md: 'block' }}> {/* Hide on small screens */}
          <Slider {...settings} width={'80%'} bg={'green'}>
            {menSlider.map((eachProductCard) => (
              <Box w={'250px'} key={eachProductCard.id}>
                <Image src={eachProductCard.photo} alt={eachProductCard.description} />
                <Flex color={"#C13CE6"}>
                  <h3 style={{ marginRight: "5px", fontWeight: 900 }}>{eachProductCard.price}</h3>
                  <span>with code SAVINGS15</span>
                </Flex>
                <p style={{ textDecoration: "line-through", fontSize: 10 }}>{eachProductCard.PrevPrice}</p>
                <p>{eachProductCard.description}</p>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
      <Footer/>
      </>
    
  )
}
