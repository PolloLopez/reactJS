import { useState } from 'react'

const EjemploFormulario = () => {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeNombre = (event) => {
        setNombre("event.target.value")
    }


    return (
        <form>
            <label>Nombre: </label>
            <input type="text" value={nombre} onChange={handleChangeNombre} />

            <label>Direccion:</label>
            <input type="text" value={nombre} onChange={handleChangeDireccion} />

        </form>

    )
}

export default EjemploFormulario
