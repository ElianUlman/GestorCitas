import { useState } from 'react'
import './Formulario.css'

function Formulario() {

    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        //if
        setCita("")

        console.log(cita)
    }

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={handleChange} />

                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={handleChange} />

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={handleChange} />

                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={handleChange} />

                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={handleChange}></textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>

    )
}

export default Formulario