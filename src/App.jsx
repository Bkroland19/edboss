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
import { Suspense } from "react";

function App() {
	return (
		<>
			<Suspense fallback="loading.....">
				<Navbar />
				<Card />
				<Partners />
				<Services />
				<Contact />
				<Footer />
			</Suspense>

			{/* <Blog /> */}
		</>
	);
}

export default App;
