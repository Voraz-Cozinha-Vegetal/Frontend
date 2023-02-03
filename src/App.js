import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home-page";
import ProductPage from "./pages/Product-page";

import GlobalStyle from "./styles/reset";

export default function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
    </BrowserRouter>
  );
};

