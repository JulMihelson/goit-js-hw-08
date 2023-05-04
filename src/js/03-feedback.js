import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

let object = {};

let inputValues = localStorage.getItem('feedback-form-state');
if (inputValues) {
  let parsedInputValues = JSON.parse(inputValues);
  object = { ...parsedInputValues };
  email.value = parsedInputValues.email;
  message.value = parsedInputValues.message;
}

form.addEventListener(
  'input',
  throttle(event => {
    object.email = email.value;
    object.message = message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(object));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(object);
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
});
