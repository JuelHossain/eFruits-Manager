import logo from "../../../logo-2.png";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLInk/CustomLink";

const Header = () => {
  const logout = () => {
    signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <header className="flex justify-center bg-stone-900 sticky top-0 h-14 font-semibold">
      <div className="container flex justify-between items-center  bg-stone-900 text-white px-4 py-2">
        <nav className="flex w-1/3">
          <CustomLink className="hover:bg-pink-500  border-l  p-4" to="/">
            Home
          </CustomLink>
          <CustomLink
            className="hover:bg-pink-500  border-l  p-4"
            to="/fruits"
          >
            Fruits
          </CustomLink>
          <CustomLink
            className="hover:bg-pink-500  border-x  p-4"
            to="/inventory"
          >
            Inventory
          </CustomLink>
        </nav>
        <div className="w-1/3 flex justify-center">
          <Link to={"/"}>
            <img className="w-full h-auto" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-1/3 ">
          <div className="flex justify-end items-center gap-2">
            <CustomLink
              className="hover:bg-pink-500  border-x  p-4"
              to="/addfruits"
            >
              AddFruits
            </CustomLink>
            {user ? (
              <div className="flex gap-2 items-center justify-end">
                <div>
                  <Link
                    to={"/user"}
                    className="text-right text-lg hover:animate-pulse  "
                  >
                    {user.displayName}
                  </Link>
                </div>
                <Link className="relative" to={"/user"}>
                  <span className="animate-ping absolute  h-full w-full rounded-full bg-sky-400 opacity-50"></span>
                  {user.photoURL ? (
                    <img
                      className="relative rounded-full h-8 hover:animate-pulse "
                      src={user.photoURL}
                      alt="user"
                    />
                  ) : (
                    <UserIcon className="relative rounded-full h-8 hover:animate-pulse"></UserIcon>
                  )}
                </Link>
                <button
                  className="hover:animate-pulse hover:text-pink-600"
                  onClick={logout}
                >
                  <LogoutIcon className="h-8"></LogoutIcon>
                </button>
              </div>
            ) : (
              <div
                className="flex
          gap-2 justify-end "
              >
                <Link className="hover:text-pink-500" to={"/register"}>
                  Register
                </Link>
                /
                <Link className="hover:text-pink-500" to={"/login"}>
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
