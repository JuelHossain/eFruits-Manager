import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import Fruits from "../Fruits/Fruits";
import Inventory from "../Inventory/Inventory";
import Banner from "./Banner";
import Stocks from "./Stocks";

const Home = () => {
  // jwt token verification
  // if user found it will verify the jwt toke of the user if token is not valid then it will log out the user

  const user = useAuthState(auth);
  const logout = () => signOut(auth);
  useEffect(() => {
    if (user) {
      axios("/", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).catch((err) => {
        const status = err.response.status;
        if (status === 403 || status === 401) {
          logout();
        }
      });
    }
  }, [user]);
  return (
    <div className="container mx-auto my-10">
      <Banner></Banner>
      <Fruits slice={8} hidden="hidden" />
      <Inventory slice={6} home={true} />
      <Stocks />
    </div>
  );
};

export default Home;
