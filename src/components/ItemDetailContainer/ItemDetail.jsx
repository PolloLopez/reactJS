const ItemDetail = ( {producto} ) => {
  return (
    <div>
        <img src={producto.imagen} alt={producto.nombre} />
        <h2>{producto.nombre}</h2>
    </div>
  );
};

export default ItemDetail;