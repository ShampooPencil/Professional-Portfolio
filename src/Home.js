import ArrowContainer from "./ArrowContainer.js";
import 'animate.css';
// import LeftArrow from "./LeftArrow";
// import RightArrow from "./RightArrow";

export default function Home(){
    return <>
        <div className="homeColor">
            <ArrowContainer leftarrowLink="/contact" rightarrowLink="/about">

                <div className="animate__animated animate__bounce homeHeader">Andrew Aramouni</div>
                <div className="homeContent">Junior Front-End Programmer</div>
            </ArrowContainer>
        </div>
    </>
}
