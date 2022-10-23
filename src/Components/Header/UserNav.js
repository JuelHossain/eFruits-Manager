import { UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import React, { useReducer } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";
import Loading from "../Loading";
import UsersOption from "./UsersOption";

export default function UserNav() {
  const [show, toggle] = useReducer((state) => !state, false);

  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return (
      <div className="flex gap-3 items-center justify-end">
        <UsersOption />
        <Link to="/user" className="text-right text-xl hover:animate-pulse hidden sm:flex">
          {user.displayName}
        </Link>
        <div className="relative">
          <button type="button" className="relative" onClick={toggle}>
            <span className="animate-ping absolute  h-full w-full rounded-full bg-sky-400 opacity-50" />
            {user.photoURL ? (
              <img
                className="relative rounded-full h-8 sm:h-10 hover:animate-pulse "
                src={user.photoURL}
                alt="user"
              />
            ) : (
              <UserIcon className="relative rounded-full h-8 hover:animate-pulse" />
            )}
          </button>
          {show && (
            <div className="absolute top-12 right-0 border bg-stone-900 w-28  flex flex-col">
              <Link to="/user" onClick={toggle} className="hover:bg-rose-500 p-2 border-b">
                Profile
              </Link>
              <Link
                onClick={toggle}
                className="hover:bg-rose-500 p-2 border-b "
                to="/myitems/addedbyme">
                {" "}
                My Items
              </Link>
              <Link onClick={toggle} className="hover:bg-rose-500 p-2 border-b" to="/addfruits">
                {" "}
                Add Fruits
              </Link>
              <Link
                onClick={() => {
                  signOut(auth);
                  toggle();
                }}
                className="hover:bg-rose-500 p-2"
                to="/addfruits">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-2 justify-end sm:text-lg ">
      <Link className="hover:text-pink-500" to="/register">
        Register
      </Link>
      /
      <Link className="hover:text-pink-500" to="/login">
        Login
      </Link>
    </div>
  );
}


