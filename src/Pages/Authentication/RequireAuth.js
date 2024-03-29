import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";
import auth from "../../firebase";

export default function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios().catch(() => {
        signOut(auth);
        localStorage.removeItem("accessToken");
      });
    }
  }, [user]);

  if (loading) {
    <Loading />;
  } else if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
