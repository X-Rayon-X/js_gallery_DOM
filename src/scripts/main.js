'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const largeImg = document.getElementById('largeImg');

  largeImg.src = link.href;
});
