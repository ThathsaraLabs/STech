/**
 * ScITech Main JavaScript Entrypoint
 * Navigation, dropdown controls, mobile focus traps, theme states, and accessibility hooks.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initDropdowns();
  initMobileMenu();
  initInteractiveTabs();
  initAccordions();
});

/** Sticky Navigation Header Scroll State */
function initStickyHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-[#07111F]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#1e3c60]');
      header.classList.remove('bg-[#07111F]', 'border-transparent');
    } else {
      header.classList.remove('bg-[#07111F]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#1e3c60]');
      header.classList.add('bg-[#07111F]', 'border-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/** Desktop Services Dropdown Menu */
function initDropdowns() {
  const dropdownContainers = document.querySelectorAll('[data-dropdown-container]');

  dropdownContainers.forEach(container => {
    const trigger = container.querySelector('[data-dropdown-trigger]');
    const menu = container.querySelector('[data-dropdown-menu]');
    if (!trigger || !menu) return;

    let isOpen = false;

    const openMenu = () => {
      isOpen = true;
      menu.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
      menu.classList.add('opacity-100', 'pointer-events-auto');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      isOpen = false;
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.classList.remove('opacity-100', 'pointer-events-auto');
      setTimeout(() => {
        if (!isOpen) menu.classList.add('hidden');
      }, 150);
      trigger.setAttribute('aria-expanded', 'false');
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeMenu() : openMenu();
    });

    // Keyboard navigation
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu();
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!container.contains(e.target) && isOpen) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
        trigger.focus();
      }
    });
  });
}

/** Mobile Navigation Drawer with Focus Trap */
function initMobileMenu() {
  const toggleBtn = document.querySelector('[data-mobile-menu-toggle]');
  const menuDrawer = document.querySelector('[data-mobile-menu]');
  const closeBtn = document.querySelector('[data-mobile-menu-close]');
  const backdrop = document.querySelector('[data-mobile-menu-backdrop]');

  if (!toggleBtn || !menuDrawer) return;

  let previousActiveElement = null;

  const openDrawer = () => {
    previousActiveElement = document.activeElement;
    menuDrawer.classList.remove('translate-x-full');
    menuDrawer.classList.add('translate-x-0');
    if (backdrop) backdrop.classList.remove('hidden', 'opacity-0');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
    
    // Focus first link in drawer after transition
    setTimeout(() => {
      const firstNav = menuDrawer.querySelector('a, button');
      if (firstNav) firstNav.focus();
    }, 100);
  };

  const closeDrawer = () => {
    menuDrawer.classList.add('translate-x-full');
    menuDrawer.classList.remove('translate-x-0');
    if (backdrop) backdrop.classList.add('opacity-0');
    setTimeout(() => {
      if (backdrop) backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (previousActiveElement) previousActiveElement.focus();
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menuDrawer.classList.contains('translate-x-full')) {
      closeDrawer();
    }
  });

  // Expandable Mobile Subgroups
  const groupToggles = menuDrawer.querySelectorAll('[data-mobile-group-toggle]');
  groupToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const targetGroup = menuDrawer.querySelector(`#${targetId}`);
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (targetGroup) {
        if (isExpanded) {
          targetGroup.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('[data-chevron]')?.classList.remove('rotate-180');
        } else {
          targetGroup.classList.remove('hidden');
          btn.setAttribute('aria-expanded', 'true');
          btn.querySelector('[data-chevron]')?.classList.add('rotate-180');
        }
      }
    });
  });
}

/** Interactive Tabs Handler */
function initInteractiveTabs() {
  const tabGroups = document.querySelectorAll('[data-tab-group]');
  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('[data-tab-button]');
    const panels = group.querySelectorAll('[data-tab-panel]');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab-button');

        buttons.forEach(b => {
          const isActive = b.getAttribute('data-tab-button') === targetTab;
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
          b.classList.toggle('active', isActive);
          if (isActive) {
            b.classList.add('bg-[#165DDB]', 'text-white');
            b.classList.remove('bg-white', 'text-[#172B44]', 'border-[#DCE5EF]');
          } else {
            b.classList.remove('bg-[#165DDB]', 'text-white');
            b.classList.add('bg-white', 'text-[#172B44]', 'border-[#DCE5EF]');
          }
        });

        panels.forEach(panel => {
          const isTarget = panel.getAttribute('data-tab-panel') === targetTab;
          if (isTarget) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });
      });
    });
  });
}

/** Standard Accordion Handler */
function initAccordions() {
  const accordions = document.querySelectorAll('[data-accordion]');
  accordions.forEach(accordion => {
    const triggers = accordion.querySelectorAll('[data-accordion-trigger]');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const panelId = trigger.getAttribute('aria-controls');
        const panel = accordion.querySelector(`#${panelId}`);
        const icon = trigger.querySelector('[data-accordion-icon]');

        if (isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          if (panel) panel.classList.add('hidden');
          if (icon) icon.classList.remove('rotate-180');
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          if (panel) panel.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
  });
}
