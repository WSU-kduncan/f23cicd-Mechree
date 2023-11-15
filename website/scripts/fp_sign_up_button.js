"use strict"

// prettier-ignore
const newsletterBtn = document.getElementById('newsletter-btn');

// prettier-ignore
const newsletterFormWrapper = document.querySelector('.newsletter-form-wrapper');

// prettier-ignore
const newsletterForm = document.getElementById('newsletter-form');

// prettier-ignore
const newsletterCloseBtn = document.getElementById('newsletter-close-btn');

// prettier-ignore
newsletterBtn.addEventListener('click', () => {
  newsletterFormWrapper.style.display = 'block';
});

// prettier-ignore
newsletterCloseBtn.addEventListener('click', () => {
  newsletterFormWrapper.style.display = 'none';
});

// prettier-ignore
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterForm.reset();
  newsletterFormWrapper.style.display = 'none';
});
