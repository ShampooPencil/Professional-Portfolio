import { NavLink } from "react-router-dom";
export default function LeftArrow(props){ 
  
    return <>
    {/* <div className="arrowContainer"> */}
        {/* <button className="fa-solid fa-arrow-left leftArrow"> */}
        {/* <div className="leftArrow"> */}
            <NavLink className="fa-solid fa-arrow-left leftArrow" to={props.page}>
                {/* <div className="fa-solid fa-arrow-left"></div> */}
            </NavLink>
        {/* </button> */}
    {/* </div> */}
    {/* </div> */}
    </>
  }