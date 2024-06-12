
import Navbar from '../components/Navbar.jsx/Navbar'
import Footer from '../components/Footer';
import axios from 'axios';
import {useEffect,useState} from 'react';
import LoadingIndicater from '../components/LoginIndicater';
import ErrorIndicater from '../components/ErrorIndicater';
import { useParams } from 'react-router-dom';
import SingleProductCard from '../components/SingleProductCard';

export default function SingleProduct (){
    let [singleProduct,setSingleProduct]=useState([]);
    let [err,setErr]=useState(false);
    let [loding,setLoading]=useState(false);
    let {id}=useParams();
    async function fetching(id){
        try {
          setLoading(true)
        let res=await axios({
          method:"get",
          url:`https://khols-website-server.onrender.com/AllProduct/${id}`,
        })
        if(res.status===200){
            setSingleProduct(res?.data)
          console.log(res.data)
          setLoading(false)
        }
        } catch (error) {
          setErr(true)
          setLoading(false)
        }
        
      }
      useEffect(()=>{
        fetching(id)
      },[id])

      if(loding){
        return <LoadingIndicater/>
     }
   
     if(err){
       return <ErrorIndicater/>
   
     }
    return(
       <>
      
       <SingleProductCard {... singleProduct} key= {singleProduct.id}/>

       </>
    )

}