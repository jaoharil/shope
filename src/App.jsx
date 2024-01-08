import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Products } from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/Products/TopProducts';
import Bener from './components/Products/Bener';
import Contact from './components/Products/Contact';
import Footer from './components/Products/Footer';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <TopProducts />
      <Bener />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
