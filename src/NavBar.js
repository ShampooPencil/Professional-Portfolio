import { NavLink } from "react-router-dom";

export default function NavBar() {
  function currentRouteLink({isActive}){
    if (isActive) {
        return "active"; // CSS class
    } else {
      return "";
    }
  }
  return (
    <>
      <div>
        <nav className="navContainer">
         <div className="nav-btn home-btn">
          <NavLink to="/" className={currentRouteLink}>
            <button className="button navItem" type="button" data-hover="Home" data-active="I'M ACTIVE">
              <span className="fa fa-home"></span>
            </button>
          </NavLink>
          </div>
          <div className="nav-btn about-btn">
          <NavLink to="/about" className={currentRouteLink}>
            <button className="button navItem" type="button" data-hover="About" data-active="I'M ACTIVE">
              <span className="fa-solid fa-person-skiing"></span>
            </button>
          </NavLink>
          </div>
          <div className="nav-btn skills-btn">
          <NavLink to="/skills" className={currentRouteLink}>
            <button className="button navItem" type="button" data-hover="Skills" data-active="I'M ACTIVE">
              <span className="fa-solid fa-user-ninja"></span>
            </button>
          </NavLink>
          </div>
          <div className="nav-btn projects-btn">
          <NavLink to="/projects" className={currentRouteLink}>
            <button className="button navItem" type="button" data-hover="Projects" data-active="I'M ACTIVE">
              <span className="fa-solid fa-code-branch"></span>
            </button>
          </NavLink>
          </div>
          <div className="nav-btn contact-btn">
          <NavLink to="/contact" className={currentRouteLink}>
            <button className="button navItem" type="button" data-hover="Contact" data-active="I'M ACTIVE">
              <span className="fa-solid fa-address-card"></span>
            </button>
        </NavLink>
        </div>
        </nav>
      </div>
    </>
  );
}