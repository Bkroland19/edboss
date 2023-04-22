import React from "react";

const SimpleCard = ({ imageSrc }) => {
	return (
		<>
			<div className="h-[300px] md:h-[30vh] md:w-[17vw]  bg-white  inset-0 top-[100px]  justify-center items-center  mx-auto shadow-2xl rounded-md">
				<div className="h-[85px] w-[85px] rounded-full bg-gray-700/60 mx-auto">
					<img
						className="rounded-full h-[80px] w-[80px]"
						src={imageSrc}
						alt="image"
					/>
				</div>
				<p className="text-center my-4 font-medium text-lg">company name</p>
				<p className="text-center my-4 font-thin text-sm px-4">
					Some text to describe what the comapny does briefly Some text to
					describe what the comapny does briefly Some text to describe what
					the comapny does briefly
				</p>
			</div>
		</>
	);
};

export default SimpleCard;
