import Swal from "sweetalert2";
export function alertaConfirmacion(id, apiEnvios, getEnvios) {
  Swal.fire({
    title: "Está seguro?",
    text: "No se puede reviertir la acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(apiEnvios + "/" + id, {
        method: "DELETE"
      }).then(() => {
        getEnvios()
      }).catch((error) => {
        console.log(error)
      })
      Swal.fire({
        title: "Eliminado",
        text: "El registro ha sido eliminado",
        icon: "success"
      });
    }
  });
}
export function alertaError(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}
export function alertaRedireccion(redireccion, titulo, mensaje, icono, url) {
  let timerInterval;
  Swal.fire({
    title: titulo,
    html: mensaje,
    timer: 2000,
    icon: icono,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(url);
    },
  });
}
export function generarToken() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}
