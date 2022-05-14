import logo from "../../../logo-2.png";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { Link,NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";

const Header = () => {
  const logout = () => {
    signOut(auth);
  };
  const [user, loading] = useAuthState(auth);
  //style 
  const navstyle = "p-4 border-l  hover:bg-pink-600 hover:text-white overflow-hidden";
  const activestyle = "p-4 bg-pink-600 text-white border-l"
  if (loading) {
    <Loading></Loading>
  }
  return (
    <header className="flex justify-center bg-stone-900 sticky top-0 h-14 font-semibold z-40 shadow-md shadow-stone-500">
      {/* navigation bar and logo */}
      <div className="container flex justify-between items-center  bg-stone-900 text-white px-4 py-2">
        <nav className="flex w-1/3">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activestyle : navstyle)}
          >
            Home
          </NavLink>
        {<NavLink
          className={({ isActive }) => (isActive ? activestyle : navstyle)}
          to="/fruits"
        >
          Fruits
        </NavLink>}
        {<NavLink
          className={({ isActive }) => (isActive ? `${activestyle} ` :`${navstyle}`)}
          to="/inventory"
        >
          Inventory
        </NavLink>}
        {<NavLink
          className={({ isActive }) => (isActive ? `${activestyle} border-r` :`${navstyle} border-r`)}
          to="/blogs"
        >
          Blogs
        </NavLink>}
        </nav>
        <div className="w-1/3 flex justify-center">
          <Link to={"/"}>
            <img className="w-full h-auto" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-1/3 ">
          <div className="flex justify-end items-center">
          {user&&<NavLink
            className={({ isActive }) => (isActive ? activestyle : navstyle)}
            to="/myitems/addedbyme"
          >
            My Items
          </NavLink>}
          {user&&<NavLink
            className={({ isActive }) => (isActive ? `${activestyle} border-r`: `${navstyle} border-r`)}
            to="/addfruits"
          >
            AddFruits
          </NavLink>}
            {user ? (
              <div className="flex gap-2 items-center justify-end">
                <div className="ml-2">
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
