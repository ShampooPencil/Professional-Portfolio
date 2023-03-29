import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div>
        <nav className="navContainer">
          <NavLink to="/" className="homeLink navItem">
          <button class="button" type="button" data-hover="HOME" data-active="I'M ACTIVE">
            <span class="fa fa-home"></span>
          </button>
          </NavLink>
          <NavLink to="/about" className="aboutLink navItem">
            <div className="fa-solid fa-person-skiing"></div>
          </NavLink>
          <NavLink to="/projects" className="projectsLink navItem">
            <div className="fa-solid fa-code-branch"></div>
          </NavLink>
          <NavLink to="/skills" className="skillsLink navItem">
            <div className="fa-solid fa-user-ninja"></div>
          </NavLink>
            <NavLink to="/contact" className="contactLink navItem">
          <div className="fa-solid fa-address-card"></div>
        </NavLink>
        </nav>
      </div>
    </>
  );
}