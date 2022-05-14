import logo from "../../../logo-2.png";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { Link,NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
// import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

const Header = () => {
  //states 
  // const [mobile, setMobile] = useState(false);
  const logout = () => {
    signOut(auth);
  };
  const [user, loading] = useAuthState(auth);
  //style 
  const navstyle = "p-4 border-r  hover:bg-pink-600 hover:text-white overflow-hidden";
  const activestyle = "p-4 bg-pink-600 text-white border-r"
  if (loading) {
    <Loading></Loading>
  }
  return (
    <header className="sticky top-0 z-40 shadow-md shadow-stone-500 bg-stone-900 text-white text-sm lg:text-lg">
      <div className="container mx-auto flex flex-col lg:flex-row  justify-between items-center  font-semibold  ">
        <div className="container flex  justify-between items-center lg:w-8/12 xl:w-4/6 border-b lg:border-none">
          <nav className="flex w-2/3 ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activestyle : navstyle)}
            >
              Home
            </NavLink>
            {
              <NavLink
                className={({ isActive }) =>
                  isActive ? activestyle : navstyle
                }
                to="/fruits"
              >
                Fruits
              </NavLink>
            }
            {
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${activestyle} border-r` : `${navstyle} border-r`
                }
                to="/inventory"
              >
                Inventory
              </NavLink>
            }
            {
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${activestyle} border-r` : `${navstyle} border-r`
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            }
          </nav>
          <div className="w-1/2 flex lg:justify-end xl:justify-center relative">
            <Link to={"/"}>
              <img className="w-full h-auto" src={logo} alt="logo" />
            </Link>
          </div>
          {/* <button
            className="absolute lg:hidden left-2 h-14 bottom-0  "
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            <ArrowDownIcon className="h-8 border rounded hover:bg-pink-500 bg-stone-900 z-0"></ArrowDownIcon>
          </button> */}
        </div>
        {/* right side user side  */}
        {
          <div className="container flex  justify-end items-center lg:w-6/12 xl:w-2/6">
            <div className="flex ">
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${activestyle}` : `${navstyle}`
                  }
                  to="/myitems/addedbyme"
                >
                  My Items
                </NavLink>
              )}
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${activestyle} border-r`
                      : `${navstyle} border-r`
                  }
                  to="/addfruits"
                >
                  AddFruits
                </NavLink>
              )}
            </div>
            <div className="flex">
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
          gap-2 justify-end p-4"
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
        }
      </div>
    </header>
  );
};

export default Header;
