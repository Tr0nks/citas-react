import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import Header from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  
  useEffect( () => {
      localStorage.setItem('pacientes', JSON.stringify( pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacienteEliminar = pacientes.filter( pacienteState => pacienteState.id !== id);
    setPacientes(pacienteEliminar);
  }

 
  

  return (
    <>
        <Header      
         />

        <div className="md:flex mt-12">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes 
            pacientes={pacientes} 
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
        


    </>
  )
}

export default App
