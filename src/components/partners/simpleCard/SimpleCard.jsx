import React from "react";
import { useState } from "react";

const SimpleCard = ({ imageSrc, text, company_name }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="h-3/4 w-[250px] mr-4 text-center bg-white border-2 border-white/30 inline-flex   items-center  justify-center shadow-2xl rounded-md p-4 mt-12 hover:cursor-pointer"
        onMouseOver={() => {
          return setShow(!show);
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-start mt-[-20vh]">
          <div className="mb-4 bg-white rounded-full h-[95px] w-[95px] p-2 flex items-center justify-center">
            <img
              className="rounded-full h-[95px] w-[95px] object-contain  "
              src={imageSrc}
              alt="image"
            />
          </div>
          <div className=" w-full">
            <p className="text-center my-4 font-medium text-lg">
              {company_name}
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default SimpleCard;
