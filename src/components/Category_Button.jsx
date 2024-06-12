import { Box ,NavLink} from "@chakra-ui/react"
export default function Category_Button({text,destination}){
    return(
       <NavLink to="destination">
           <Box>{text}</Box>
       </NavLink> 

    )
}