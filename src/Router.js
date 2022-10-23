import { Route, Routes } from "react-router-dom";
import User from "./Components/Header/User/User";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Addfruits from "./Pages/Fruits/Addfruits";
import Products from "./Pages/Fruits/Fruits";
import ManageFruits from "./Pages/Fruits/manage-fruit/ManageFruits";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import AddedByUser from "./Pages/MyItems/AddedByUser";
import Myitems from "./Pages/MyItems/Myitems";
import UpdatedByUser from "./Pages/MyItems/UpdatedByUser";
import NotFound from "./Pages/notFound/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fruits" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/user"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/inventory"
        element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }
      />
      <Route
        path="/addfruits"
        element={
          <RequireAuth>
            <Addfruits />
          </RequireAuth>
        }
      />
      <Route
        path="/myitems"
        element={
          <RequireAuth>
            <Myitems />
          </RequireAuth>
        }>
        <Route
          index
          path="addedbyme"
          element={
            <RequireAuth>
              <AddedByUser />
            </RequireAuth>
          }
        />
        <Route
          path="updatedbyme"
          element={
            <RequireAuth>
              <UpdatedByUser />
            </RequireAuth>
          }
        />
      </Route>
      <Route
        path="/update/:id"
        element={
          <RequireAuth>
            <ManageFruits />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
