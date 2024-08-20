import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext"; 
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />


        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a la bodega" />} />
          <Route path="/categoria/:idCategoria" 
          element={<ItemListContainer saludo="Bienvenidos a la bodega" />} />

          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
