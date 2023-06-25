// import React, { useState } from "react";
// import SimpleCard from "./simpleCard/SimpleCard";
// import { COMPANY_SVG } from "../constants/constantValues";

// const cardData = [
// 	{
// 		id: 1,
// 		company_name: "Ecobank",
// 		src: COMPANY_SVG,
// 		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
// 	},
// 	{
// 		id: 2,
// 		company_name: "Ecobank",
// 		src: COMPANY_SVG,
// 		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
// 	},
// 	{
// 		id: 3,
// 		company_name: "Ecobank",
// 		src: COMPANY_SVG,
// 		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
// 	},
	
// 	{
// 		id: 4,
// 		company_name: "E&K Holdings Group",
// 		src: "https://www.edskyungshin.com/wp-content/uploads/2017/10/cropped-EK_CMYK_LOGO_WEB4.png",
// 		text: "E&K Holdings Group was established in 1999 and based in Hong Kong.  We offer a range of professional services via various platforms including development and sales of environmental green lightings and solar photovoltaic generation, professional cleaning and environmental management services, air purification service, pest control service, development of real estate projects and recreational land use, as well as product sales and distribution."
// 	},
// 		{
// 		id: 3,
// 		company_name: "Ecobank",
// 		src: COMPANY_SVG,
// 		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
// 	},
// 		{
// 		id: 3,
// 		company_name: "Ecobank",
// 		src: COMPANY_SVG,
// 		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
// 	},
// 		{
// 		id: 3,
// 		company_name: "Ecobank",
// 		src: COMPANY_SVG,
// 		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
// 	},
// ];
// const Partners = () => {
// 	return (
// 		<div className="flex flex-col">
// 			<div className="text-center ">
// 				<h1 className="text-2xl font-bold my-8">Our Partners</h1>
// 			</div>

// 			<div  className="overflow-x-scroll bg-slate-300/20 h-[50vh] whitespace-nowrap  items-center ">
// 				{cardData.map((data) => (
// 					<SimpleCard key={data.id} imageSrc={data.src} text={data.text} company_name={data.company_name} />
// 				))}
// 			</div>
			
// 		</div>
// 	);
// };

// export default Partners;














import React, { useState, useEffect } from "react";
import SimpleCard from "./simpleCard/SimpleCard";
import { COMPANY_SVG } from "../constants/constantValues";
import { Head } from "../heading";

const cardData = [
	{
		id: 1,
		company_name: "Ecobank",
		src: COMPANY_SVG,
		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
	},
	{
		id: 2,
		company_name: "Huawei",
		src: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686848973/huawei_d7jfvp.png',
		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
	},
	{
		id: 3,
		company_name: "IBM",
		src: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686848975/ibm_dzzqjh.png',
		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
	},
	
	{
		id: 4,
		company_name: "E&K Holdings Group",
		src: "https://www.edskyungshin.com/wp-content/uploads/2017/10/cropped-EK_CMYK_LOGO_WEB4.png",
		text: "E&K Holdings Group was established in 1999 and based in Hong Kong.  We offer a range of professional services via various platforms including development and sales of environmental green lightings and solar photovoltaic generation, professional cleaning and environmental management services, air purification service, pest control service, development of real estate projects and recreational land use, as well as product sales and distribution."
	},
		{
		id: 5,
		company_name: "Samsung",
		src: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686848974/samsung_nulomo.png',
		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
	},
		{
		id: 6,
		company_name: "Stripe",
		src: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686848973/stripe_kanurp.png',
		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
	},
		{
		id: 7,
		company_name: "Amazon",
		src: 'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686848972/amazon-pay_xzj8un.png',
		text: "Ecobank, whose official name is Ecobank Transnational Inc., is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers"
	},
];

const slideDuration = 3000; // Time duration for each slide (e.g., 3000 milliseconds = 3 seconds)
const cardsPerPage = 4; // Number of cards to display per slide
const transitionDelay = 200; // Delay between sliding in each card (e.g., 200 milliseconds)

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % cardData.length;
      setCurrentIndex(nextIndex);
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % cardData.length;
      setCurrentIndex(nextIndex);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slicedCardData = cardData.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <div className=" min-w-[600px] flex flex-col">
      <div className="flex items-center justify-center">
        <Head>Our Partners</Head>
      </div>

      <div className="overflow-hidden bg-slate-300/20 h-[50vh] whitespace-nowrap items-center">
        <div
          className="flex w-full h-full"
        >
          {slicedCardData.map((data, index) => 
						{
							return(
								 <div
								  key={data.id}
          className="flex transition-transform duration-1000 delay-500 ease-in-out  w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
          }}
        >
					 <SimpleCard
             
              imageSrc={data.src}
              text={data.text}
              company_name={data.company_name}
              style={{ transitionDelay: `${index * transitionDelay}ms` }}
            />
				</div>
							)
						}
          )}
        </div>
      </div>
    </div>
  );
};

export default Partners;


