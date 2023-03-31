import { NavLink } from "react-router-dom";
export default function RightArrow(props){ 
  
    return <>
    
        
            <NavLink className="fa-solid fa-arrow-right rightArrow" to={props.page}>
               
            </NavLink>
       
  
    
    </>
  }