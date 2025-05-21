/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import Home from "../pages/Home";
import Login from "../pages/Login";
import RutaProtegida from "../components/RutaProtegida";
import Registro from "../pages/Registro";
import GestionEnvios from "../pages/GestionEnvios";
import GestionClientes from "../pages/GestionClientes";
import CrearEnvio from "../pages/CrearEnvio";
import EditarEnvio from "../pages/EditarEnvio";
export let enrutador = [
  {
    path: "/home/",
    element: <RutaProtegida proteger={<Home />} />,
    children: [
      {
        path: "envios",
        element: <GestionEnvios />,
      },
      {
        path: "clientes",
        element: <GestionClientes />,
      },
      {
        path: "crear-envio",
        element: <CrearEnvio />
      },
      {
        path: "editar-envio",
        element: <EditarEnvio />
      }
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
];
