import React, { useState } from "react";
import SimpleCard from "./simpleCard/SimpleCard";

const cardData = [
	{
		id: 1,
		src: "https://res.cloudinary.com/itgenius/image/upload/v1676031136/che2lfwlcjmqy46jvmyq.webp",
	},
	{
		id: 2,
		src: "https://res.cloudinary.com/itgenius/image/upload/v1681912133/logo2_cwyckq.jpg",
	},
	{
		id: 3,
		src: "https://res.cloudinary.com/itgenius/image/upload/v1681912117/logo1_voxark.jpg",
	},
	{
		id: 4,
		src: "https://res.cloudinary.com/itgenius/image/upload/v1680686612/fyodsht636jxxjhvlsbm.png",
	},
];
const Partners = () => {
	return (
		<>
			<div className="mt-[1100px] text-center">
				<h1 className="text-2xl font-bold my-8">Our Partners</h1>
			</div>

			<div className="  md:flex space-y-4  md:h-[30vh] bg-slate-300/20 md:w-[100vw] p-12 absolute inset-0  mt-[1456px] mx-4 md:mx-0  md:mt-[1160px]">
				{cardData.map((data) => (
					<SimpleCard key={data.id} imageSrc={data.src} />
				))}
			</div>
			
		</>
	);
};

export default Partners;
