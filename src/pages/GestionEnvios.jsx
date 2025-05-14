import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let apiEnvios = "http://localhost:3000/envios";

const GestionEnvios = () => {
  const [envios, setEnvios] = useState([]);
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  function getEnvios() {
    fetch(apiEnvios)
      .then((response) => response.json())
      .then((data) => setEnvios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getEnvios();
  }, []);

  function filtrarEnviosUsuario() {
    let enviosUsuario = envios.filter((item) => item.idUsuario == usuario.id);
    return enviosUsuario;
  }
  let filtradoUsuario = filtrarEnviosUsuario();

  return (
    <div>
      <h1>Gestión Envíos</h1>
      <section className="cards">
        {filtradoUsuario.map((item) => (
          <div className="card">
            <h1>Nombre: {usuario.nombre}</h1>
            <p>ID Evío: {item.id}</p>
            <p>Descripción: {item.descripcion}</p>
            <p>Destino: {item.destino}</p>
            <p>Fecha: {item.fecha}</p>
            <p>Estado: {item.estado}</p>
            <div className="card__buttons">
              <button className="card__button">Eliminar</button>
              <Link className="card__button">Editar</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GestionEnvios;
