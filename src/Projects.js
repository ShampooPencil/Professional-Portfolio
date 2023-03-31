import ArrowContainer from "./ArrowContainer"
import 'animate.css';
export default function Projects(){
    return <>
    <ArrowContainer leftarrowLink="/skills" rightarrowLink="/contact">
        <h2 className="animate__animated animate__bounce">Projects</h2>
    </ArrowContainer>
    </>
}