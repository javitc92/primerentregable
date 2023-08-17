import { useState } from "react";
import Card from './Card'
import Error from './Error'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [auto, setAuto] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.length < 3 
      nombre.startsWith(" ") 
      auto.length < 6 ||
      auto.startsWith(" ")
    ) {
      setError(true);
      setShowCard(false);
      return;
    }
    setError(false);
    setShowCard(true);
  };

  const handleCardClose = () => {
    setNombre("");
    setAuto("");
    setShowCard(false);
  };

  return (
    <div >
      <h1 >¿Cual es tu auto preferido?</h1>
      <form onSubmit={handleSubmit} className="form">
        {error && <Error>Por favor chequea que la información sea correcta</Error>}
        <div>
          <label>Nombre:</label>
          <input
            placeholder="Ingresa tu nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Banda favorita:</label>
          <input
            placeholder="Ingresa tu auto favorita"
            type="text"
            value={auto}
            onChange={(e) => setAuto(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showCard && <Card nombre={nombre} auto={auto} onClose={handleCardClose} />}
    </div>
  );
}

export default App;