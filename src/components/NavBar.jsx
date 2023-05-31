import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        < >
            <div className="nav-bar">
                <Link to='/'><div className="navoption">Home</div></Link>
                <Link  to='/about'><div className="navoption">About</div></Link>
                <Link  to='/experience'><div className="navoption">Experience</div></Link>
                <Link  to='/skills'><div className="navoption">Skills</div></Link>
                <Link  to='/portfolio'><div className="navoption">Portfolio</div></Link>
                <Link  to='/contact'><div className="navoption">Contact</div></Link>
            </div>
        </>
    );
}

export default NavBar;