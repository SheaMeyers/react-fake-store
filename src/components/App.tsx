import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Header from "./Header";
import Lister from "./Lister";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App__Main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Lister />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
