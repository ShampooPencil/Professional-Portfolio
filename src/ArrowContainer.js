import LeftArrow from "./LeftArrow.js";
import RightArrow from "./RightArrow.js";

export default function ArrowContainer(props){
    const {children, leftarrowLink, rightarrowLink} = props;
    return <>
    <div className="arrowContainer">
        <LeftArrow page={leftarrowLink}/>
        <div className="pageContent">{children}</div>
        <RightArrow page={rightarrowLink}/>
    </div>
    </>
}