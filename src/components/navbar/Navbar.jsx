import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuClick = () => {
		setShowMenu(!showMenu);
	};
	return (
		// parent-section
		<div className="bg-navbar-background  h-[90vh] w-[100vw] absolute inset-0 flex justify-between font-sans ">
			{/* left-section */}

			<div className="mx-8 mt-4">
				<h2 className="font-bold text-green-900">EDBOSS</h2>
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
				<p className="menu">Home</p>
				<p className="menu">About</p>
				<p className="menu">BossesApp/e-Market</p>
				<p className="menu">SalesForce</p>
				<p className="menu">Blog</p>
				<p className="menu">Promote Your Business</p>
				<p className="menu">Contact</p>
				<p className="menu">Jobs</p>
			</div>
		</div>
	);
};

export default Navbar;