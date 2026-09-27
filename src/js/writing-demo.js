/**
 * ScITech Writing & Reports Page
 * Interactive Before-and-After Language Edit Comparison Component.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-writing-edit-demo]');
  if (container) {
    initWritingDemo(container);
  }
});

function initWritingDemo(container) {
  const toggleBtns = container.querySelectorAll('[data-edit-toggle]');
  const samplePanels = container.querySelectorAll('[data-edit-panel]');
  const activeLabel = container.querySelector('[data-edit-label]');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-edit-toggle');

      toggleBtns.forEach(b => {
        const isActive = b.getAttribute('data-edit-toggle') === mode;
        b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (isActive) {
          b.classList.add('bg-[#165DDB]', 'text-white');
          b.classList.remove('bg-white', 'text-[#172B44]');
        } else {
          b.classList.remove('bg-[#165DDB]', 'text-white');
          b.classList.add('bg-white', 'text-[#172B44]');
        }
      });

      samplePanels.forEach(panel => {
        if (panel.getAttribute('data-edit-panel') === mode) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });

      if (activeLabel) {
        activeLabel.textContent = mode === 'before' 
          ? 'Original Draft (Passive, Wordy, Ambiguous Terminology)'
          : 'ScITech Refined (Active Voice, Precise Scientific Terminology, Crisp Focus)';
      }
    });
  });
}
