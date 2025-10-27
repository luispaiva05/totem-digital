// ============================
// MENU HAMBURGER
// ============================
const toggleButton = document.getElementById('menu-toggle');
const menuList = document.querySelector('.menu-lateral ul');

toggleButton.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

// ============================
// DESTAQUE DA SEÇÃO ATIVA
// ============================
document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu-lateral a");
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ============================
// MODAL PARA EVENTOS E TURISMO
// ============================
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalMapa = document.getElementById("modal-mapa");
const closeBtn = document.querySelector(".close");

// Abrir modal ao clicar nos itens
document.querySelectorAll(".evento, .turismo").forEach(item => {
  item.addEventListener("click", () => {
    modalTitulo.textContent = item.dataset.titulo;
    modalDescricao.textContent = item.dataset.descricao;
    modalMapa.href = item.dataset.mapa; // Link do Google Maps
    modal.classList.add("show");
  });
});

// Fechar modal ao clicar no X
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fechar modal ao clicar fora
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
  }
});
