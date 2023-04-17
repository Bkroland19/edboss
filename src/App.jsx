import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Carousel } from "./components/carousel";
import { Card } from "./components/cards";
import { Services } from "./components/pageutils";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Carousel />
			<Card />
			<Services />
		</>
	);
}

export default App;
