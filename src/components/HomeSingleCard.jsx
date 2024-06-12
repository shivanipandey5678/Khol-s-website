// import { Box ,Image,Text,Heading,VStack,} from '@chakra-ui/react'
// const ProductCardetails = [
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/5791655_Mineral_Black?wid=800&hei=800&op_sharpen=1",
//         price: "$13.99",
//         PrevPrice: "$17.99",
//         description: "Men's FLX Luxury Soft Wander Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/2247719_Fog_Heather?wid=800&hei=800&op_sharpen=1",
//         price: "$9.99",
//         PrevPrice: "$11.99",
//         description: "Men's Apt. 9® Premier Flex Crewneck Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/3932653_Blue_White?wid=800&hei=800&op_sharpen=1",
//         price: "$11.99",
//         PrevPrice: "$14.99",
//         description: "Men's Tek Gear® Dry Tek Shorts 9\""
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/5692676_Mickey_Shapes?wid=800&hei=800&op_sharpen=1",
//         price: "$26.99 - $47.99",
//         PrevPrice: "$44.99 - $79.99",
//         description: "Disney's Flannel Sheet Set by The Big One®"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/6535210_Wine_Tastng?wid=800&hei=800&op_sharpen=1",
//         price: "$11.99",
//         PrevPrice: null,
//         description: "Men's FLX Short Sleeve Stretch Crewneck Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/5992464_Encanto?wid=800&hei=800&op_sharpen=1",
//         price: "$8.99 - $24.99",
//         PrevPrice: null,
//         description: "Disney's Sheet Set or Pillowcases by The Big One®"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/3910467_Dark_Sky?wid=800&hei=800&op_sharpen=1",
//         price: "$9.99",
//         PrevPrice: null,
//         description: "Men's Sonoma Goods For Life® Supersoft Crewneck Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/2245601_Black?wid=800&hei=800&op_sharpen=1",
//         price: "$9.99",
//         PrevPrice: "$11.99",
//         description: "Men's Apt. 9® Premier Flex V-Neck Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/6534274_Dark_Slate_Heather?wid=800&hei=800&op_sharpen=1",
//         price: "$11.99",
//         PrevPrice: null,
//         description: "Men's FLX Short Sleeve Stretch V-Neck Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/6559650?wid=800&hei=800&op_sharpen=1",
//         price: "$35.99",
//         PrevPrice: "$39.99",
//         description: "Disney's Minnie Mouse Rainbow Stripes Sheet Set"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/3216223_Charleston_Plaid?wid=800&hei=800&op_sharpen=1",
//         price: "$19.99 - $89.99",
//         PrevPrice: null,
//         description: "Tribeca Living Printed Flannel Extra Deep Pocket Sheet Set"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/6635284_Navy?wid=800&hei=800&op_sharpen=1",
//         price: "$19.99",
//         PrevPrice: "$24.99",
//         description: "Men's FLX Luxury Soft Wander Polo"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/4674930_Rainbows?wid=800&hei=800&op_sharpen=1",
//         price: "$11.99 - $44.99",
//         PrevPrice: null,
//         description: "The Big One Kids™ 275 Thread Count Sheet Set or Pillowcases"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/4671350_Mineral_Black?wid=800&hei=800&op_sharpen=1",
//         price: "$11.99",
//         PrevPrice: "$14.99",
//         description: "Men's Tek Gear® Essential Gear Tee"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/6692500_Unicorns?wid=800&hei=800&op_sharpen=1",
//         price: "$14.99 - $19.99",
//         PrevPrice: null,
//         description: "The Big One Kids Extra Soft Sheet Set"
//     },
//     {
//         photo: "https://media.kohlsimg.com/is/image/kohls/2333641_Modern_White?wid=800&hei=800&op_sharpen=1",
//         price: "$9.99",
//         PrevPrice: "$11.99",
//         description: "Big & Tall Apt. 9® Core Solid Crewneck Tee"
//     }
// ];

//   const ProductCard = () => {
//     return(
//         <>
//         {
//          ProductCardetails.map((  ProductCardeach)=>{
//             return (
//                 <>
//                 <Box boxShadow="md" w="200px" h="300px" p="4" borderRadius="md" overflow="hidden">
//                 <Image src={ProductCardeach.photo || 'placeholder.jpg'} w="100%" h="150px" objectFit="cover" />
//                 <VStack align="start" spacing="2" mt="4">
//                     <Heading as="h4" size="md">{ProductCardeach.price}</Heading>
//                     {ProductCardeach.PrevPrice && (
//                         <Text as="s" color="gray.500">{ProductCardeach.PrevPrice}</Text>
//                     )}
//                     <Text>{ProductCardeach.description}</Text>
//                 </VStack>
//                </Box>
                
//                 </>
//             )
//         })


//         }
        
        
        
//         </>
//     )
// }
    
//     // return (
//     //     <Box boxShadow="md" w="200px" h="300px" p="4" borderRadius="md" overflow="hidden">
//     //         <Image src={photo || 'placeholder.jpg'} w="100%" h="150px" objectFit="cover" />
//     //         <VStack align="start" spacing="2" mt="4">
//     //             <Heading as="h4" size="md">{price}</Heading>
//     //             {PrevPrice && (
//     //                 <Text as="s" color="gray.500">{PrevPrice}</Text>
//     //             )}
//     //             <Text>{description}</Text>
//     //         </VStack>
//     //     </Box>
//     // );
// };

// export default ProductCard;








// export default function Home() {
//     return (
//         <>
//             <Container maxW="95%" mt={25}>
//                 <Navbar />
//                 <SliderOfCards />
//                 <HoverBordergrid />

//                 <Heading as='h2' size='2xl' textAlign={'center'} mt={5}>
//                     Shivani, here are more great finds you'll love.
//                 </Heading>

//                 <ProductCard ProductCardetails={ProductCardetails} />

//                 <HoverBordergrid2 />
//             </Container>
//         </>
//     );
// }



// import React from 'react';
// import { Heading, Container } from '@chakra-ui/react';
// import Navbar from '../components/Navbar.jsx/Navbar';
// import SliderOfCards from "../components/SliderOfCards";
// import HoverBordergrid from '../components/HoverBordergrid';
// import HoverBordergrid2 from '../components/HoverBordergrid2';
// import ProductCard from '../components/ProductCard'; // Ensure the correct path

const ProductCardetails = [
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/5791655_Mineral_Black?wid=800&hei=800&op_sharpen=1",
        price: "$13.99",
        PrevPrice: "$17.99",
        description: "Men's FLX Luxury Soft Wander Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/2247719_Fog_Heather?wid=800&hei=800&op_sharpen=1",
        price: "$9.99",
        PrevPrice: "$11.99",
        description: "Men's Apt. 9® Premier Flex Crewneck Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/3932653_Blue_White?wid=800&hei=800&op_sharpen=1",
        price: "$11.99",
        PrevPrice: "$14.99",
        description: "Men's Tek Gear® Dry Tek Shorts 9\""
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/5692676_Mickey_Shapes?wid=800&hei=800&op_sharpen=1",
        price: "$26.99 - $47.99",
        PrevPrice: "$44.99 - $79.99",
        description: "Disney's Flannel Sheet Set by The Big One®"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/6535210_Wine_Tastng?wid=800&hei=800&op_sharpen=1",
        price: "$11.99",
        PrevPrice: null,
        description: "Men's FLX Short Sleeve Stretch Crewneck Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/5992464_Encanto?wid=800&hei=800&op_sharpen=1",
        price: "$8.99 - $24.99",
        PrevPrice: null,
        description: "Disney's Sheet Set or Pillowcases by The Big One®"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/3910467_Dark_Sky?wid=800&hei=800&op_sharpen=1",
        price: "$9.99",
        PrevPrice: null,
        description: "Men's Sonoma Goods For Life® Supersoft Crewneck Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/2245601_Black?wid=800&hei=800&op_sharpen=1",
        price: "$9.99",
        PrevPrice: "$11.99",
        description: "Men's Apt. 9® Premier Flex V-Neck Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/6534274_Dark_Slate_Heather?wid=800&hei=800&op_sharpen=1",
        price: "$11.99",
        PrevPrice: null,
        description: "Men's FLX Short Sleeve Stretch V-Neck Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/6559650?wid=800&hei=800&op_sharpen=1",
        price: "$35.99",
        PrevPrice: "$39.99",
        description: "Disney's Minnie Mouse Rainbow Stripes Sheet Set"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/3216223_Charleston_Plaid?wid=800&hei=800&op_sharpen=1",
        price: "$19.99 - $89.99",
        PrevPrice: null,
        description: "Tribeca Living Printed Flannel Extra Deep Pocket Sheet Set"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/6635284_Navy?wid=800&hei=800&op_sharpen=1",
        price: "$19.99",
        PrevPrice: "$24.99",
        description: "Men's FLX Luxury Soft Wander Polo"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/4674930_Rainbows?wid=800&hei=800&op_sharpen=1",
        price: "$11.99 - $44.99",
        PrevPrice: null,
        description: "The Big One Kids™ 275 Thread Count Sheet Set or Pillowcases"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/4671350_Mineral_Black?wid=800&hei=800&op_sharpen=1",
        price: "$11.99",
        PrevPrice: "$14.99",
        description: "Men's Tek Gear® Essential Gear Tee"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/6692500_Unicorns?wid=800&hei=800&op_sharpen=1",
        price: "$14.99 - $19.99",
        PrevPrice: null,
        description: "The Big One Kids Extra Soft Sheet Set"
    },
    {
        photo: "https://media.kohlsimg.com/is/image/kohls/2333641_Modern_White?wid=800&hei=800&op_sharpen=1",
        price: "$9.99",
        PrevPrice: "$11.99",
        description: "Big & Tall Apt. 9® Core Solid Crewneck Tee"
    }
];
