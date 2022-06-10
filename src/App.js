import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Products from "./Pages/Fruits/Fruits";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import User from "./Components/Header/User/User";
import Addfruits from "./Pages/Fruits/Addfruits";
import ManageFruits from "./Pages/Fruits/ManageFruits";
import Myitems from "./Pages/MyItems/Myitems";
import AddedByUser from "./Pages/MyItems/AddedByUser";
import UpdatedByUser from "./Pages/MyItems/UpdatedByUser";
import NotFound from "./Pages/notFound/NotFound";

function App() {
  return (
    <div className="mx-auto text-stone-500 flex flex-col min-h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/fruits"
          element={
              <Products></Products>
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
          path="/myitems"
          element={
            <RequireAuth>
              <Myitems></Myitems>
            </RequireAuth>
          }
        >
          <Route
            index
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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
