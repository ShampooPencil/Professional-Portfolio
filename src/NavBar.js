import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div>
        <nav className="navContainer">
          <NavLink to="/" className="homeLink">
            <button className="button navItem" type="button" data-hover="Home" data-active="I'M ACTIVE">
              <span className="fa fa-home"></span>
            </button>
          </NavLink>
          <NavLink to="/about" className="aboutLink">
            <button className="button navItem" type="button" data-hover="About" data-active="I'M ACTIVE">
              <span className="fa-solid fa-person-skiing"></span>
            </button>
          </NavLink>
          <NavLink to="/skills" className="skillsLink">
            <button className="button navItem" type="button" data-hover="Skills" data-active="I'M ACTIVE">
              <span className="fa-solid fa-user-ninja"></span>
            </button>
          </NavLink>
          <NavLink to="/projects" className="projectsLink">
            <button className="button navItem" type="button" data-hover="Projects" data-active="I'M ACTIVE">
              <span className="fa-solid fa-code-branch"></span>
            </button>
          </NavLink>
          <NavLink to="/contact" className="contactLink">
            <button className="button navItem" type="button" data-hover="Contact" data-active="I'M ACTIVE">
              <span className="fa-solid fa-address-card"></span>
            </button>
        </NavLink>
        </nav>
      </div>
    </>
  );
}