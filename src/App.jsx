import React from 'react';
import About from './components/About';

import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { toast } from 'react-toastify';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header />
      <About /> 
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
