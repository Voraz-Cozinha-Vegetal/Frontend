import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsPage } from "./pages";
import GlobalStyle from "./styles/reset";



export default function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
        </Routes>
    </BrowserRouter>
  );
};

