/**
 * ScITech Resources Filter, Search, Preview & Download Manager
 */
import { RESOURCES } from '../data/resources-data.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-resources-catalog]')) {
    initResourcesCatalog();
  }
  initResourceModal();
});

function initResourcesCatalog() {
  const container = document.querySelector('[data-resources-grid]');
  const searchInput = document.querySelector('[data-resource-search]');
  const categoryBtns = document.querySelectorAll('[data-resource-category]');
  const liveCount = document.querySelector('[data-resource-count]');
  const emptyState = document.querySelector('[data-resource-empty]');

  let activeCategory = 'all';
  let searchQuery = '';

  function render() {
    let filtered = RESOURCES.filter(res => {
      if (activeCategory !== 'all' && res.category !== activeCategory) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesSummary = res.summary.toLowerCase().includes(q);
        const matchesType = res.type.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesType) return false;
      }
      return true;
    });

    if (liveCount) {
      liveCount.textContent = `Showing ${filtered.length} resource${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      if (container) container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      if (container) {
        container.innerHTML = filtered.map(res => createResourceCardHtml(res)).join('');
        attachResourceListeners();
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      render();
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-resource-category');
      categoryBtns.forEach(b => {
        const isSelected = b.getAttribute('data-resource-category') === activeCategory;
        b.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        if (isSelected) {
          b.classList.add('bg-[#165DDB]', 'text-white', 'border-[#165DDB]');
          b.classList.remove('bg-white', 'text-[#172B44]', 'border-[#DCE5EF]');
        } else {
          b.classList.remove('bg-[#165DDB]', 'text-white', 'border-[#165DDB]');
          b.classList.add('bg-white', 'text-[#172B44]', 'border-[#DCE5EF]');
        }
      });
      render();
    });
  });

  render();
}

function createResourceCardHtml(res) {
  return `
    <article class="card-light flex flex-col justify-between hover:shadow-lg transition-all duration-200">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="badge-blue">${res.category}</span>
          <span class="text-xs font-mono text-muted">${res.format} • ${res.size}</span>
        </div>
        <h3 class="text-xl font-bold text-body mb-2 hover:text-action-blue transition-colors">
          <button data-open-resource-modal="${res.id}" class="text-left focus:outline-none focus:underline">${res.title}</button>
        </h3>
        <p class="text-sm text-muted mb-6">${res.summary}</p>
      </div>
      <div class="pt-4 border-t border-soft-border flex items-center justify-between">
        <span class="text-xs text-muted font-medium">${res.readTime}</span>
        <button data-open-resource-modal="${res.id}" class="btn-primary btn-sm gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          View / Read
        </button>
      </div>
    </article>
  `;
}

function attachResourceListeners() {
  const modalTriggers = document.querySelectorAll('[data-open-resource-modal]');
  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const resId = btn.getAttribute('data-open-resource-modal');
      openResourceModal(resId);
    });
  });
}

function initResourceModal() {
  const modal = document.querySelector('[data-resource-modal]');
  const closeBtn = document.querySelector('[data-resource-modal-close]');
  const backdrop = document.querySelector('[data-resource-modal-backdrop]');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

export function openResourceModal(resId) {
  const resource = RESOURCES.find(r => r.id === resId);
  const modal = document.querySelector('[data-resource-modal]');
  const content = document.querySelector('[data-resource-modal-content]');

  if (!resource || !modal || !content) {
    window.location.href = `resource-detail.html?id=${resId}`;
    return;
  }

  content.innerHTML = `
    <div class="flex items-center justify-between gap-4 mb-4">
      <span class="badge-blue">${resource.category}</span>
      <span class="text-xs font-mono text-muted">${resource.format} • ${resource.size}</span>
    </div>
    <h2 class="text-2xl font-bold text-body mb-4">${resource.title}</h2>
    
    <div class="prose prose-slate max-w-none mb-6 text-sm text-body leading-relaxed bg-paper p-6 rounded-xl border border-soft-border overflow-y-auto max-h-[50vh]">
      ${formatMarkdownText(resource.description)}
    </div>

    <div class="flex items-center justify-between gap-4 pt-4 border-t border-soft-border">
      <span class="text-xs text-muted font-medium">ScITech Starter Learning Resource</span>
      ${resource.downloadFilename ? `
        <button onclick="triggerSampleDownload('${resource.downloadFilename}')" class="btn-primary btn-sm gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Download (${resource.format.split('/')[0].trim()})
        </button>
      ` : `
        <button onclick="window.print()" class="btn-secondary btn-sm gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
          Print Guide
        </button>
      `}
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/** Simple helper to render sample markdown text to HTML safely */
function formatMarkdownText(text) {
  if (!text) return '';
  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4 class="text-base font-semibold mt-3 mb-1.5">$1</h4>')
    .replace(/^- \[ \] (.*$)/gim, '<li class="flex items-start gap-2 my-1"><input type="checkbox" class="mt-1 rounded" disabled/> <span>$1</span></li>')
    .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc my-1">$1</li>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
}

window.triggerSampleDownload = function(filename) {
  alert(`Sample Download Notice: Generating "${filename}". In production, this initiates a direct file stream.`);
};
