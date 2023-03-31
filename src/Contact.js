// import LeftArrow from "./LeftArrow.js"
// import RightArrow from "./RightArrow.js"
import 'animate.css';
import ArrowContainer from "./ArrowContainer.js"
export default function Contact(){
    return <>
    <ArrowContainer leftarrowLink="/projects" rightarrowLink="/">
        <h2 className="animate__animated animate__bounce">Contact</h2>
    </ArrowContainer>
        {/* <LeftArrow page="/projects" />
        <RightArrow page="/" /> */}
    </>
}