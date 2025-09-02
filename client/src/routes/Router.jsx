import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { Add } from "../pages/Add"; // ✅ ใช้ {} กับ named export
import Update from "../pages/Update";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // หน้า login
  },
  {
    path: "/home",
    element: <Home />, // หน้าแสดงสินค้า
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  // ถ้า route ผิด
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;
