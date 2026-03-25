import Cita from "./cita"

function Lista() {

    const citas = []

    for (let i = 0; i < 3; i++) {

        citas.push(<Cita />)
    }

    return (
        <div className ="one-half column">
            <h2>Administra tus citas</h2>
            
            {citas}
        </div>
    );
}

export default Lista