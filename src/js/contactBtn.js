document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const feedbackBtn = document.getElementById('feedback-btn');
// console.log(feedbackBtn);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // console.log(feedbackBtn);
        // Якщо hero-секція видима — ховаємо кнопку
        if (entry.isIntersecting) {
          feedbackBtn.classList.remove('visible');
        } else {
          // Якщо користувач прокрутив нижче hero — показуємо кнопку
          feedbackBtn.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(hero);
});
