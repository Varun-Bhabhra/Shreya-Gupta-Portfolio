// VARIABLE DECLARATION
const navbar = document.querySelector('#navbar');
const hamburger = document.querySelector('#check');
const dropdown = document.querySelector('#dropdown');

const about = document.querySelectorAll('.about');
const experience = document.querySelectorAll('.experience');
const work = document.querySelectorAll('.work');
const contact = document.querySelectorAll('.contact');

const landing_section = document.querySelector('#landing_section');
const about_section = document.querySelector('#about_section');
const experience_section = document.querySelector('#experience_section');
const contact_section = document.querySelector('#contact_section');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar_scroll', window.scrollY > 0);
})

hamburger.addEventListener('click', () => dropdown.classList.toggle('hidden'));

for (let el of about) {
  el.addEventListener('click', () => about_section.scrollIntoView({ behavior: 'smooth' }));
}

for (let el of experience) {
  el.addEventListener('click', () => experience_section.scrollIntoView({ behavior: 'smooth' }));
}

for (let el of contact) {
  el.addEventListener('click', () => contact_section.scrollIntoView({ behavior: 'smooth' }));
}
