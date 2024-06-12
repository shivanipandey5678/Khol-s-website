
// export default function ShoesProduct(){
//     return(
//        <>
//        <h1>ShoesProduct</h1>
//        </>
//     )

// }

import CardBox from '../components/Card';
import baby from '../assets/baby.png'
import bigKidsImage from '../assets/big-kids.png';
import littlekids from '../assets/little-kids.png';
import toddlers from '../assets/toddlers.png';
import Navbar from '../components/Navbar.jsx/Navbar'
import Footer from '../components/Footer';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

export default function Under20Product() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  let [kidsproduct,setKidsProduct]=useState([]);
  let [err,setErr]=useState(false);
  let [loding,setLoading]=useState(false);
  let [menSlider,setMenSlider]=useState([]);
  
  async function fetching(){
    try {
      setLoading(true)
    let res=await axios({
      method:"get",
      url:"https://khols-website-server.onrender.com/ShoesProduct",
    })
    if(res.status===200){
        setKidsProduct(res?.data)
      
      setLoading(false)
    }
    } catch (error) {
      setErr(true)
      setLoading(false)
    }
    
  }


  async function fetchingslider(){
    try {
      setLoading(true)
    let res=await axios({
      method:"get",
      url:"https://khols-website-server.onrender.com/ProductCardetails",
    })
    if(res.status===200){
        setMenSlider(res?.data)
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
    fetchingslider()
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
        
        <Flex w={'20%'}   ml={5} display={['none', 'none', 'flex']}  >
        
          <Accordion defaultIndex={[0]} allowMultiple>
          <Heading as='h5' fontSize={'2rem'}>For the Home </Heading>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                  Department
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Bath ({3397})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Bedding ({5155})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Electronics ({339})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Furniture ({317})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Home Decor ({138})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Home Improvement ({133})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Kitchen & Dining  ({65})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Luggage & Suitcases  ({55})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Pet Supplies Sets ({76615})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Storage & Cleaning ({100})</Checkbox>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                  BrandBrand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">A&B Home({80957})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Achim({22795})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Addison({704})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">AllerEase({1058})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Alora Deco ({107})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Amanti Art({80957})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">American Art Decor({22795})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Americanfla({704})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Anolon({1058})</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Archaeo ({107})</Checkbox>
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
                  GenderGender
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Girls (10,354)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Boys (34,533)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Neutral (330)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Gender Neutral (211)</Checkbox>
                  
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                  Child Age Range
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Baby (627)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Big Kids (43,964)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Little Kids (1,557)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Toddlers (839)</Checkbox>
                 
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
           
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' fontSize='12px'>
                  Age Range
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize='12px'>
                <SimpleGrid>
                  <Checkbox colorScheme="green" fontSize="12px">Kids (44,632)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Adult (91,794)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Baby (166)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Pet (3)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Teens (59,308)</Checkbox>
                  <Checkbox colorScheme="green" fontSize="12px">Tween (1,928)</Checkbox>
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
            
             
             
               
              <Heading as='h2' size='xl' mb={3} textAlign={'center'}>Shop Kids' + Baby</Heading>
              <Flex gap={4} mb={12}mt={8} justify={'space-around'} >

                <Box>
                 <Image src={baby} h={'130px'}  ></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Baby 0M-24M</b></Text>
                </Box>
                <Box>
                 <Image src={littlekids}  h={'130px'} ></Image>
                 <Text   _hover={{ textDecoration: 'underline' }}  textAlign={'center'}><b>Kids' 4-7</b></Text>
                </Box>
                <Box>
                 <Image src={bigKidsImage}  h={'130px'}  ></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Kids' 7-20
                 </b></Text>
                </Box>
                <Box>
                 <Image src={toddlers}  h={'130px'}  ></Image>
                 <Text _hover={{textDecoration:'underline'}} textAlign={'center'}><b>Kids' 12M-5T
                 </b></Text>
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
        <TagLabel>Clothing</TagLabel>
        <TagCloseButton />
      </Tag>

      {/* Outlined tag */}
      <Tag
        size="md"
        borderRadius="full"
        variant="outline"
        p={2}
      >
        <TagLabel>Kids</TagLabel>
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
              {kidsproduct.map((each) => {
                return (
                  <CardBox {...each} key={each.id} />
                )
              })}
            </SimpleGrid>
           


          </Box>
          
        
      </Flex>
      <Container maxW={'80%'} mt={35}>
        <Heading textAlign={'center'} as='h2' size="xl" mb={6}>Best Sellers</Heading>
      <Slider {...settings} width={'80%'} bg={'green'}>
       {menSlider.map((eachProductCard)=>{
        return (
            <>

        <Box w={'250px'} key={eachProductCard.id}>
                    <Image src={eachProductCard.photo}></Image>
                    <Flex color={"#C13CE6"} >
                            <h3 style={{marginRight:"5px",fontWeight:900}} >{eachProductCard.price}</h3 >
                            <span>with code SAVINGS15</span>
                    </Flex>
                    
            <p style={{textDecoration:"line-through",fontSize:10}}>{eachProductCard.PrevPrice}</p>
            <p>{eachProductCard.description}</p>
           
        </Box>
            
            </>
        )
       })}
        </Slider>
        </Container>
      <Footer/>
      </>
    
  )
}

