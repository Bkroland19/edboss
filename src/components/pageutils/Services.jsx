import React from "react";
import { Card2 } from "../cards";

const cardDta = [
	{
		id: 1,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample-2.jpg",
		title: "life Hack",
		text: "Trying to overcome poverty",
	},
	{
		id: 2,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample.jpg",
		title: "life Hack",
		text: "Trying to overcome poverty",
	},
	{
		id: 3,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample-3.jpg",
		title: "life Hack",
		text: "Trying to overcome poverty",
	},
	{
		id: 4,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1682178628/pexels-prime-cinematics-2036544_c6hx6a.jpg",
		title: "life Hack",
		text: "Trying to overcome poverty",
	},
];
const Services = () => {
	return (
		<div className="h-[50vh]  absolute inset-0  mt-[2799px] md:mt-[1600px] lg:mt-[1700px]   ">
		<h1 className="text-center text-2xl font-bold my-8">What We  Offer</h1>
			<div className="flex mx-2  flex-wrap w-[100vw] space-y-8   space-x-8 items-center justify-center">
				{cardDta.map(({ image, text, id, title }) => (
					<Card2 key={id} image={image} tite={title} text={text} />
				))}
			</div>
		</div>
	);
};

export default Services;
