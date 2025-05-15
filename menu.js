// menu.js

document.addEventListener('DOMContentLoaded', function() {
  // Cria a estrutura do menu
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-hamburguer-container';

  const menuHamburguer = document.createElement('button');
  menuHamburguer.id = 'menu-hamburguer';
  menuHamburguer.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  menuContainer.appendChild(menuHamburguer);

  // Insere o botão no header
  const logoContainer = document.querySelector('.logo-container');
  if (logoContainer) {
    logoContainer.appendChild(menuContainer);
  }

  // Cria o menu lateral com links reais
  const menuLateral = document.createElement('div');
  menuLateral.id = 'menu-lateral';
  menuLateral.innerHTML = `
    <a href="index.html" class="menu-link">Início</a>
    <a href="moda.html" class="menu-link">Esencia y Glamour</a>
  `;

  // Cria o overlay
  const menuOverlay = document.createElement('div');
  menuOverlay.id = 'menu-overlay';
  menuOverlay.className = 'menu-overlay';

  // Adiciona ao body
  document.body.appendChild(menuLateral);
  document.body.appendChild(menuOverlay);

  // Controles do menu
  menuHamburguer.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('ativo');
    menuLateral.classList.toggle('aberto');
    menuOverlay.classList.toggle('ativo');
  });

  menuOverlay.addEventListener('click', function() {
    closeMenu();
  });

  // Fecha o menu ao clicar em qualquer link (mas permite navegação)
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
      // Não previne o comportamento padrão, então o link funciona normalmente
    });
  });

  function closeMenu() {
    menuHamburguer.classList.remove('ativo');
    menuLateral.classList.remove('aberto');
    menuOverlay.classList.remove('ativo');
  }

  // Fecha o menu ao pressionar ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Efeito Ripple nos links do menu
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('mousedown', function(e) {
      const oldRipple = this.querySelector('.ripple');
      if (oldRipple) oldRipple.remove();

      const span = document.createElement('span');
      span.className = 'ripple';
      this.appendChild(span);

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      span.style.width = span.style.height = size + 'px';
      span.style.left = (e.clientX - rect.left - size/2) + 'px';
      span.style.top = (e.clientY - rect.top - size/2) + 'px';

      span.addEventListener('animationend', () => span.remove());
    });
  });
});
