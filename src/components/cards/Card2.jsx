import React from "react";

const Card2 = ({ image, text, title }) => {
	return (
		<div className="">
			<div className="h-full  card w-96 glass">
				<figure>
					<img className="h-[278px] w-full" src={image} alt="car!" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p className="prose">{text}</p>
					<div className="card-actions justify-end">
						<button className="btn ">Learn now!</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card2;
