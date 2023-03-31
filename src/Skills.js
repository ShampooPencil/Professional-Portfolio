import 'animate.css';
import ArrowContainer from "./ArrowContainer"


export default function Skills(){
    return <>
    <div className="skillsColor">
        <ArrowContainer leftarrowLink="/about" rightarrowLink="/projects">
            <h2 className="animate__animated animate__bounce">Skills</h2>
        </ArrowContainer>
    </div>
    </>
}