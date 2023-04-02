import 'animate.css';
import ArrowContainer from "./ArrowContainer"


export default function Skills(){
    return <>
    <div className="skillsColor">
        <ArrowContainer leftarrowLink="/about" rightarrowLink="/projects">
            <div className="animate__animated animate__bounce skillsHeader">Skills</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div></div>
        </ArrowContainer>
    </div>
    </>
}