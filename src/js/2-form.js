const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const key = 'feedback-form-state';
const save = localStorage.getItem(key);

if (save) {
  const obj = JSON.parse(save);
  email.value = obj.email;
  message.value = obj.message;
}

function onInput(ev) {
  localStorage.setItem(
    key,
    JSON.stringify({
      email: email.value.trim(),
      message: message.value.trim(),
    })
  );
}

function onSubmit(ev) {
  ev.preventDefault();
  if (!email.value || !message.value) return;

  console.log(JSON.parse(localStorage.getItem(key)));
  localStorage.removeItem(key);
  email.value = '';
  message.value = '';
}

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);
