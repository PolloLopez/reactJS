const ItemDetail = ( {producto} ) => {
  return (
    <div>
        <img src={producto.imagen} alt="" />
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default ItemDetail;
