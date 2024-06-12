
import Navbar from '../components/Navbar.jsx/Navbar';
import SliderOfCards from "../components/SliderOfCards";
import HoverBordergrid from '../components/HoverBordergrid';
import HoverBordergrid2 from '../components/HoverBordergrid2';
import { Heading,Container, Image } from '@chakra-ui/react';
import Img from '../assets/Img.png'
import Img2 from '../assets/Img2.png'
import Img3 from '../assets/Img3.png'
import Img4 from '../assets/Img4.png'
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
    <Container  maxW={'95%'} mt={25}>
      <Navbar/>
      <SliderOfCards />
      <HoverBordergrid/>
      <Image src={Img} mt={8} mb={8}></Image >
      <Heading as='h2' size='2xl' textAlign={'center'}>
         Shivani,here are more great finds you'll love.
      </Heading>
      <HoverBordergrid2/>
      <Image src={Img2}></Image>
      <Image src={Img3}></Image>
      <Image src={Img4}></Image>
      
      </Container>
      <Footer/>
    </>
  );
}
