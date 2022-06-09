import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import Fruits from '../Fruits/Fruits';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner';
import Benifits from './Benifits';
import Stocks from './Stocks';
import { signOut } from "firebase/auth";

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
      <div className="m-10">
        <Banner></Banner>
        <Fruits slice={8} hidden='hidden'></Fruits>
        <Inventory slice={6} home={true} ></Inventory>
        <Stocks></Stocks>
        <Benifits></Benifits>
      </div>
    );
};

export default Home;