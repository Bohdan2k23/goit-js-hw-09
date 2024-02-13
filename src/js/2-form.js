const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const key = 'feedback-form-state';

// Оновлена функція для зберігання даних у локальному сховищі
function saveFormData() {
  localStorage.setItem(
    key,
    JSON.stringify({
      email: email.value.trim(),
      message: message.value.trim(),
    })
  );
}

// Функція валідації форми
function validateForm() {
  if (!email.value.trim() || !message.value.trim()) {
    alert('Будь ласка, заповніть усі поля перед відправленням форми.');
    return false;
  }
  return true;
}

// Завантаження збережених даних при завантаженні сторінки
window.addEventListener('load', function () {
  const save = localStorage.getItem(key);
  if (save) {
    const obj = JSON.parse(save);
    email.value = obj.email;
    message.value = obj.message;
  }
});

// Збереження даних при кожній зміні в полі вводу
form.addEventListener('input', function () {
  saveFormData();
});

// Відправка форми
form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  if (validateForm()) {
    console.log(JSON.parse(localStorage.getItem(key)));
    localStorage.removeItem(key);
    email.value = '';
    message.value = '';
  }
});
