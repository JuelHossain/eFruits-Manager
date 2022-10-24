import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import auth from "./firebase";
import Router from "./Router";

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios().catch(() => {
        signOut(auth);
        localStorage.removeItem("accessToken");
      });
    }
  }, [user]);

  return (
    <div className="mx-auto text-stone-500 flex flex-col min-h-screen">
      <Header />
      <Router />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
