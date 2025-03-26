/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import Home from "../pages/Home";
export let enrutador = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <h1>Este es el Login</h1>
  }
]
