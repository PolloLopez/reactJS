import React from 'react';

const Item = ({ producto }) => {
    return (
        <div>
            <img width={300} src={producto.imagen} alt={producto.titulo} />
            <p>{producto.nombre}</p>
        </div>
    );
};

export default Item;