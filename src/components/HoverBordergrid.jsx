import HoverBorderEffect from '../components/HoverBorderEffect';
import { SimpleGrid,Container , Box, Text} from '@chakra-ui/react'

const cardSize = {
    base: 'full',  
    sm: 'full',    
    md: '45%',    
    lg: '22%'      
  };
  
  export default function HoverBordergrid() {
    return (
      <Container maxW="95%" mt={25}>
        <SimpleGrid
          columns={{ base:1,sm: 2, md: 4, lg: 5,xl:6 }}  // Number of columns based on viewport size
          spacing={2}  // Space between grid items
          w="100%"     // Ensure the grid takes full width
        >
          <Box w={cardSize} p={2}>
            <HoverBorderEffect bg="#d4c4a0" text="$10 & Under" colorborder="black" to="/under10" />
          </Box>
          <Box w={cardSize} p={2}>
            <HoverBorderEffect bg="#d4c4a0" text="$20 & Under" colorborder="black" to="/under20" />
          </Box>
          <Box w={cardSize} p={2}>
            <HoverBorderEffect bg="#d4c4a0" text="Home" colorborder="black" to="/homeshopping" />
          </Box>
          <Box w={cardSize} p={2}>
            <HoverBorderEffect bg="#d4c4a0" text="Women" colorborder="black" to="/women" />
          </Box>
          <Box w={cardSize} p={2}>
            <HoverBorderEffect bg="#d4c4a0" text="Kids" colorborder="black" to="/kids" />
          </Box>
          <Box w={cardSize} p={2}>
            <HoverBorderEffect bg="#d4c4a0" text="Shoes" colorborder="black" to="/shoes" />
          </Box>
        </SimpleGrid>
      </Container>
    );
  }