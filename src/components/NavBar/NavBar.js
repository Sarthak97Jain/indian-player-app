import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { NavBarContent } from "../library/constants";

const NavBar = () => {
  return (
    <div className="Navbar">
        {NavBarContent.map((page)=>{
            return (
                <NavLink to={page.path}key={page.key} className={({ isActive }) => (isActive ? "active" : "passive")}>
                    {page.text}
                </NavLink>
            );
        })}
    </div>
  );
};

export default NavBar;
