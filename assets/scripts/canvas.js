const canvas_El = document.querySelector('#board');
const blob_El = document.querySelector('.blob');
const root_El = document.querySelector(':root');

canvas_El.addEventListener('click', (e) => {
  let x = e.clientX;
  let y = e.clientY;

  root_El.style.setProperty('--x', `${x}px`);
  root_El.style.setProperty('--y', `${y}px`);

  blob_El.classList.add('active');

  setTimeout(() => {
    blob_El.classList.remove('active');
  }, 1000);
});
