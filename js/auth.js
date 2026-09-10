// Portafolio Base de Datos II — Ricardo Ibarra Vargas
// Control de acceso simple del lado del cliente (sin backend real).
// Protege una página: si no hay sesión iniciada, redirige a login.html
(function () {
  if (sessionStorage.getItem('bd2_logged_in') !== 'true') {
    window.location.href = 'login.html';
  }
})();

function cerrarSesion() {
  sessionStorage.removeItem('bd2_logged_in');
  window.location.href = 'login.html';
}
