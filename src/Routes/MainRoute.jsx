import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../Components/NotFoundPage";
import PrivateRoute from "../Routes/PrivateRoutes";
import Home from "../Components/LandingPage/Home";
import Shop from "../Components/Shop";
import ManageProduct from "../Components/ManageProduct";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import MyAccount from "../Components/MyAccount";
import Cart from "../Components/Cart";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/:id" element={<Shop />} />
      <Route
        path="/manageproduct"
        element={
          <PrivateRoute>
            <ManageProduct />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/myaccount"
        element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoute;
