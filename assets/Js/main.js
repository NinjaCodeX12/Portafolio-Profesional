document.addEventListener("DOMContentLoaded", () => {
  // === SELECTORES ===
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  // === FUNCIONES DE NAVEGACIÓN ===
  const toggleMenu = () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // === EVENTOS ===
  // Abrir/Cerrar Sidebar
  menuToggle.addEventListener("click", toggleMenu);

  // Cerrar al tocar el fondo oscuro
  overlay.addEventListener("click", toggleMenu);

  // === INTERACCIÓN DE ENLACES ===
  const links = document.querySelectorAll(".nav-links li");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) toggleMenu();
    });
  });

  // Dentro de tu evento DOMContentLoaded existente:
const navItems = document.querySelectorAll(".nav-links li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    // Quitar la clase seleccionada de todos
    navItems.forEach(el => el.classList.remove("selected"));
    // Agregar al clicado
    item.classList.add("selected");
  });
});
});
