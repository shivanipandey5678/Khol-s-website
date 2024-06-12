import {Box,Image,Flex, Button} from '@chakra-ui/react';
import star from '../assets/star-solid.svg'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardBox({img,price,previousPrice,smalldescription,sellnumber,id}){
    let navigate =useNavigate();
    function detailsShow(){
        navigate(`/AllProduct/${id}`)
    }
    return(
        <>
        <Box w={'250px'} key={id}>
            <Image src={img}></Image>
            <Flex color={"#C13CE6"} >
                    <h3 style={{marginRight:"5px",fontWeight:900}} >{price}</h3 >
                    <span>with code SAVINGS15</span>
            </Flex>
            
            <p style={{textDecoration:"line-through",fontSize:10}}>{previousPrice}</p>
            <p>{smalldescription}</p>
            <Flex alignItems={'center'} justify={'space-between'} p={2}>
                <Flex alignItems={'center'} >
                <Image src={star} h={4}></Image>
                <p>({sellnumber})</p>
                </Flex>
                <Button colorScheme='black' variant='outline' onClick={detailsShow}>View Details</Button>
            </Flex>
        </Box>
         
        
        </>
    )
}