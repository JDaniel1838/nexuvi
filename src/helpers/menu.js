const menuButton = document.querySelector(".menu-toggle");

menuButton.addEventListener("click", function () {
  menuButton.style.position = "fixed";
  document.querySelector("body").classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".menu-item")) {
    setTimeout(() => {
      window.location.href = e.target.dataset.ref;
    }, 300);
  }
});

window.addEventListener("scroll", () => {
  // Obtener la posición actual del botón desde la parte superior de la página
  const buttonPosition = menuButton.getBoundingClientRect().top;

  // Verificar si el botón ha pasado los 10 píxeles desde la parte superior
  if (buttonPosition < 36) {
    // El botón ha pasado los 10 píxeles, puedes realizar acciones aquí
    console.log("El botón ha pasado los 10 píxeles desde la parte superior.");
    if (!document.querySelector("body").classList.contains("open")) {
      menuButton.style.position = "absolute";
    }
  } else {
    // El botón está por encima de los 10 píxeles
    menuButton.style.position = "fixed";
    console.log(
      "El botón está por encima de los 10 píxeles desde la parte superior."
    );
  }
});
