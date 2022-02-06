const hamburger = document.querySelector('#check');
const dropdown = document.querySelector('#dropdown');

hamburger.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});