import ArrowContainer from "./ArrowContainer.js"
export default function About(){
    
    return <>
        <div className="aboutColor">
          <ArrowContainer leftarrowLink="/" rightarrowLink="/skills">
          <div className="animate__animated animate__bounce aboutHeader">About</div>
          <div className="aboutContent">Hello ya'll! </div>
         </ArrowContainer>
        </div>

      
    </>
}