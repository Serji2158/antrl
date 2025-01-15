document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Отримуємо інпути
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');

  // Отримуємо поля для відображення помилок
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');

  // Скидаємо повідомлення про помилки
  phoneError.textContent = '';
  emailError.textContent = '';

  // Валідація телефону
  const phoneRegex = /^[\d\s\-+()]{10,15}$/; // Номер від 10 до 15 символів, дозволені пробіли, дужки, дефіси
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = 'Invalid phone number format.';
    return;
  }

  // Валідація email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простий регулярний вираз для перевірки email
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Invalid email format.';
    return;
  }

  // Якщо все валідно
  alert('Form is valid!');
});
