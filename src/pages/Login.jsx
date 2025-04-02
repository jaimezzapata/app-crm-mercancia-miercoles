/* rafce -> Crea un componente funcional  flecha */
/* rfce -> Crea un componente funcional regular */
import './Login.css'
const Login = () => {
  return (
    <form className="form">
      Sign Up
      <input type="text" className="input" placeholder="Name" />
      <input type="text" className="input" placeholder="Password" />
      <button>Submit</button>
    </form>
  )
}

export default Login