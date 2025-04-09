/* rafce -> Crea un componente funcional  flecha */
/* rfce -> Crea un componente funcional regular */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usuarios } from '../services/database'
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones'
import './Login.css'
const Login = () => {
  const [getUsuario, setUsuario] = useState("")
  const [getPassword, setPassword] = useState("")
  const [getHoraLogin, setHoraLogin] = useState(null)
  let navigate = useNavigate()

  function buscarUsuario() {
    let usuarioEncontrado = usuarios.find((usuario) => getUsuario == usuario.usuario && getPassword == usuario.contrasena)
    return usuarioEncontrado
  }

  function inicioSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken()
      localStorage.setItem("token", tokenAcceso)
      alertaRedireccion(navigate, "Bienvenido " + buscarUsuario().nombre, "En breves segundos será redireccionado al Home", "success", "/home")
      let horaInicio = new Date()
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
      // console.log(getHoraLogin);
    } else {
      alertaError()
    }
  }

  return (
    <form className="form">
      Sign Up
      <input onChange={(e) => setUsuario(e.target.value)} type="text" className="input" placeholder="Name" />
      <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
      <button type='button' onClick={inicioSesion} >Submit</button>
    </form>
  )
}

export default Login