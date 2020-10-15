import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div className="logo-container">TODO-APP</div>
        <div className="link-container">
          <NavLink to="/" className="nav-links" exact>
            ToDos
          </NavLink>
          <NavLink to="/create" className="nav-links">
            create
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
