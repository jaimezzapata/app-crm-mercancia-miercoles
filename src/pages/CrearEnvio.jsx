import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../helpers/funciones";
let apiEnvios = "http://localhost:3000/envios";

function CrearEnvio() {
  const [descripcion, setDescripcion] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  let navigate = useNavigate();

  function registrarEnvio() {
    let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
    let nuevoEnvio = {
      descripcion: descripcion,
      destino: destino,
      fecha: fecha,
      estado: estado,
      idUsuario: usuarioLogueado.id,
    };
    fetch(apiEnvios, {
      method: "POST",
      body: JSON.stringify(nuevoEnvio),
    })
      .then(() => {
        alertaRedireccion(
          navigate,
          "Envío registrado correctamente",
          "En breves segundos será redireccionado",
          "success",
          "/home/envios"
        );
      })
      .catch((error) => console.log(error));
  }
  return (
    <form className="form">
      Registrar Envío
      <input
        onChange={(e) => setDescripcion(e.target.value)}
        type="text"
        className="input"
        placeholder="Descripcion"
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        type="text"
        className="input"
        placeholder="Destino"
      />
      <input
        onChange={(e) => setFecha(e.target.value)}
        type="date"
        className="input"
        placeholder="Fecha"
      />
      <select
        className="input"
        name=""
        id=""
        onChange={(e) => setEstado(e.target.value)}
      >
        <option className="input" value="">
          Seleccione...
        </option>
        <option className="input" value="Pendiente">
          Pendiente
        </option>
        <option className="input" value="Creado">
          Creado
        </option>
        <option className="input" value="Cancelado">
          Cancelado
        </option>
      </select>
      <button type="button" onClick={registrarEnvio}>
        Editar Envio
      </button>
    </form>
  );
}

export default CrearEnvio;
