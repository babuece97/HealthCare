import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="header">
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/services">
          Services
        </NavLink>
        <NavLink activeClassName="active" to="/departments">
          Departments
        </NavLink>
        <NavLink activeClassName="active" to="/gallery">
          Gallery
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        {user.email && (
          <span style={{ color: "white" }}>Hello {user.displayName}</span>
        )}
        {user.email ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
