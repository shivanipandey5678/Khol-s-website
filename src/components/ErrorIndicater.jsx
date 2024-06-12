import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

export default  function ErrorIndicater(){
   return(
    <>
        <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Some hing went wrong</AlertTitle>
        <AlertDescription>alert!!!</AlertDescription>
        </Alert>
    </>
   )
    
}