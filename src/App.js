
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Products from './Components/Fruits/Fruits';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import User from './Components/Shared/Header/User/User';
import Addfruits from './Components/Fruits/AddFruits/Addfruits';

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
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/addfruits"
          element={
            <RequireAuth>
              <Addfruits></Addfruits>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
