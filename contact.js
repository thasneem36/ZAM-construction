// ===== CONTACT.JS — Form validation & submission =====

(function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const successEl = document.getElementById('form-success');
    if (!form) return;

    function showError(id, msg) {
        const el = document.getElementById(id);
        if (el) el.textContent = msg;
    }

    function clearErrors() {
        ['name-error', 'phone-error', 'service-error', 'message-error'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '';
        });
        form.querySelectorAll('.error').forEach(f => f.classList.remove('error'));
    }

    function markError(inputId, errorId, msg) {
        const input = document.getElementById(inputId);
        if (input) input.classList.add('error');
        showError(errorId, msg);
    }

    function validate() {
        clearErrors();
        let valid = true;

        const name = document.getElementById('contact-name');
        const phone = document.getElementById('contact-phone');
        const service = document.getElementById('contact-service');
        const message = document.getElementById('contact-message');

        if (!name.value.trim()) {
            markError('contact-name', 'name-error', 'Please enter your full name.');
            valid = false;
        }

        if (!phone.value.trim() || phone.value.trim().replace(/\D/g, '').length < 9) {
            markError('contact-phone', 'phone-error', 'Please enter a valid phone number.');
            valid = false;
        }

        if (!service.value) {
            markError('contact-service', 'service-error', 'Please select a service.');
            valid = false;
        }

        if (!message.value.trim() || message.value.trim().length < 20) {
            markError('contact-message', 'message-error', 'Please describe your project (at least 20 characters).');
            valid = false;
        }

        return valid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Simulate sending (replace with real fetch/API call)
        submitBtn.disabled = true;
        btnText.textContent = 'Sending…';

        setTimeout(() => {
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            form.reset();
            successEl.style.display = 'flex';

            // Hide success after 6s
            setTimeout(() => { successEl.style.display = 'none'; }, 6000);
        }, 1200);
    });

    // Remove error highlight on re-type
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('error');
        });
    });
})();
