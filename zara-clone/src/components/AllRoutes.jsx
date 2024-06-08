import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Help from "../pages/Help";
import Login from "../pages/Login";
import ShoppingBag from "../pages/ShoppingBag";
import SignIn from "../pages/SignIn";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/signin" element={<SignIn />} />
      <Route
        path="/shoppingbag"
        element={
          <PrivateRoutes>
            <ShoppingBag />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            <Products />
          </PrivateRoutes>
        }
      />
      <Route
        path="/product/details/:id"
        element={
          <PrivateRoutes>
            <ProductsDetails />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
