import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { alertaError, alertaRedireccion } from "../helpers/funciones";
import "./Registro.css";
let apiUsuarios = "http://localhost:3000/usuarios";

const Registro = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getHoraRegistro, setHoraRegistro] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  let navigate = useNavigate();

  function getUsuarios() {
    fetch(apiUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuario() {
    let usuarioEncontrado = usuarios.find(
      (usuario) => getUsuario == usuario.usuario
    );
    return usuarioEncontrado;
  }

  function registrarUsuario() {
    if (!buscarUsuario()) {
      let nuevoUsuario = {
        nombre: getName,
        usuario: getUsuario,
        contrasena: getPassword,
      };
      fetch(apiUsuarios, {
        method: "POST",
        body: JSON.stringify(nuevoUsuario),
      }).then(() => {
        getUsuarios();
      }).catch((error) => console.log(error))
      alertaRedireccion(
        navigate,
        "El usuario registrado correctamente",
        "En breves segundos será redireccionado al login",
        "success",
        "/"
      );
      let horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
      // console.log(getHoraLogin);
    } else {
      alertaError("Error", "Usuario ya existe en la base de datos", "error");
    }
  }

  return (
    <form className="form">
      Registro
      <input
        onChange={(e) => setUsuario(e.target.value)}
        type="text"
        className="input"
        placeholder="Usuario"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        className="input"
        placeholder="Contraseña"
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="input"
        placeholder="Nombre"
      />
      <button type="button" onClick={registrarUsuario}>
        Registrar
      </button>
      <Link to="/">¿Ya tiene una cuenta?</Link>
    </form>
  );
};

export default Registro;
