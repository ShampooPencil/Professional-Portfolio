// import LeftArrow from "./LeftArrow.js"
// import RightArrow from "./RightArrow.js"
import 'animate.css';
import ArrowContainer from "./ArrowContainer.js"
export default function Contact(){
    return <>
    <div className="contactColor">
        <ArrowContainer leftarrowLink="/projects" rightarrowLink="/">
            <h2 className="animate__animated animate__bounce contactHeader">
                Contact
            </h2>
            <div className='animate__animated animate__rollIn animate__delay-0.8s email'>email: aramouni8@gmail.com</div>
            <div className='cellNum animate__animated animate__rollIn animate__delay-0.8s'>Cell: 440-317-4444</div>
            <div className='animate__animated animate__rollIn animate__delay-0.8s meLocation'>Location: Cleveland, OH</div>
        </ArrowContainer>
    </div>
    </>
}