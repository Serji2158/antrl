import sendMail from './email.js';


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('form-button');
  const inputs = form.querySelectorAll('.form-input, .form-area');
  const checkbox = document.getElementById('input-check');

  function validateName(name) {
    const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return namePattern.test(name);
  }
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhone(phone) {
    const phonePattern = /^(\+1\s?)?(\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return phonePattern.test(phone);
  }

  function validateField(field) {
    const errorMessage = field.nextElementSibling;
    let isValid = true;
    
    if (field.name === 'name') {
      isValid = validateName(field.value.trim());
      errorMessage.textContent = isValid ? '' : 'Enter a valid name.';
     
    } else if (field.name === 'email') {
      isValid = validateEmail(field.value.trim());
      errorMessage.textContent = isValid ? '' : 'Enter a valid email address.';
     
    } else if (field.name === 'phone') {
      isValid = validatePhone(field.value.trim());
      errorMessage.textContent = isValid
        ? ''
        : 'Enter a valid US phone number.';
    } else if (field.value.trim() === '') {
      isValid = false;
      errorMessage.textContent = 'This field is required.';
    } else {
      errorMessage.textContent = '';
    }

    return isValid;
  }

  function checkFormValidity() {
    let allValid = true;

    inputs.forEach(input => {
      if (!validateField(input)) {
        allValid = false;
      }
    });

    if (!checkbox.checked) {
      allValid = false;
    }

    submitButton.disabled = !allValid;
    submitButton.classList.toggle('disabled', !allValid);
  }

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      validateField(input);
      checkFormValidity();
    });

    // if (!input.nextElementSibling) {
    //   const errorSpan = document.createElement('span');
    //   errorSpan.style.color = 'red';
    //   errorSpan.style.fontSize = '12px';
    //   input.parentNode.insertBefore(errorSpan, input.nextSibling);
    // }
  });

  checkbox.addEventListener('change', checkFormValidity);

  form.addEventListener('submit', e => {
    e.preventDefault();
    checkFormValidity();
    if (!submitButton.disabled) {
        PNotify.info({
        title: 'Well done!',
        text: 'Form submitted successfully!',
        delay: 1000,
      });
      sendMail();
      form.reset();
    }
  });
});
