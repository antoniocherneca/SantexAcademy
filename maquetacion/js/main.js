const num_cities = document.querySelector('#counter-cities-number');
const num_mentors = document.querySelector('#counter-mentors-number');
const num_participants = document.querySelector('#counter-participants-number');

let amount_cities = 0;
let amount_mentors = 0;
let amount_participants = 0;
const nav = document.querySelector('.hamburguer button');
const lupa = document.querySelector('.lupa');
const mobileMenu = document.querySelector('.mobile-menu');
const search = document.querySelector('.search');

nav.addEventListener('click', () => {
  nav.classList.toggle('open');
  mobileMenu.classList.toggle('showMobileMenu');
  if(search.classList.contains('showBoxSearch')) {
    search.classList.remove('showBoxSearch');
  }
});

lupa.addEventListener('click', () => {
  search.classList.toggle('showBoxSearch');
  if(mobileMenu.classList.contains('showMobileMenu')) {
    mobileMenu.classList.remove('showMobileMenu');
  }
});

let time_cities = setInterval(() => {
  amount_cities++;
  num_cities.textContent = amount_cities;

  if(amount_cities == 58) {
    clearInterval(time_cities);
  }
}, 9);

let time_mentors = setInterval(() => {
  amount_mentors++;
  num_mentors.textContent = amount_mentors;

  if(amount_mentors == 50) {
    clearInterval(time_mentors);
  }
}, 9);

let time_participants = setInterval(() => {
  amount_participants += 4;
  num_participants.textContent = amount_participants;

  if(amount_participants > 301) {
    num_participants.textContent -= 3;
    clearInterval(time_participants);
  }
}, 1);

window.onscroll = function() {
  if(document.documentElement.scrollTop > 310) {
    document.querySelector('.button-up').classList.add('show');
  }
  else {
    document.querySelector('.button-up').classList.remove('show');
  }
}
 
document.querySelector('.button-up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});