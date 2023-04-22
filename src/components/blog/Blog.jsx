import React from "react";
import { GrMapLocation } from "react-icons/gr";

const Blog = () => {
	return (
		<div>
			<div>
				<img
					className="h-[30vh] w-[20vw] mx-auto"
					src="https://res.cloudinary.com/itgenius/image/upload/v1682178628/pexels-prime-cinematics-2036544_c6hx6a.jpg"
					alt="car-image"
				/>
			</div>
			<div className="h-[37vh] bg-white shadow-2xl w-[18vw] mx-auto absolute inset-0 mt-[250px]">
				<div className="flex  justify-between items-center mx-8 py-4">
					<div>
						<img
							className="w-10 h-10 mx-auto rounded"
							src="https://res.cloudinary.com/itgenius/image/upload/v1680425665/WhatsApp_Image_2023-04-02_at_09.40.46_ojdctl.jpg"
							alt=""
						/>
					</div>
					<div className="">
						<p className="font-thin">
							Posted By: <span className="font-thin">Admin</span> ,{" "}
							<span className="font-thin">04-02-2013</span>
						</p>
					</div>
				</div>

				<div className="flex  justify-between items-center mx-8 py-4">
					<div className="">
						<GrMapLocation className="w-10   h-10 mx-auto rounded" />
					</div>
					<div className="">
						<p className="font-thin">
							 <span className="font-thin">Kampala Uganda</span> ,{" "}
							
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
