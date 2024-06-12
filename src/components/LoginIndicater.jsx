// import { Spinner } from '@chakra-ui/react'

// export default function LoadingIndicater(){
//    return(
//     <>
//       <Spinner
//         thickness='4px'
//         speed='0.65s'
//         emptyColor='gray.200'
//         color='blue.500'
//         size='xl'
//         />
    
//     </>
//    )
// }

import { Spinner, Box } from '@chakra-ui/react';

export default function LoadingIndicator() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh" 
      width="100vw" 
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}
