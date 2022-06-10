import React, { useState } from 'react';
import { UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import auth from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import UsersOption from './UsersOption';

const UserNav = () => {
  const [open, setOpen] = useState(false);
  //style
 
   const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading/>
  }else if (user) {
    return (
      <div className="flex gap-3 items-center justify-end">
        <UsersOption/>
          <Link
            to={"/user"}
            className="text-right text-xl hover:animate-pulse hidden sm:flex"
          >
            {user.displayName}
          </Link>
          <div className="relative">
            <p
              className="relative"
              onClick={() => setOpen(!open)}
            >
              <span className="animate-ping absolute  h-full w-full rounded-full bg-sky-400 opacity-50"></span>
              {user.photoURL ? (
                <img
                  className="relative rounded-full h-8 sm:h-10 hover:animate-pulse "
                  src={user.photoURL}
                  alt="user"
                />
              ) : (
                <UserIcon className="relative rounded-full h-8 hover:animate-pulse"></UserIcon>
              )}
            </p>
            {open && (
              <div className="absolute top-12 right-0 border bg-stone-900 w-28  flex flex-col">
                <Link
                  to={"/user"}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="hover:bg-rose-500 p-2 border-b"
                >
                  Profile
                </Link>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="hover:bg-rose-500 p-2 border-b "
                  to="/myitems/addedbyme"
                >
                  {" "}
                  My Items
                </Link>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="hover:bg-rose-500 p-2 border-b"
                  to="/addfruits"
                >
                  {" "}
                  Add Fruits
                </Link>
                <Link
                  onClick={() => {
                    signOut(auth)
                    setOpen(false);
                  }}
                  className="hover:bg-rose-500 p-2"
                  to="/addfruits"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
    )} else {
    return (
      <div
        className="flex gap-2 justify-end sm:text-lg "
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
};

export default UserNav;