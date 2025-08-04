import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import {HiX} from 'react-icons/hi'
import {FaBars} from "react-icons/fa"

import './style.scss'
const Data = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT ME",
      to: "/about",
    },
    {
        label: "SKILLS",
        to: "/skills",
      },
    {
      label: "RESUME",
      to: "/resume",
    },
   
    {
      label: "PROJECTS",
      to: "/portfolio",
    },
    {
      label: "CONTACT",
      to: "/contact",
    },
  ];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          {/* <Link to="/logo" className="navbar_container_logo">
            <img src="logo.png" alt="" width={80}  height={70}/>
          </Link> */}
          <h1 className="navbar_container_logo">Selamawit</h1>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? 'Active' : ''}`}>
          {Data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_item_links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav_icon" onClick={handleToggleIcon}>
         
            {toggleIcon ? 
         <HiX size={30}/> : <FaBars size={30}/>
          }
        </div>
      </nav>
    </div>
  );
};

export default NavBar;