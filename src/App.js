import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./contexts/app-context";
import PrivatePage from "./decorator/Private-page";
import AddressPage from "./pages/Address-page";
import { HomePage } from "./pages/Home-page";
import ProductPage from "./pages/Product-page";
import UserCartPage from "./pages/User-cart-page";
import GlobalStyle from "./styles/reset";
import { getUserData } from "./utils/local-storage";

export default function App() {
  const [userData, setUserData] = useState(getUserData());
  const [config, setConfig] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const PrivateUserCart = <PrivatePage> <UserCartPage/> </PrivatePage>
  const PrivateUserAddress = <PrivatePage> <AddressPage/> </PrivatePage>
  
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
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={PrivateUserCart} />
            <Route path="/address" element={PrivateUserAddress}/>
          </Routes>
        </AppContext.Provider>
    </BrowserRouter>
  );
};

