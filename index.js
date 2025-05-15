// index.js

// Certifique-se que 'produtos' está disponível (de produtos.js)
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.destaques-container');
  if (!container || !window.produtos) return;

  // Exiba apenas os 4 primeiros produtos como destaque (ou ajuste como quiser)
  produtos.slice(0, 4).forEach(produto => {
    container.innerHTML += `
      <div class="destaque-card">
        <img src="${produto.img}" alt="${produto.nombre}">
        <div class="destaque-info">
          <h3 class="destaque-nome">${produto.nombre}</h3>
          <div class="destaque-preco">${produto.preco} €</div>
          <div class="destaque-desc">${produto.desc}</div>
          <button class="destaque-btn">Comprar</button>
        </div>
      </div>
    `;
  });
});
