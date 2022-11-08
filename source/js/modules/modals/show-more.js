const fullText = document.querySelector('.about__text--fulltext');
const aboutBtn = document.querySelector('.about__button');

const showMore = () => aboutBtn.addEventListener('click', () => {
  if (fullText.classList.contains('is-hidden')) {
    fullText.classList.remove('is-hidden');
    aboutBtn.textContent = 'Свернуть';
  } else {
    fullText.classList.add('is-hidden');
    aboutBtn.textContent = 'Подробнее';
  }
});

export {showMore};
