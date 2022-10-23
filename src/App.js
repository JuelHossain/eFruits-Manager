import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Router from "./Router";

function App() {
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
