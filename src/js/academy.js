/**
 * ScITech Academy Catalog Interactive Filter, Search, Sort & Modal Manager
 */
import { COURSES } from '../data/courses-data.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-academy-catalog]')) {
    initAcademyCatalog();
  }
  initCourseModal();
});

function initAcademyCatalog() {
  const container = document.querySelector('[data-courses-grid]');
  const searchInput = document.querySelector('[data-course-search]');
  const typeFilters = document.querySelectorAll('[data-filter-type]');
  const topicFilters = document.querySelectorAll('[data-filter-topic]');
  const levelFilters = document.querySelectorAll('[data-filter-level]');
  const sortSelect = document.querySelector('[data-course-sort]');
  const clearBtn = document.querySelector('[data-clear-filters]');
  const liveCount = document.querySelector('[data-result-count]');
  const emptyState = document.querySelector('[data-empty-state]');

  let state = {
    search: '',
    type: 'all',
    topic: 'all',
    level: 'all',
    sort: 'title-asc'
  };

  // Read URL query params on initial load
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('topic')) state.topic = urlParams.get('topic');
  if (urlParams.has('type')) state.type = urlParams.get('type');
  if (urlParams.has('search')) state.search = urlParams.get('search');

  // Sync initial UI controls with URL params
  if (searchInput && state.search) searchInput.value = state.search;
  
  typeFilters.forEach(radio => {
    if (radio.value === state.type) radio.checked = true;
  });
  topicFilters.forEach(select => {
    if (select.value === state.topic) select.value = state.topic;
  });
  levelFilters.forEach(select => {
    if (select.value === state.level) select.value = state.level;
  });

  function render() {
    let filtered = COURSES.filter(course => {
      // Search filter
      if (state.search) {
        const query = state.search.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesSummary = course.summary.toLowerCase().includes(query);
        const matchesCategory = course.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSummary && !matchesCategory) return false;
      }

      // Type filter (Free / Paid)
      if (state.type !== 'all' && course.type.toLowerCase() !== state.type.toLowerCase()) {
        return false;
      }

      // Topic filter
      if (state.topic !== 'all' && course.category !== state.topic) {
        return false;
      }

      // Level filter
      if (state.level !== 'all' && course.level !== state.level) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      if (state.sort === 'title-asc') return a.title.localeCompare(b.title);
      if (state.sort === 'title-desc') return b.title.localeCompare(a.title);
      if (state.sort === 'duration') return parseFloat(a.duration) - parseFloat(b.duration);
      return 0;
    });

    // Update Result Announcement
    if (liveCount) {
      liveCount.textContent = `Showing ${filtered.length} course${filtered.length === 1 ? '' : 's'}`;
    }

    // Render Grid
    if (filtered.length === 0) {
      if (container) container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      if (container) {
        container.innerHTML = filtered.map(course => createCourseCardHtml(course)).join('');
        attachCardListeners();
      }
    }

    // Sync URL parameters
    const params = new URLSearchParams();
    if (state.topic !== 'all') params.set('topic', state.topic);
    if (state.type !== 'all') params.set('type', state.type);
    if (state.search) params.set('search', state.search);
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value.trim();
      render();
    });
  }

  typeFilters.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.type = e.target.value;
      render();
    });
  });

  topicFilters.forEach(select => {
    select.addEventListener('change', (e) => {
      state.topic = e.target.value;
      render();
    });
  });

  levelFilters.forEach(select => {
    select.addEventListener('change', (e) => {
      state.level = e.target.value;
      render();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state = { search: '', type: 'all', topic: 'all', level: 'all', sort: 'title-asc' };
      if (searchInput) searchInput.value = '';
      typeFilters.forEach(r => r.checked = r.value === 'all');
      topicFilters.forEach(s => s.value = 'all');
      levelFilters.forEach(s => s.value = 'all');
      if (sortSelect) sortSelect.value = 'title-asc';
      render();
    });
  }

  render();
}

function createCourseCardHtml(course) {
  const isFree = course.type === 'Free';
  const badgeClass = isFree ? 'badge-cyan' : 'badge-blue';
  
  return `
    <article class="card-light flex flex-col justify-between hover:shadow-lg transition-all duration-200">
      <div>
        <div class="flex items-center justify-between mb-4 gap-2 flex-wrap">
          <span class="${badgeClass}">${course.type}</span>
          <span class="text-xs font-medium text-muted flex items-center gap-1">
            <svg class="w-4 h-4 text-action-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            ${course.duration}
          </span>
        </div>
        <h3 class="text-xl font-bold text-body mb-2 hover:text-action-blue transition-colors">
          <button data-open-course-modal="${course.id}" class="text-left font-bold focus:outline-none focus:underline">${course.title}</button>
        </h3>
        <p class="text-sm text-muted mb-4 line-clamp-2">${course.summary}</p>
        <div class="flex items-center gap-3 text-xs text-muted mb-6">
          <span class="bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">${course.category}</span>
          <span class="bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">${course.level}</span>
          <span class="text-xs font-semibold text-action-blue">${course.format}</span>
        </div>
      </div>
      <div class="pt-4 border-t border-soft-border flex items-center justify-between">
        <span class="text-xs font-medium text-muted">${course.availability}</span>
        <button data-open-course-modal="${course.id}" class="${isFree ? 'btn-secondary btn-sm' : 'btn-primary btn-sm'}">
          ${course.actionText}
        </button>
      </div>
    </article>
  `;
}

function attachCardListeners() {
  const modalTriggers = document.querySelectorAll('[data-open-course-modal]');
  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-open-course-modal');
      openCourseModal(courseId);
    });
  });
}

function initCourseModal() {
  const modal = document.querySelector('[data-course-modal]');
  const closeBtn = document.querySelector('[data-course-modal-close]');
  const backdrop = document.querySelector('[data-course-modal-backdrop]');

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

export function openCourseModal(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  const modal = document.querySelector('[data-course-modal]');
  const content = document.querySelector('[data-course-modal-content]');

  if (!course || !modal || !content) {
    // If on another page, navigate to course-detail page
    window.location.href = `course-detail.html?id=${courseId}`;
    return;
  }

  content.innerHTML = `
    <div class="flex items-center justify-between gap-4 mb-4">
      <span class="${course.type === 'Free' ? 'badge-cyan' : 'badge-blue'}">${course.type} • ${course.format}</span>
      <span class="text-xs font-mono text-muted">${course.duration}</span>
    </div>
    <h2 class="text-2xl font-bold text-body mb-3">${course.title}</h2>
    <p class="text-muted text-sm mb-6">${course.description}</p>

    <div class="bg-paper p-4 rounded-xl border border-soft-border mb-6">
      <h4 class="text-xs font-bold uppercase tracking-wider text-muted mb-2">Instructor</h4>
      <p class="text-sm font-semibold text-body">${course.instructor}</p>
      <p class="text-xs text-muted">Availability: ${course.availability}</p>
    </div>

    <div class="mb-6">
      <h3 class="text-base font-bold text-body mb-3">Key Learning Outcomes</h3>
      <ul class="space-y-2">
        ${course.outcomes.map(o => `
          <li class="flex items-start gap-2 text-sm text-muted">
            <svg class="w-5 h-5 text-action-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>${o}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="mb-6">
      <h3 class="text-base font-bold text-body mb-3">Curriculum Overview</h3>
      <div class="space-y-2">
        ${course.curriculum.map(m => `
          <div class="p-3 bg-white border border-soft-border rounded-lg flex justify-between items-center text-xs">
            <span class="font-medium text-body">${m.title}</span>
            <span class="text-muted font-mono">${m.duration}</span>
          </div>
        `).join('')}
      </div>
    </div>

    ${course.hasPreview ? `
      <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
        <h4 class="text-xs font-bold text-action-blue uppercase tracking-wider mb-1">Free Lesson Status</h4>
        <p class="text-xs text-muted">This is an open sample module. Recorded media preview is currently under production for initial release.</p>
      </div>
    ` : ''}

    <div class="flex items-center justify-end gap-3 pt-4 border-t border-soft-border">
      <a href="https://wa.me/821048355911" target="_blank" rel="noopener" class="btn-cyan w-full sm:w-auto text-center font-bold bg-emerald-500 hover:bg-emerald-600 text-white border-none">
        ${course.type === 'Free' ? 'Access Free Course Materials via WhatsApp' : 'Enquire About Enrollment on WhatsApp'}
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
