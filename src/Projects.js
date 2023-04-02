import ArrowContainer from "./ArrowContainer"
import 'animate.css';
export default function Projects(){
    return <>
      <div className="projectsColor">
    <ArrowContainer leftarrowLink="/skills" rightarrowLink="/contact">
        <div className="animate__animated animate__bounce projectsHeader">Projects</div>
        <div className="projectsContent">https://taskslicer.net</div>
    </ArrowContainer>
    </div>
    </>
}