/**
 * ScITech Consultation & Contact Form Manager
 * Validations, file upload preview, service pre-selection, and honest integration state.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-consultation-form]');
  if (form) {
    initConsultationForm(form);
  }
});

function initConsultationForm(form) {
  const serviceSelect = form.querySelector('#service');
  const contactMethodSelect = form.querySelector('#preferredContact');
  const phoneContainer = form.querySelector('[data-phone-container]');
  const phoneInput = form.querySelector('#phone');
  const fileInput = form.querySelector('#documentUpload');
  const fileDropzone = form.querySelector('[data-file-dropzone]');
  const filePreview = form.querySelector('[data-file-preview]');
  const fileNameDisplay = form.querySelector('[data-file-name]');
  const fileSizeDisplay = form.querySelector('[data-file-size]');
  const removeFileBtn = form.querySelector('[data-remove-file]');
  const formStatus = form.querySelector('[data-form-status]');

  let selectedFile = null;

  // 1. Service Pre-selection from URL Query Params
  const urlParams = new URLSearchParams(window.location.search);
  const paramService = urlParams.get('service');
  const paramCourse = urlParams.get('course');
  const goalTextarea = form.querySelector('#projectGoal');

  if (paramService && serviceSelect) {
    // Map URL param aliases
    const serviceMap = {
      'academic': 'academic-research',
      'academic-research': 'academic-research',
      'writing': 'writing-reports',
      'writing-reports': 'writing-reports',
      'data': 'data-analysis',
      'data-analysis': 'data-analysis',
      'academy': 'academy',
      'courses': 'academy'
    };
    if (serviceMap[paramService]) {
      serviceSelect.value = serviceMap[paramService];
    }
  }

  if (paramCourse && goalTextarea && !goalTextarea.value) {
    goalTextarea.value = `Inquiry regarding ScITech Academy course: "${decodeURIComponent(paramCourse)}"`;
  }

  // 2. Conditional Phone/WhatsApp Field Visibility & Validation
  if (contactMethodSelect) {
    contactMethodSelect.addEventListener('change', () => {
      const isWhatsApp = contactMethodSelect.value === 'whatsapp';
      if (phoneContainer) {
        if (isWhatsApp) {
          phoneContainer.classList.remove('hidden');
          phoneInput.setAttribute('required', 'required');
        } else {
          phoneContainer.classList.add('hidden');
          phoneInput.removeAttribute('required');
          clearFieldError(phoneInput);
        }
      }
    });
  }

  // 3. Document Upload Handling (Drag & Drop + File Validation)
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      handleFileSelection(e.target.files[0]);
    });

    if (fileDropzone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        fileDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          fileDropzone.classList.add('border-[#165DDB]', 'bg-blue-50/50');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        fileDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          fileDropzone.classList.remove('border-[#165DDB]', 'bg-blue-50/50');
        });
      });

      fileDropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFileSelection(files[0]);
      });
    }

    if (removeFileBtn) {
      removeFileBtn.addEventListener('click', () => {
        selectedFile = null;
        fileInput.value = '';
        if (filePreview) filePreview.classList.add('hidden');
        if (fileDropzone) fileDropzone.classList.remove('hidden');
      });
    }
  }

  function handleFileSelection(file) {
    if (!file) return;

    const maxMb = 10;
    const allowedTypes = ['.pdf', '.docx', '.csv', '.xlsx'];
    const extension = '.' + file.name.split('.').pop().toLowerCase();

    if (!allowedTypes.includes(extension)) {
      alert(`Invalid file format "${extension}". Supported formats: PDF, DOCX, CSV, XLSX.`);
      fileInput.value = '';
      return;
    }

    if (file.size > maxMb * 1024 * 1024) {
      alert(`File size (${(file.size / (1024 * 1024)).toFixed(1)} MB) exceeds the ${maxMb} MB limit.`);
      fileInput.value = '';
      return;
    }

    selectedFile = file;
    if (fileNameDisplay) fileNameDisplay.textContent = file.name;
    if (fileSizeDisplay) fileSizeDisplay.textContent = `${(file.size / 1024).toFixed(0)} KB`;
    if (fileDropzone) fileDropzone.classList.add('hidden');
    if (filePreview) filePreview.classList.remove('hidden');
  }

  // 4. Form Validation & Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAllErrors(form);

    let isValid = true;
    const requiredInputs = form.querySelectorAll('[required]');

    requiredInputs.forEach(input => {
      if (input.type === 'checkbox') {
        if (!input.checked) {
          showFieldError(input, 'Consent to be contacted is required.');
          isValid = false;
        }
      } else if (!input.value.trim()) {
        showFieldError(input, 'This field is required.');
        isValid = false;
      } else if (input.type === 'email' && !validateEmail(input.value)) {
        showFieldError(input, 'Please enter a valid email address.');
        isValid = false;
      }
    });

    if (!isValid) {
      if (formStatus) {
        formStatus.innerHTML = `
          <div class="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium mb-6">
            Please correct the highlighted fields before submitting your consultation inquiry.
          </div>
        `;
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    // Honest Preview State (No false "Message Sent" claim without backend endpoint)
    if (formStatus) {
      formStatus.innerHTML = `
        <div class="p-6 bg-blue-50 border border-[#165DDB]/30 rounded-2xl mb-6">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-action-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div>
              <h4 class="text-base font-bold text-body mb-1">Consultation Form Preview Verified</h4>
              <p class="text-sm text-muted mb-3">
                Your consultation details for <strong>${form.querySelector('#fullName').value}</strong> have been validated locally.
              </p>
              <p class="text-xs text-muted font-mono bg-white p-3 rounded-lg border border-soft-border">
                Service: ${serviceSelect.options[serviceSelect.selectedIndex].text}<br>
                Email: ${form.querySelector('#email').value}<br>
                Attached Document: ${selectedFile ? selectedFile.name : 'None'}
              </p>
              <p class="text-xs text-muted mt-3">
                <em>Note: This static deliverable provides clean integration hooks in <code>src/js/site-config.js</code>. Connect an SMTP or Webhook API endpoint for live submission.</em>
              </p>
            </div>
          </div>
        </div>
      `;
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  function showFieldError(input, message) {
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('border-red-500', 'bg-red-50/20');
    const parent = input.closest('[data-field-group]') || input.parentElement;
    let errorEl = parent.querySelector('[data-error-msg]');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.setAttribute('data-error-msg', '');
      errorEl.className = 'text-xs font-semibold text-red-600 mt-1';
      parent.appendChild(errorEl);
    }
    errorEl.textContent = message;
  }

  function clearFieldError(input) {
    input.removeAttribute('aria-invalid');
    input.classList.remove('border-red-500', 'bg-red-50/20');
    const parent = input.closest('[data-field-group]') || input.parentElement;
    const errorEl = parent.querySelector('[data-error-msg]');
    if (errorEl) errorEl.remove();
  }

  function clearAllErrors(form) {
    form.querySelectorAll('[aria-invalid]').forEach(clearFieldError);
    if (formStatus) formStatus.innerHTML = '';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
