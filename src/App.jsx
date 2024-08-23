import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          closeOnClick
          theme="light" />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a la bodega" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Bienvenidos a la bodega" />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
