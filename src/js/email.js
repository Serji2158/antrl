// import emailjs from '@emailjs/browser';
import emailjs from '../../node_modules/@emailjs/browser';


const SERVICE_ID = 'service_fw78kul';
const TEMPLATE_ID = 'template_9y2ym4h';
const PUBLIC_KEY = '-jrsFZRcGfNUdSTLV';

emailjs.init({
  publicKey: PUBLIC_KEY,
});


export default function sendMail() {
  let params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('comments').value,
    checkbox: document.getElementById('input-check'),
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params).then(PNotify.success({ title: 'Success!', text: 'Message sent!', delay: 2000 }));
}


