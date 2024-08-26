import { mixed, object, string } from "yup"

let userScheme = object({
    nombre: string().required("Debe completar el nombre"),
    telefono: string().required("Debe completar el teléfono"),
    email: string().email("el formato de email no es correcto").required("Necesitamos saber su e-mail"),
})

const validateForm = async(dataForm) => {
    try {
        await userScheme.validate(dataForm)
        return{ status: "sucess" }
    } catch (error) {
        return { status: "error", message : error.message }
    }
}

export default validateForm