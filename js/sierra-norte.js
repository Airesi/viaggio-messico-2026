// Checklist locale, niente dipendenze o rete.
document.addEventListener('DOMContentLoaded', () => {
  const boxes = [...document.querySelectorAll('[data-pack]')];
  const counter = document.getElementById('pack-count');
  const bar = document.getElementById('pack-bar');
  const key = 'messico-2026-sierra-norte-packing';
  let values = [];
  try { values = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) {}
  boxes.forEach(box => {
    box.checked = values.includes(box.dataset.pack);
    box.addEventListener('change', () => {
      try { localStorage.setItem(key, JSON.stringify(boxes.filter(b => b.checked).map(b => b.dataset.pack))); } catch (_) {}
      render();
    });
  });
  function render() {
    const done = boxes.filter(b => b.checked).length;
    counter.textContent = done + '/' + boxes.length;
    bar.style.width = Math.round(100 * done / Math.max(1,boxes.length)) + '%';
  }
  document.getElementById('reset-pack').addEventListener('click', () => {
    boxes.forEach(box => { box.checked = false; });
    try { localStorage.removeItem(key); } catch (_) {}
    render();
  });
  render();
});
