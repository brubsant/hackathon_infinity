function atualizarLinhaHover() {
  const temHoverReal = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const telaGrande = window.innerWidth >= 992; // breakpoint lg do Bootstrap

  document.body.classList.toggle('sem-linha-hover', !(temHoverReal && telaGrande));
}

atualizarLinhaHover();
window.addEventListener('resize', atualizarLinhaHover);