import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Products from "./Components/Fruits/Fruits";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import User from "./Components/Shared/Header/User/User";
import Addfruits from "./Components/Fruits/AddFruits/Addfruits";
import ManageFruits from "./Components/Fruits/ManageFruits/ManageFruits";
import Myitems from "./Components/MyItems/Myitems";
import AddedByUser from "./Components/MyItems/AddedByUser";
import UpdatedByUser from "./Components/MyItems/UpdatedByUser";

function App() {
  return (
    <div className="mx-auto text-stone-500">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/fruits"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User></User>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addfruits"
          element={
            <RequireAuth>
              <Addfruits></Addfruits>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems/"
          element={
            <RequireAuth>
              <Myitems></Myitems>
            </RequireAuth>
          }
        >
          <Route
            path="addedbyme"
            element={<RequireAuth><AddedByUser></AddedByUser></RequireAuth>}
          ></Route>
          <Route
            path="updatedbyme"
            element={<RequireAuth><UpdatedByUser></UpdatedByUser></RequireAuth>}
          ></Route>
        </Route>
        <Route
          path="/update/:id"
          element={<RequireAuth><ManageFruits></ManageFruits></RequireAuth>}
        ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
