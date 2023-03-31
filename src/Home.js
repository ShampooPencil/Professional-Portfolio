import ArrowContainer from "./ArrowContainer.js";
import 'animate.css';
// import LeftArrow from "./LeftArrow";
// import RightArrow from "./RightArrow";

export default function Home(){
    return <>
        <div className="homeColor">
            <ArrowContainer leftarrowLink="/contact" rightarrowLink="/about">

                <h2 className="animate__animated animate__bounce">Andrew Aramouni</h2>
            </ArrowContainer>
        </div>
    </>
}
