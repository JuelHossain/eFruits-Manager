
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 shadow-md shadow-stone-500 bg-stone-900 text-white ">
      <div className="container mx-auto flex justify-between items-center font-semibold  h-14">
        <Nav />
        <Logo />
        <UserNav/>
      </div>
    </header>
  );
};

export default Header;
