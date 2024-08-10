import SliderCardInfo from './SliderCardInfo';
import doller from '../assets/doller.png';
import bag from '../assets/bag.png';
import payment from '../assets/payment.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png'
import { color } from 'framer-motion';
import cash from '../assets/cash.png';
import {Flex} from '@chakra-ui/react'


const sliderVariable = [
    {
      img: doller,
      title: "You earn 5% rewards",
      description: "for every $50 spent through June 16. Not valid on Sephora at Kohl's details",
      LinkNav: "Learn More",
      color: "green",
    },
    {
      img: bag,
      title: "Have a Kohl's return?",
      description: "It's quick & hassle free!",
      LinkNav: "Learn More",
      color: "brown",
    },
    {
      img: mail,
      title: "Have a Kohl's return?",
      description: "when you sign up for Kohl's email alerts. Sign Up Now",
      LinkNav: "Sign Up Now",
      color: "brown",
    },
  ];
  
  export default function SliderOfCards() {
    return (
      <Flex 
        gap={{ base: 2, md: 4 }} 
        mr={{ base: 2, md: 10 }} 
        ml={{ base: 2, md: 10 }} 
        flexDirection={{ base: 'column', md: 'row' }}
        overflowX="auto"
        p={4}
      >
        {sliderVariable.map((e, i) => (
          <SliderCardInfo {...e} key={i} />
        ))}
      </Flex>
    );
  }