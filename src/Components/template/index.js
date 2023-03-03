import React from 'react';
import {Outlet} from "react-router-dom"
import Footer from '../Footer.js';

const Template = () => {
  return (
    <>
    <section>
      <Outlet/>
    </section>
    <Footer/>
    </>
  );
};

export default Template;