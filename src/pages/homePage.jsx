import React from "react";
import { Navbar } from "../components/navbar";
import { Card } from "../components/cards";
import { Partners } from "../components/partners";
import { Services } from "../components/pageutils";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import image2 from '../assets/image2.jpg';

function HomePage() {
  console.log(image2);
  return (
    <>
      <Navbar Image='bg-navbar-background' text='Welcome To EDBOS'/>
      <Card />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
