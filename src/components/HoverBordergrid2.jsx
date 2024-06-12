import HoverBorderEffect2 from './HoverBorderEffect'
import { SimpleGrid,Container } from '@chakra-ui/react'

export default function HoverBordergrid2(){

    return(
        <Container maxW={'95%'} mt={25}>
        <SimpleGrid minChildWidth="140px">
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