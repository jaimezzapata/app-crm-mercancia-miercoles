import { useEffect, useState } from "react";
let apiEnvios = "http://localhost:3000/envios";

const GestionEnvios = () => {
  const [envios, setEnvios] = useState([]);
  let usuario = JSON.parse(localStorage.getItem("usuario"))
  function getEnvios() {
      fetch(apiEnvios)
        .then((response) => response.json())
        .then((data) => setEnvios(data))
        .catch((error) => console.log(error));
    }
    useEffect(() => {
      getEnvios();
    }, []);

    function filtrarEnviosUsuario(){
      let enviosUsuario = envios.filter((item)=>item.idUsuario == usuario.id)
      console.log(enviosUsuario);      
    }
    filtrarEnviosUsuario()
    
  return (
    <div>GestionEnvios</div>
  )
}

export default GestionEnvios