import React from 'react';
import Footer from './footer/Footer';
import "./Styles.css";
import Graduates from "./Graduates";
import CounterMain from "./CounterMain";
import Courses from "./Courses";
import ContactForm from "./ContactForm";

const HomeContend = () => {
  return (
    <>
      <div className='white_content'>
      </div>
      <Graduates />
      <CounterMain />
      <Courses />
      <ContactForm />
    </>
  )
}

export default HomeContend;