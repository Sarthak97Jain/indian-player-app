import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBarContent = [
    {
        key: "india",
        path: "/",
        text: "India 11",
    },
    {
        key: "swap",
        path: "/swap",
        text: "Swap Players",
    },
    {
        key: "copy",
        path: "/copy",
        text: "Copy Players",
    }
];
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
