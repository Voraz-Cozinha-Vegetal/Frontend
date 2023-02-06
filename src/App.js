import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./contexts/app-context";
import AdminPage from "./decorator/Admin-page";
import PrivatePage from "./decorator/Private-page";
import AddressPage from "./pages/Address-page";
import AdminProductPage from "./pages/Admin-manage-products-page";
import { HomePage } from "./pages/Home-page";
import ProductPage from "./pages/Product-page";
import SignInPage from "./pages/Sign-in-page";
import SignUpPage from "./pages/Sign-up-page";
import UserCartPage from "./pages/User-cart-page";
import GlobalStyle from "./styles/reset";
import { getUserData } from "./utils/local-storage";

export default function App() {
  const [userData, setUserData] = useState(getUserData());
  const [config, setConfig] = useState({ headers: { Authorization: `Bearer ${getUserData()?.token}` } });
  const [refresh, setRefresh] = useState(false);
  const [userCart, setUserCart] = useState(null);
  const PrivateUserCart = <PrivatePage> <UserCartPage/> </PrivatePage>
  const PrivateUserAddress = <PrivatePage> <AddressPage/> </PrivatePage>
  const PrivateAdminPage = <PrivatePage> <AdminPage> <AdminProductPage/> </AdminPage> </PrivatePage>
  
  return (
    <BrowserRouter>
      <GlobalStyle />
        <AppContext.Provider
          value={{
            userData,
            setUserData,
            config,
            setConfig,
            refresh,
            setRefresh,
            userCart,
            setUserCart,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={PrivateUserCart} />
            <Route path="/address" element={PrivateUserAddress} />
            <Route path="/admin" element={PrivateAdminPage} />
          </Routes>
        </AppContext.Provider>
    </BrowserRouter>
  );
};

