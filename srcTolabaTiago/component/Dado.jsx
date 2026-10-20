import React from 'react';

function Dado({ valor, alLanzar, jugador, mostrarDatos }) {
  // Diccionario de emojis
  const carasDado = {
    1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅'
  };

  // Lógica de mensajes y colores requerida en la consigna
  const obtenerMensaje = () => {
    if (valor === 1) return { texto: "Mala suerte, sacaste 1", color: "text-danger" };
    if (valor === 6) return { texto: "¡FELICIDADES! ¡Sacaste el mayor!", color: "text-success" };
    return { texto: "Buen tiro!", color: "text-primary" };
  };

  const mensajeActual = obtenerMensaje();

  return (
    <div className="text-center mt-4">
      {/* Display grande del dado */}
      <div className="dice-display mb-3">
        {carasDado[valor]}
      </div>

      {/* Un solo botón */}
      <button 
        type="button" 
        className="btn btn-warning btn-lg fw-bold px-5 py-3 mb-3 shadow"
        onClick={alLanzar}
      >
        Lanzar Dado
      </button>

      {/* Mensaje Condicional */}
      <h4 className={`fw-bold mt-2 ${mensajeActual.color}`}>
        {mensajeActual.texto}
      </h4>

      {/* Datos del jugador mostrados luego de lanzar */}
      {mostrarDatos && (
        <div className="alert alert-secondary mt-4 shadow-sm" role="alert">
          <h5 className="alert-heading fw-bold">Jugador en turno</h5>
          <hr />
          <p className="mb-0 fs-5">
            {jugador.nombre} {jugador.apellido} - {jugador.edad} años
          </p>
        </div>
      )}
    </div>
  );
}

export default Dado;
