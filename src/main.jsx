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
import OsmanliProducts from "./pages/products/osmanli.jsx";
import OsmanliD from "./pages/details/osmanliD.jsx";
import {LanguageProvider} from "./context/language.jsx";


const Root = () => {
    return (
        <>
            <LanguageProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<App/>} exact/>
                        <Route path={'/contact'} element={<ContactUs/>} exact/>
                        <Route path={'/about'} element={<About/>} exact/>
                        <Route path={'/products'} element={<AllProducts/>} exact/>
                        <Route path={'/product/:id'} element={<ProductDetails/>} exact/>
                        <Route path={'osmanli/:id'} element={<OsmanliD/>} exact/>
                        <Route path={'/osmanli'} element={<OsmanliProducts/>} exact/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </LanguageProvider>

        </>
    );

};
createRoot(document.getElementById("root")).render(<Root />);
