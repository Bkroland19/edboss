/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"navbar-background":
					"url('https://res.cloudinary.com/itgenius/image/upload/v1681737725/dtac-thailand-business-phone-blog_gg79dk.jpg')",
			},
		},
		// colors: {
		// 	"edboss-orange": "#fa8f3d",
		// },
	},
	plugins: [require("daisyui")],
};
