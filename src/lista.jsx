import Cita from "./cita"

function Lista({ citas }) {

    const listaCitas = citas.map((cita, i) => (
        <Cita mascota={cita.mascota} propietario={cita.propietario} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} key={i} />
    ))

    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>

            {listaCitas}
        </div>
    );
}

export default Lista