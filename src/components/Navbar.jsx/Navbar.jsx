import { TopNavbar } from "./TopNavbar";
import { MiddleNavBar } from "./MiddleNavbar";
import { BottomNavBar } from "./BottomNavBar";

export default function Navbar(){
    return(
        <>
        <TopNavbar/>
       
       < MiddleNavBar/>
       <hr />
       <BottomNavBar/>
       <hr />
        
        </>
    )
}