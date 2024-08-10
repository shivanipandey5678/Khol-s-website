import HoverBorderEffect from '../components/HoverBorderEffect';
import { SimpleGrid,Container } from '@chakra-ui/react'

export default function HoverBordergrid(){

    return(
        <Container maxW={'95%'} mt={25}>
        <SimpleGrid minChildWidth="140px">
         <HoverBorderEffect  bg="#d4c4a0"  text="$10 & Under"  colorborder="black" to="/under10" />
         <HoverBorderEffect  bg="#d4c4a0"  text="$20 & Under"  colorborder="black" to="/under20" />
        
        
         <HoverBorderEffect  bg="#d4c4a0"  text="Home"  colorborder="black" to="/homeshopping" />
         <HoverBorderEffect  bg="#d4c4a0"  text="Women"  colorborder="black" to="/women" />
         <HoverBorderEffect  bg="#d4c4a0"  text="Kids"  colorborder="black" to="/kids" />
         <HoverBorderEffect  bg="#d4c4a0"  text="Shoes"  colorborder="black" to="/shoes" />
        
        </SimpleGrid>
        </Container>
    )
}