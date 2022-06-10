import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-2.png";
const Logo = () => {
    return (
        <Link to={"/"}>
          <img className="h-full w-auto" src={logo} alt="logo" />
        </Link>
    );
};

export default Logo;