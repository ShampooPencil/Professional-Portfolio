import { NavLink } from "react-router-dom";
export default function LeftArrow(props){ 
  
    return <>
   
            <NavLink className="fa-solid fa-arrow-left leftArrow" to={props.page}>
              
            </NavLink>
    </>
  }