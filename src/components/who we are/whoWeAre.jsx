import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { Head } from "../heading";

function WhoWeAre() {
  const services = [
    {
      id: 1,
      serviceName: "Selling Vehicles on loan",
    },
    {
      id: 2,
      serviceName: "Job Connection Services In Uganda",
    },
    {
      id: 3,
      serviceName: "Whole Sale and Retail Supplies",
    },
    {
      id: 4,
      serviceName: "Property Consultants",
    },
    {
      id: 5,
      serviceName: "Skilling the Youth",
    },
    {
      id: 6,
      serviceName: "Real Estate development and property management",
    },
  ];
  return (
    <div className=" min-w-[600px]  flex flex-col space-y-11">
      <div className="h-1/4 flex flex-col items-center  justify-center px-8 text-center sm:mb-[20px]">
        <Head>Who we are</Head>
        <p className=" text-gray-500 text-md  text-justify ">
          {" "}
          Together with our partners,and better service providers,we are
          aUgandan’s corporate umbrella company aiming at working together and
          offering better services all over Africa and beyond.Through
          innovation,we have created aseemless experience to let customers shop
          our products and services anytime,and anywhere online on BossesApp
          markert place.
        </p>
      </div>
      <div className="  w-full bg-slate-500/50  md:flex md:justify-end ">
        <div className=" sm:h-[300px] flex items-center justify-center bg-white border-r-slate-400 md:border-r-4 :border-r-4 w-full md:h-[100vh] md:w-[50vw]">
          <div className=" h-full w-full flex flex-col items-center justify-center  ">
            <div className="md:w-[25vw] h-[50vh] z-10">
              <img
                src='https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image6_n44pde.webp'
                alt=""
                className="h-full w-full object-cover p-4"
              />
            </div>
                   <div className="md:w-[25vw] h-[50vh] z-10 ml-[15vw] mt-[-25vh]">
              <img
                src='https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image7_heqwyq.webp'
                alt=""
                className="h-full w-full object-cover p-4"
              />
            </div>
          </div>
        </div>

        <div className=" md:w-[50vw] md:h-[100vh] bg-white p-4">
          <div
            className="
				     h-full w-full p-2 flex flex-col justify-between "
          >
            <h1 className="font-bold text-xl ">What we Do</h1>
            <p className=" text-gray-500 text-justify text-md">
              We are a general commecial company which was registered in 2022
              with the government of Uganda as alimited liability with shares.
            </p>
            <p className=" text-gray-500 text-justify text-md">
              {" "}
              With our functional organisation system of management and
              leadership ,this company offers various products and services
              locally to international level which are readily available in our
              offices,and BossesApp Market place which is the most trusted two
              in one platform with potential clients and beneficiaries from
              different parts of the world{" "}
            </p>
            <div>
              <h1 className="">Our services</h1>
            </div>

            <div className=" w-full  flex items-center justify-end px-4">
              <div className=" w-3/4 flex justify-center border-2 shadow-2xl rounded-2xl z-10 p-4">
                <div className="bg-white">
                  {services.map((data) => {
                    return (
                      <p className="flex">
                        <TiTickOutline size={25} />
                        {data.serviceName}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <button className="btn ">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
