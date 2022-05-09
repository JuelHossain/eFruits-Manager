import logo from "../../../logo-2.png";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";

const Header = () => {
  const logout = () => {
    signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <div className="flex justify-between items-center  bg-stone-900 text-white px-4 py-2">
      <nav className="flex gap-4 w-1/3">
        <Link to="/">Home</Link>
        <Link to="Products">Products</Link>
      </nav>
      <div className="w-1/3 flex justify-center">
        <Link to={"/"}>
          <img className="h-10 " src={logo} alt="logo" />
        </Link>
      </div>
      <div className="w-1/3">
        <>
          {user ? (
            <div className="flex gap-2 items-center justify-end">
              <div>
                <p className="text-right text-xl">{user.displayName}</p>
              </div>
              {user.photoURL ? (
                <img className="h-8" src={user.photoURL} alt="user" />
              ) : (
                <UserIcon className="h-8"></UserIcon>
              )}

              <button onClick={logout}>
                <LogoutIcon className="h-8"></LogoutIcon>
              </button>
            </div>
          ) : (
            <div
              className="flex
          gap-2 justify-end"
            >
              <Link to={"/register"}>Register</Link>/
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
