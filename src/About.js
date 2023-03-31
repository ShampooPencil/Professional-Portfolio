import ArrowContainer from "./ArrowContainer.js"
export default function About(){
    
    return <>
        <div className="aboutColor">
          <ArrowContainer leftarrowLink="/" rightarrowLink="/skills">
          <h2 className="animate__animated animate__bounce">About</h2>
         </ArrowContainer>
        </div>

      
    </>
}