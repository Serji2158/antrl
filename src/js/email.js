// function emailjsInit() {
//   emailjs.init({
//     publicKey: '-jrsFZRcGfNUdSTLV',
//   });
// };

// emailjsInit();
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: '-jrsFZRcGfNUdSTLV',
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const inputs = form.querySelectorAll('input, textarea');
  const checkbox = document.getElementById('input-check');
  const submitButton = document.getElementById('form-button');

  // Функція перевірки всіх полів
  function checkFormValidity() {
    const allFilled = Array.from(inputs).every(
      input => input.value.trim() !== ''
    );
    const checkboxChecked = checkbox.checked;

    if (allFilled && checkboxChecked) {
      submitButton.disabled = false;
      submitButton.classList.remove('disabled');
    } else {
      submitButton.disabled = true;
      submitButton.classList.add('disabled');
    }
  }

  // Додаємо події для всіх інпутів і чекбокса
  inputs.forEach(input => input.addEventListener('input', checkFormValidity));
  checkbox.addEventListener('change', checkFormValidity);
});

function sendMail() {
  let params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('comments').value,
    checkbox: document.getElementById('input-check'),
  };

  emailjs
    .send('service_fw78kul', 'template_9y2ym4h', params)
    .then(alert('Message sent!'));
}

document.querySelector('.form-button').addEventListener('click', sendMail);
