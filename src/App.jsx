import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Carousel } from "./components/carousel";
import { Card, Card2 } from "./components/cards";
import { Services } from "./components/pageutils";

import Route from "./components/route-flder/Route";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </>
  );
}

export default App;
