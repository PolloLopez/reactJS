import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"; // Corrige la ruta aquí

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenidos a la bodega!" />
    </div>
  );
}

export default App;