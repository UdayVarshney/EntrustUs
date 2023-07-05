
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Faqs from './pages/Faqs';
import {Route , Routes} from 'react-router-dom'; 
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Tnc from './pages/Tnc';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';

function App() {
  return (
    <>
      <Navbar/>
      <div className='flex-col justify-center font-poppins'>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/product" element = {<Product/>} />
          <Route path="/faqs" element = {<Faqs/>} />
          <Route path="/pricing" element = {<Pricing/>} />
          <Route path="/resources" element = {<Resources/>} />
          <Route path="/security" element = {<Security/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/tnc" element={<Tnc/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
  
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
