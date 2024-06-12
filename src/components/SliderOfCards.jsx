import SliderCardInfo from './SliderCardInfo';
import doller from '../assets/doller.png';
import bag from '../assets/bag.png';
import payment from '../assets/payment.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png'
import { color } from 'framer-motion';
import cash from '../assets/cash.png';
import {Flex} from '@chakra-ui/react'


const sliderVariable=[
    
    {
        img:doller,
        title:"You earn 5% rewards",
        description:"for every $50 spent through June 16.Not valid on Sephora at Kohl's details",
        LinkNav:"Learn More",
        color:"green",
    },
    {
        img:bag,
        title:"Have a Kohl's return?",
        description:"It's quick & hassle free!",
        LinkNav:"Learn More",
        color:"brown",
    },
    {
        img:mail,
        title:"Have a Kohl's return?",
        description:"when you sign up for Kohl's email alerts. Sign Up Now",
        LinkNav:"Sign Up Now",
        color:"brown",
    },


]

export default function SliderOfCards(){
    return(
        <Flex gap={4} mr={10} ml={10}>
       {sliderVariable.map((e,i)=>{
        return <SliderCardInfo {...e} key={i}/>
       })}
       </Flex>
    )
   
}
















// import SliderCardInfo from './SliderCardInfo';
// import doller from '../assets/doller.png';
// import bag from '../assets/bag.png';
// import payment from '../assets/payment.png';
// import phone from '../assets/phone.png';
// import mail from '../assets/mail.png';

// const sliderVariable = [
//   {
//     img: phone,
//     title: "Save an extra 15%!",
//     description: "Text SHOP15 to 56458 to get started",
//     LinkNav: "Learn More",
//     color: "red",
//   },
//   {
//     img: payment,
//     title: "Earn $10 Kohl's Cash",
//     description: "for every $50 spent through June 16. Not valid on Sephora at Kohl's details",
//     LinkNav: "Learn More",
//     color: "LightGreen",
//   },
//   {
//     img: doller,
//     title: "You earn 5% rewards",
//     description: "for every $50 spent through June 16. Not valid on Sephora at Kohl's details",
//     LinkNav: "Learn More",
//     color: "green",
//   },
//   {
//     img: bag,
//     title: "Have a Kohl's return?",
//     description: "It's quick & hassle free!",
//     LinkNav: "Learn More",
//     color: "brown",
//   },
//   {
//     img: mail,
//     title: "Have a Kohl's return?",
//     description: "when you sign up for Kohl's email alerts. Sign Up Now",
//     LinkNav: "Sign Up Now",
//     color: "brown",
//   },
// ];

// export default function SliderOfCards() {
//   return (
//     <>
//       {sliderVariable.map((eachSlider, i) => (
//         <SliderCardInfo {...eachSlider} key={i} />
//       ))}
//     </>
//   );
// }
