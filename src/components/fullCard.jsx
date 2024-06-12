

import star from '../assets/star-solid.svg'
import Navbar from "./Navbar.jsx/Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../components/LoginIndicater'
import ErrorIndicator from '../components/ErrorIndicater'
import { AuthContext } from '../context/AuthContext';
// import EmptyCard from "./EmptyCard";
import EmptyCard from '../components/EmptyCard'
import { useEffect, useState ,useContext} from 'react';
import { Box, Text ,Image,Button,Flex} from '@chakra-ui/react';

export default function FullCard() {
    let navigate=useNavigate();
    const [cartProduct, setCartProduct] = useState([]);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const { calculatePrice, totalPrice, setTotalPrice } = useContext(AuthContext);

    async function fetchingCart() {
        try {
            setLoading(true);
            const res = await axios.get("https://khols-website-server.onrender.com/Card");
            if (res.status === 200 && res.data.length > 0) {
                
                
                setCartProduct(res.data);
                console.log(res.data);
            } else {
                console.log('No products found');
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setErr(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchingCart();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (err) {
        return <ErrorIndicator />;
    }

    if (cartProduct.length === 0) {
        return <EmptyCard />;
    }
    async function DelItem(idx) {
        try {
            const res = await axios.delete(`https://khols-website-server.onrender.com/Card/${idx}`);
            if (res.status === 200) {
                alert("Product deleted");
                setCartProduct(cartProduct.filter(product => product.id !== idx));
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    return (
        <>
            <Navbar/>
            {cartProduct.map((each, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                    <Text>{each.price}</Text>
                    <Image src={each.img}></Image>
            <Flex color={"#C13CE6"} >
                    <h3 style={{marginRight:"5px",fontWeight:900}} >{each.price}</h3 >
                    <span>with code SAVINGS15</span>
            </Flex>
            
            <p style={{textDecoration:"line-through",fontSize:10}}>{each.previousPrice}</p>
            <p>{each.smalldescription}</p>
            <Flex alignItems={'center'} justify={'space-between'} p={2}>
                <Flex alignItems={'center'} >
                <Image src={star} h={4}></Image>
                <p>({each.sellnumber})</p>
                <Button onClick={()=>{DelItem(each.id)}}>DELETE</Button>
                </Flex>
               
                
            </Flex>
                </Box>
            ))}
            
            <Footer/>
        </>
    );
}

export function CardPage() {
    return (
        <>
         
            <FullCard />
            
        </>
        
    );
}
