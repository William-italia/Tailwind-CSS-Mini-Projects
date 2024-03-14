const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

button.addEventListener('click', () => {
    console.log(input.value);
    input.value = "";
});
