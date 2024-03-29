import Paciente from "./paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente }) => {

    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            {pacientes && pacientes.length === 0 ?
                <p className="text-center text-xl font-bold">Actualmente no hay registros <span className="font-bold text-indigo-700">Nada a mostrar</span></p>    
                :
                pacientes.map( paciente => (
                    <Paciente
                        key = { paciente.id }
                        paciente = { paciente }
                        setPaciente = { setPaciente }
                        eliminarPaciente = { eliminarPaciente }
                    />
                ))

            }
        </div>
    )
}

export default ListadoPacientes