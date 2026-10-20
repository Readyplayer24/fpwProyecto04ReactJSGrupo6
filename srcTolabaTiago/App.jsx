import { useState } from 'react';
import Dado from './components/Dado'; // Importamos el componente hijo
import './App.css'; // Importamos los estilos

function App() {
  
  const [dado, setDado] = useState(1); // Inicia en 1
  const [jugador, setJugador] = useState({ nombre: '', apellido: '', edad: '' });
  const [mostrarDatos, setMostrarDatos] = useState(false);

  // Manejador del formulario
  const manejarCambio = (e) => {
    setJugador({
      ...jugador,
      [e.target.name]: e.target.value
    });
  };

  
  const lanzarDado = () => {
    if (!jugador.nombre || !jugador.apellido || !jugador.edad) {
      alert("Por favor, ingresa tu nombre, apellido y edad antes de lanzar.");
      return;
    }

   
    const nuevoValor = Math.floor(Math.random() * 6) + 1;
    setDado(nuevoValor);
    setMostrarDatos(true);
  };

  return (
    <div className="app-container">
      <div className="container custom-card p-5" style={{ maxWidth: '600px' }}>
        
        <h2 className="text-center text-dark mb-4 fw-bold">
          🎲 Simulador de Dados
        </h2>

        {/* Formulario para añadir jugadores */}
        <div className="row g-3">
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Nombre" 
              name="nombre"
              value={jugador.nombre}
              onChange={manejarCambio}
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Apellido" 
              name="apellido"
              value={jugador.apellido}
              onChange={manejarCambio}
            />
          </div>
          <div className="col-12">
            <input 
              type="number" 
              className="form-control form-control-lg" 
              placeholder="Edad" 
              name="edad"
              value={jugador.edad}
              onChange={manejarCambio}
            />
          </div>
        </div>

        
        <hr className="mt-5 mb-2 text-secondary" />

     
        <Dado 
          valor={dado} 
          alLanzar={lanzarDado} 
          jugador={jugador} 
          mostrarDatos={mostrarDatos} 
        />

      </div>
    </div>
  );
}

export default App;