const landingPages_El = document.querySelectorAll('.landing-page-item');
const games_El = document.querySelectorAll('.games-item');
let counterLP = 0;
let counterG = 0;

for (let i = 0; i < landingPages_El.length; i++) {
  landingPages_El[i].addEventListener('click', () => {
    counterLP++;
    if (counterLP === landingPages_El.length) {
      counterLP = 0;
    }
    landingPages_El[i].removeAttribute('data-target');
    landingPages_El[counterLP].setAttribute('data-target', 'active');
  });
}

for (let i = 0; i < games_El.length; i++) {
  games_El[i].addEventListener('click', () => {
    counterG++;
    if (counterG === games_El.length) {
      counterG = 0;
    }
    games_El[i].removeAttribute('data-target');
    games_El[counterG].setAttribute('data-target', 'active');
  });
}
