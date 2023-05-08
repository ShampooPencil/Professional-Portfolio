// import LeftArrow from "./LeftArrow.js"
// import RightArrow from "./RightArrow.js"
import 'animate.css';
import ArrowContainer from "./ArrowContainer.js"
export default function Contact(){
    return <>
    <div className="contactColor">
        <ArrowContainer leftarrowLink="/projects" rightarrowLink="/">
            <div className="animate__animated animate__bounce headerName">
                Contact
            </div>
            <div className='animate__animated animate__rollIn animate__delay-0.7s'>Email: aramouni8@gmail.com</div>
            <div className='cellNum animate__animated animate__rollIn animate__delay-0.8s'>Cell: 440-317-4444</div>
            <div className='animate__animated animate__rollIn animate__delay-0.9s'>Location: Cleveland, OH</div>
        </ArrowContainer>
    </div>
    </>
}