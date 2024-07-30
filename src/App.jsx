import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <nav>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenidos a la bodega de Paramo!" />
      <ItemDetailContainer />
    </nav>
  );
}

export default App;
