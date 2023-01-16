import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import SignInSide from './Components/login/Materiallogin';
import SignUp from './Components/registration/SignUp';
import Forgetpassword from './Components/forgetpassword/Forgetpassword';
import ButtonBases from './Components/aboutus/Materialabout';
import CustomizedAccordions from './Components/contactus/Materialcontact';
import Products from './Components/products/Products';
import MediaCard1 from './Components/products/Material1';
import MdHeader from './Components/header/MdHeader';
import MaterialHeader from './Components/header/MaterialHeader';
import MDLogin from './Components/login/MDLogin';
import MdbFooter from './Components/footer/MdbFooter';

function App() {
  return (
    <div>
     <BrowserRouter>
     {/* <MdHeader/> */}
     <MaterialHeader/>
     <Routes>
     {/* <Route path="/" element={<SignInSide />}/> */}
     <Route path="/" element={<MDLogin/>}/>
     <Route path="/registration" element={<SignUp />} />
     <Route path="/forgetpassword" element={<Forgetpassword/>} />
     <Route path="/aboutus" element={<ButtonBases />} />
     <Route path="/contactus" element={<CustomizedAccordions/>} />
     <Route path="/products" element={<MediaCard1 />} />
     </Routes>
     <MdbFooter/>
     {/* <Footer/> */}
     </BrowserRouter>     
    </div>
  );
}

export default App;
