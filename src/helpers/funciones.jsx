import Swal from "sweetalert2";
export function alertaConfirmacion() {
    Swal.fire({
        title: "Bievenido",
        text: "Ha iniciado seción de forma correcta!",
        icon: "success"
    });
}
export function alertaError() {
    Swal.fire({
        title: "Error!",
        text: "Usuario y/o contraseña incorrecto!",
        icon: "error"
    });
}