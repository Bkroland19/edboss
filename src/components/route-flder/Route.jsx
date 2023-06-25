import { useContext } from "react";
import navigationContext from "../../context/navigationContext";


function Route({path, children }) {
  const { currentPath } =useContext(navigationContext);
  if(path === currentPath){
    return children;
  }
  return null;
}

export default Route;
