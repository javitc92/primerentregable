const Card = ({ nombre, banda, onClose }) => {
    return (
      <div className="card">
        <h1>¡Muchas gracias!</h1>
        <p>Nombre: {nombre}</p>
        <p>Banda Favorita: {banda}</p>
        <button onClick={onClose}>Inregsar otra banda</button>
      </div>
    );
  }
  
  export default Card