import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux'
import "../styles/App.css";
import Cart from "./Cart";
import Home from "./Home";
import Header from "./Header";
import Lister from "./Lister";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header />
          <div className="App__Main">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Lister />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
