import { createContext ,useState,useEffect} from "react"; 
export const  AuthContext=createContext();
import { useToast } from '@chakra-ui/react'
export default function AuthContextProvider({children}){
     const toast = useToast()
     const [auth,setAuth]= useState(false);
     const [signin, setSign1] = useState(false);
     const [email, setEmail1] = useState("");
     const [firstName,setFirstName] = useState("");
     const [lastName,setLastName] = useState("");
     const [birth,setBirth] = useState("");
     const [phone,setPhone] = useState("");
     const [count,setCount]=useState(0)
     const [totalPrice,setTotalPrice]=useState(0)
     const [password,setPassword1]=useState("");
     const [data,setData]=useState([]);
     function setSign() {
          setSign1((prev) => !prev);
        }
   
     function setInfoSignUp(Fname,pass,Lname,email,ph,birth){
         
          setFirstName(Fname)
          setLastName(Lname)
          setPhone(ph)
          setBirth(birth)
          let obj={
             firstname:Fname,
             lastname:Lname,
             passowrd:pass,
             email:email,
             phoneno:ph,
             birth:birth,
          }
          setData([...data,obj])
         
          localStorage.setItem("userData",JSON.stringify(obj))
         

     }

    
     function counter(){
          setCount((prev)=>prev+1)
       }
       function calculatePrice(price){
         setTotalPrice((prev)=>prev+Number(price))
       }
     
     return <AuthContext.Provider value={{
          password,setPassword1,
          signin,
          email,
          count,
          totalPrice,
          setSign,calculatePrice
          ,setEmail1,setCount,
         counter,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          birth,
          setBirth,
          phone,
          setPhone,
          setInfoSignUp
     }}>{children}</AuthContext.Provider>
}
