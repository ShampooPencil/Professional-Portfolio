import ArrowContainer from "./ArrowContainer.js";
import 'animate.css';
// import LeftArrow from "./LeftArrow";
// import RightArrow from "./RightArrow";

export default function Home(){
    return <>
        <ArrowContainer leftarrowLink="/contact" rightarrowLink="/about">
            <h2 className="animate__animated animate__bounce">Andrew Aramouni</h2>
        </ArrowContainer>
        {/* <LeftArrow page="/contact" /> */}
        {/* <div className="homeMyName">
            Andrew A. Aramouni
        </div> */}
        {/* <RightArrow page="/about"/> */}
    </>
}
