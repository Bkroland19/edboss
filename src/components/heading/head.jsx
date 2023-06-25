import React from 'react'

function Head({children}) {
  return (
   <div className=" flex flex-col items-center justify-center w-[25vw]  font-bold text-2xl m-8 text-center">
          <h1 className="w-[150px]  ">{children}</h1>
          <div className="w-1/4 flex items-center justify-center ">
  
            <div className="border-b-4 border-b-[#BA3B0A] w-[50px] mr-2"></div>

          </div>
        </div>
  )
}

export default Head

