import { useContext, useState } from "react";
import navigationContext from "../../context/navigationContext";


function Link({ to, children }) {
  const { navigate, activePage, setActivePage} = useContext(navigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
    setActivePage(children);
  
  };
  console.log(activePage);
  return (
    <div
      className={` w-full ${
        activePage === children ? "border-b-4 border-b-[#BA3B0A]" : ""
      }`}
      onClick={handleClick}
      href={to}
    >
      {children}
    </div>
  );
}

export default Link;
