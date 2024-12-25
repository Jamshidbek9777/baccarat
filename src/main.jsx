import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import ContactUs from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import AllProducts from "./pages/products.jsx";
import ProductDetails from "./pages/detail.jsx";


const Root =()=>{
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App/>} exact/>
                    <Route path={'/contact'}  element={<ContactUs />} exact />
                    <Route path={'/about'}  element={<About/>} exact />
                    <Route path={'/products'} element={<AllProducts />} exact />
                    <Route path={'/product/:id'} element={<ProductDetails />} exact />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}
createRoot(document.getElementById("root")).render(<Root />);
