import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "../link/link";

const Navbar = ({Image, text}) => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuClick = () => {
		setShowMenu(!showMenu);
	};
	return (
		// parent-section
		<div className={` ${Image} bg-cover min-w-[600px] h-[90vh] lg:w-[100vw] md:w-[100vw]  font-sans relative `}>
			<div className="flex justify-between  bg-slate-600/40 py-4 z-50 sticky top-0 shadow-2xl">
				{/* left-section */}

				<div className="mx-11 ">
					<img
						className="w-[97px] "
						src="https://res.cloudinary.com/itgenius/image/upload/v1682186090/logo-no-background_cbbumw.svg"
						alt="logo"
					/>
				</div>

				{/* menu icon (visible on small screens) */}

				<div className="md:hidden mt-4 font-extrabold mx-8 text-white">
					{showMenu ? (
						<button onClick={handleMenuClick}>
							<FaTimes />
						</button>
					) : (
						<button onClick={handleMenuClick}>
							<FaBars />
						</button>
					)}
				</div>

				{showMenu ? (
					<div className="bg-gray-600/70 absolute inset-1 h-[40vh] mt-10">
						<p className="menu text-white mx-4 ">Home</p>
						<p className="menu text-white mx-4 ">About</p>
						<p className="menu text-white mx-4 ">BossesApp/e-Market</p>
						<p className="menu text-white mx-4 ">SalesForce</p>
						<p className="menu text-white mx-4 ">Blog</p>
						<p className="menu text-white mx-4 ">Promote Your Business</p>
						<p className="menu text-white mx-4 ">Contact</p>
						<p className="menu text-white mx-4 ">Jobs</p>
					</div>
				) : null}

				{/* right-section */}
				<div className="hidden md:flex-1 md:flex md:space-x-8 md:justify-end md:mx-7 text-white font-sans mt-4 h-6 lg:text-md">
					<p className="menu "><Link to='/'>Home</Link></p>
					<p className="menu"><Link to='/about'>About</Link></p>
					<p className="menu"><Link to='/boss'>BossesApp/e-Market</Link></p>
					<p className="menu"><Link to='/salesorce'>SalesForce</Link></p>
					{/* <p className="menu">Blog</p>
					<p className="menu">Promote Your Business</p> */}
					<p className="menu">Contact</p>
					<p className="menu">Jobs</p>
				</div>
			</div>
			<div className="md:h-full md:w-full md:bg-gray-950/80    md:absolute md:top-0 md:left-0 sm:absolute sm:top-0 sm:left-0 text-white flex items-center justify-center  text-[50px]">
				<h1 className=" font-extrabold">{text}</h1>
			</div>
		</div>
	);
};

export default Navbar;
