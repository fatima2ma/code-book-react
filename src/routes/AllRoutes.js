import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home/HomePage";
import ProductsPage from "../pages/Products/ProductsPage";
import ProductDetails from "../pages/ProductsDetails/ProductsDetails";
import Login from "../pages/Auth/LoginPage";
import Register from "../pages/Auth/RegisterPage";
import { FilterContextProvider } from "../context/filterContext";
import { CartContextProvider } from "../context/CartContext";
import CartPage from "../pages/Cart/CartPage";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderPage from "../pages/Order/OrderPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PageNotFound from "../pages/PageNotFound";

function AllRoutes(){
    return(
        <>
            <BrowserRouter>
            <FilterContextProvider>
            <CartContextProvider>
                <Routes>            
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="products" element={<ProductsPage/>}/>
                        <Route path="products/:id" element={<ProductDetails/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
                        <Route path="order-summary" element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
                        <Route path="dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </CartContextProvider>
            </FilterContextProvider>
            <ToastContainer theme="dark"/>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes;