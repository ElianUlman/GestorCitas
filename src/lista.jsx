import Cita from "./cita"

function Lista() {

    const citas = []

    for (let i = 0; i < 3; i++) {

        citas.push(<Cita />)
    }

    return (
        <div class="one-half column">
            <h2>Administra tus citas</h2>
            
            {citas}
        </div>
    );
}

export default lista