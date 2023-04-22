import React from "react";

const Card = () => {
	return (
		<div className="absolute inset-0 mt-[500px]  md:mt-[740px] lg:mt- sm:flex  md:mx-auto md:justify-center my-4 mb-4 ">
			<div className="bg-[#f26f2d] md:h-[35vh] md:w-[24vw] h-[300px] mx-4 md:mx-0">
				<div className="  ml-4">
					<h3 className="text-lg">Served Over</h3>
					<h1 className="text-3xl my-4">1,521,550</h1>
					<h4 className="text-lg">Clients.</h4>
					<p className="mt-4 font-light">
						We Serve and Supply millions of clients through our offices,
						this Website and Bosses App e-market place
					</p>
				</div>
			</div>
			<div className="bg-[#f48f3d]  md:h-[35vh] md:w-[24vw] h-[300px] mx-4 md:mx-0">
				<div className="  ml-4">
					<h3 className="text-lg"> Mission</h3>

					<p className="mt-10 font-light">
						Our mission statement is to become a high integrity company
						that minds quality customer service ,innovation and creating a
						business mindset in communities through our e-market place and
						Commissions program.
					</p>
				</div>
			</div>
			<div className="bg-[#f5aa3a] md:h-[35vh] md:w-[24vw] h-[300px] mx-4 md:mx-0">
				<div className="  ml-4">
					<h3 className="text-lg"> Vision</h3>

					<p className="my-8 font-light">
						To turn billions of job seakers into job creators by involving
						them in our ongoing business projects both local and
						international.
					</p>
				</div>
			</div>{" "}
		</div>
	);
};

export default Card;
