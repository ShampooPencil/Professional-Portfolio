import ArrowContainer from "./ArrowContainer.js"
export default function About(){
    
    return <>
        <div className="aboutColor">
          <ArrowContainer leftarrowLink="/" rightarrowLink="/skills">
          <div className="animate__animated animate__bounce aboutHeader headerName">About</div>
          <div className="aboutContent">Hello! I'm a junior full stack programmer!
           I work with HTML, CSS, Javascript mostly. But I have studied and work plethora of different languages. 
           C++, C#, and Ruby-on-rails. My recent work as been react.js and CSS Flexbox. 
           CSS is probably my favorite part working on my projects or with a team. Outside of coding, I enjoy videogames,
           golf, disk-golf, basketball, lifting, comics, and cleaning.
           </div>
         </ArrowContainer>
        </div>

      
    </>
}