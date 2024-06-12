import {Route,Routes} from 'react-router-dom';
import CardPage from '../pages/CardPage';
import EmailCheckPage from '../pages/EmailCheckPage';
import Home from '../pages/Home';
import HomeShopping from '../pages/HomeShopping';
import KidsProduct from '../pages/KidsProduct';
import MenProduct from '../pages/MenProduct';
import PasswordCheckPage from '../pages/PasswordCheckPage';
import ShoesProduct from '../pages/ShoesProduct';
import SignupPage from '../pages/SignupPage';
import SingleProduct from '../pages/SingleProduct';
import Under10Product from '../pages/Under10Product';
import Under20Product from '../pages/Under20Product';
import WelcomePage from '../pages/WelcomePage';
import WomenProduct from '../pages/WomenProduct';
import FullCard from './fullCard';



export default function AllRoute(){
    return(
        <Routes>
           <Route path='/card' element={<FullCard/>}></Route>
           <Route path='/emailcheck' element={<EmailCheckPage/>}></Route>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/homeshopping' element={<HomeShopping/>}></Route>
           <Route path='/kids' element={<KidsProduct/>}></Route>  
           <Route path='/men' element={<MenProduct/>}></Route>
           <Route path='/passwordcheck' element={<PasswordCheckPage/>}></Route>
           <Route path='/shoes' element={<ShoesProduct/>}></Route>
           <Route path='/signup' element={<SignupPage/>}></Route>


           <Route path='/signup' element={<SignupPage/>}></Route>
           <Route path='AllProduct/:id' element={<SingleProduct/>}></Route>  
           <Route path='/under10' element={<Under10Product/>}></Route>
           <Route path='/under20' element={<Under20Product/>}></Route>
           <Route path='/welcome' element={<WelcomePage/>}></Route>
           <Route path='/women' element={<WomenProduct/>}></Route>
        </Routes>
    )
}
