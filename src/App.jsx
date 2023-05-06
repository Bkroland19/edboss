import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Carousel } from "./components/carousel";
import { Card, Card2 } from "./components/cards";
import { Services } from "./components/pageutils";
import { Partners } from "./components/partners";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Blog } from "./components/blog";


function App() {
	return (
		<>
			<Navbar />
			<Card />
			<Partners />
            <Services />			
			<Contact />
			<Footer />
			{/* <Blog /> */}
		</>
	);
}

export default App;
