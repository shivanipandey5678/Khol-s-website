import HoverBorderEffect2 from './HoverBorderEffect'
import { SimpleGrid,Container } from '@chakra-ui/react'
const cardSize = {
    base: 'full',  // Full width for the smallest screens
    sm: 'full',    // Full width for small screens
    md: '45%',     // 45% width for medium screens
    lg: '22%'      // 22% width for large screens
  };
export default function HoverBordergrid2(){
  
    return(
        <Container maxW={'95%'} mt={25}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4,xl:6 }}    spacing={2}         w="100%" >
         <HoverBorderEffect2  bg="#A1C5EC"  text="$15 & Under"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="$25 & Under"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="Clothing & Shoes"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="Home Gift"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="Active & Outdoor Gifts"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="Grooming & Cologne"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="Electonic Gifts"  colorborder="black" to="/" />
         <HoverBorderEffect2  bg="#A1C5EC"  text="Gift Card"  colorborder="black" to="/" />
        
        </SimpleGrid>
        </Container>
    )
}