import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { alertaRedireccion } from "../helpers/funciones";
let apiEnvios = "http://localhost:3000/envios";

function EditarEnvio() {
  const [descripcion, setDescripcion] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  let navigate = useNavigate();
  let { id } = useParams();

  function getEnvioId() {
    fetch(apiEnvios + "/" + id)
      .then((respose) => respose.json())
      .then((data) => {
        setDescripcion(data.descripcion);
        setDestino(data.destino);
        setFecha(data.fecha);
        setEstado(data.estado);
      });
  }

  useEffect(() => {
    getEnvioId();
  }, []);

  function editarEnvio() {
    let nuevoEnvio = {
      descripcion: descripcion,
      destino: destino,
      fecha: fecha,
      estado: estado,
    };
    fetch(apiEnvios, {
      method: "PATCH",
      body: JSON.stringify(nuevoEnvio),
    })
      .then(() => {
        alertaRedireccion(
          navigate,
          "Envío editado correctamente",
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
        value={descripcion}
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        type="text"
        className="input"
        placeholder="Destino"
        value={destino}
      />
      <input
        onChange={(e) => setFecha(e.target.value)}
        type="date"
        className="input"
        placeholder="Fecha"
        value={fecha}
      />
      <select
        className="input"
        name=""
        id=""
        onChange={(e) => setEstado(e.target.value)}
        value={estado}
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
      <button type="button" onClick={editarEnvio}>
        Registrar Envio
      </button>
    </form>
  );
}

export default EditarEnvio;
