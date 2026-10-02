// ===== Modal Privacidade =====
  const modal = document.getElementById('modalPoliticas');
  const abrirModalBtn = document.getElementById('abrir-modal');
  const fecharModalBtn = document.getElementById('fechar-modal');
  if (modal && abrirModalBtn && fecharModalBtn) {
    abrirModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
    fecharModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.style.display = 'none';
    });
  }