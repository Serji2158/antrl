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


export default function sendMail() {
  let params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('comments').value,
    checkbox: document.getElementById('input-check'),
  };

  emailjs
    .send('service_fw78kul', 'template_9y2ym4h', params)
    .then(
      PNotify.success({ title: 'Success!', text: 'Message sent!', delay: 1000 })
    );
}

// document.querySelector('.form-button').addEventListener('click', sendMail);
