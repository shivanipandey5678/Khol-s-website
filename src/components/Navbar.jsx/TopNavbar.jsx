import { Flex } from "@chakra-ui/react";
import './TopNavbar.css'
import { Divider } from '@chakra-ui/react'
export  function TopNavbar(){
    return(
        <>
        <Flex 
        justifyContent="center"
        position={'relative'}
            flexDirection="row"
           id="TopNavbar"
            gap={10}
            bg="gray.100"
            width="100%"
         borderBottom="2px solid #D3D3D3"
            >
            <p id="firstpanel" ><strong> Free shipping </strong> with <strong> $49 </strong> purchase. <a>Details</a></p>
            <p id="secondpara"><strong> Fast & free </strong> store pickup! <a> Details </a></p>
            <p id="thirdpara">Take $10 off $25 in store & online with code <strong> code TAKE10. </strong><a> Details </a></p>
        </Flex>
        <Divider orientation='horizontal' />
        </>
    )
}
