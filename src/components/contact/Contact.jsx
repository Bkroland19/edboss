import React from "react";

const Contact = () => {
	return (
		<div className="flex bg-[#f37c44] h-[93vh] md:h-[80vh] mt-[1768px] md:mt-[1456px]">
			<div className=" md:flex justify-center items-center mx-auto md:space-x-8">
				<div>
					<img
						className="md:w-[486px] w-[286px] h-[285px] md:h-[485px]"
						src="https://res.cloudinary.com/itgenius/image/upload/v1682173207/contact-us-1_soydcy.png"
						alt="image"
					/>
				</div>

				<div className="flex flex-col ">
					<h2 className="text-white py-4 text-2xl">
						We would Love to hear from you!
					</h2>
					<div className="flex flex-col space-y-4">
						<input
							className="h-[56px] placeholder-white text-white w-[50vh] bg-transparent border px-4 outline-none"
							type="text"
							placeholder="Your Names"
						/>
						<input
							className="h-[56px] placeholder-white text-white w-[50vh] bg-transparent border px-4 outline-none"
							type="text"
							placeholder="Your Email to recieve News Letters(Optional)"
						/>
						<input
							className="h-[56px] placeholder-white text-white w-[50vh] bg-transparent border px-4 outline-none"
							type="text"
							placeholder="Your Phone Number"
						/>
						<input
							className="h-[56px] placeholder-white text-white w-[50vh] bg-transparent border px-4 outline-none"
							type="text"
							placeholder="Location"
						/>
						<textarea
							className="h-[136px] placeholder-white  text-white w-[50vh] bg-transparent border px-4 outline-none"
							type="text"
							placeholder="message"
						/>

						<button className="bg-white p-4 font-bold w-[154px] hover:text-white hover:bg-black transition duration-200">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
