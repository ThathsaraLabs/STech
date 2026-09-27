/**
 * ScITech Signature Research Orbit Interactive Visual Manager
 * Manages IntersectionObserver to pause looping animations when out of viewport,
 * and handles node highlight interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initOrbitVisual();
});

function initOrbitVisual() {
  const heroVisual = document.querySelector('[data-orbit-visual]');
  if (!heroVisual) return;

  const animatedElements = heroVisual.querySelectorAll('.animate-orbit-spin, .animate-orbit-spin-reverse, .animate-node-pulse, .animate-float');

  // Pause animation when hero leaves viewport for battery & rendering efficiency
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatedElements.forEach(el => {
          el.style.animationPlayState = 'running';
        });
      } else {
        animatedElements.forEach(el => {
          el.style.animationPlayState = 'paused';
        });
      }
    });
  }, { threshold: 0.1 });

  observer.observe(heroVisual);

  // Interactive Node Hover / Focus Highlighting
  const orbitNodes = heroVisual.querySelectorAll('[data-orbit-node]');
  const activeLabel = heroVisual.querySelector('[data-orbit-active-label]');

  orbitNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const nodeName = node.getAttribute('data-orbit-node');
      if (activeLabel) {
        activeLabel.textContent = `Focusing: ${nodeName}`;
        activeLabel.classList.add('text-[#38D9F5]');
      }
    });

    node.addEventListener('mouseleave', () => {
      if (activeLabel) {
        activeLabel.textContent = 'Explore ScITech Core Disciplines';
        activeLabel.classList.remove('text-[#38D9F5]');
      }
    });
  });
}
