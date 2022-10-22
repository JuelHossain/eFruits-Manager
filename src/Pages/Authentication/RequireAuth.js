import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";
import auth from "../../firebase";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();

  useEffect(() => {
    if (user) {
      axios("/", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).catch((err) => {
        const status = err.response.status;
        if (status === 403 || status === 401) {
          signOut(auth);
        }
      });
    }
  }, [user]);

  if (loading) {
    <Loading />;
  } else if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
