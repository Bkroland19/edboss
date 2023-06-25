import React from "react";
import { Card2 } from "../cards";

const cardDta = [
	{
		id: 1,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample-2.jpg",
		title: "life Hack",
		text: "We offer IT services like web design and hosting Mobile applications development, Network security, Database management, Software design and  support, Voip service, Computer selling and  Repair",
	},
	{
		id: 2,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample.jpg",
		title: "life Hack",
		text: "We import, Supply,and export original items to different destinations in the world with free transport for transactions above 2,000,000UGX in Uganda",
	},
	{
		id: 3,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample-3.jpg",
		title: "life Hack",
		text: "We also act as property consultants in Real estate management, Buying  and selling land, and also Managing Rentals",
	},
	{
		id: 4,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1682178628/pexels-prime-cinematics-2036544_c6hx6a.jpg",
		title: "life Hack",
		text: "We also deal in Engineering such as Construction, and Camera Installation",
	},
	{
		id: 5,
		image: "https://res.cloudinary.com/itgenius/image/upload/v1675488246/cld-sample.jpg",
		title: "life Hack",
		text: "We train un skilled youth to gain technical knowledge by involving them in on going company projects while they are earning and therefore creating employment opportunities in uganda",
	},
	
];
const Services = () => {
	return (
		<div className="p-4">
		<h1 className="text-center text-2xl font-bold my-8">What We  Offer</h1>
			<div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-4 sm:justify-center p-4 min-w-[600px] ">
				{cardDta.map(({ image, text, id, title }) => (
					<Card2 key={id} image={image} tite={title} text={text} />
				))}
			</div>
		</div>
	);
};

export default Services;
