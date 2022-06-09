import React from 'react';
import { NavLink } from 'react-router-dom';

const UsersOption = () => {
  //style
  const navstyle = "p-1  hover:text-orange-400 ";
  const activestyle = "p-1 text-orange-400 ";
  return (
    <nav className="hidden gap-3 ">
      <NavLink
        className={({ isActive }) =>
          isActive ? `${activestyle}` : `${navstyle}`
        }
        to="/myitems/addedbyme"
      >
        My Items
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? `${activestyle}` : `${navstyle} `
        }
        to="/addfruits"
      >
        AddFruits
      </NavLink>
    </nav>
  );
};

export default UsersOption;