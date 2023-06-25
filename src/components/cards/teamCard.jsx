import React from "react";
import image2 from "../../assets/image2.jpg";

function TeamCard({ image, name, tittle, text }) {
  return (
    <div className=" min-w-[600px]  md:w-[48vw] h-[300px]  flex tems-center justify-center bg-white ">
      <div className=" w-1/2 h-full ">
        <img
          src={image}
          alt="Employee Image"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-start relative">
        <div className="bg-white w-[50px] h-[50px] rotate-45 ml-[-25px]"></div>
        <div className="w-full h-full z-10 absolute top-0 left-0 px-4 py-2 flex flex-col justify-between">
          <div className="">
            <h1 className=" text-2xl font-bold">{name}</h1>
            <h2 className="  mb-4">{tittle}</h2>
            <p className="text-gray-600">{text}</p>
            <div className="w-full  flex items-center justify-end">
              <button className="btn ">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
