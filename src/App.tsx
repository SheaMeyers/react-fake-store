import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Lister from "./components/Lister";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

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
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
