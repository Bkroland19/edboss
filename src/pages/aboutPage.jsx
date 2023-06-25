import React from 'react';
import { Navbar } from "../components/navbar";
import { Partners } from "../components/partners";
import { Footer } from "../components/footer";
import { Team } from '../components/team';
import WhoWeAre from '../components/who we are/whoWeAre';
import { Contact } from '../components/contact';

function aboutPage() {
  return (
       <>
      <Navbar Image='bg-navbar-background-about' text='About Us'/>
       <WhoWeAre />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}

export default aboutPage
