const BODY = document.body;
const A_ARR = document.querySelectorAll('a');
const INPUT_ARR = document.querySelectorAll('input');
const BUTTON_ARR = document.querySelectorAll('button');
const TEXTAREA_ARR = document.querySelectorAll('textarea');
const menuBtn = document.querySelector('.menu__button');
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.modal__close-btn');
const overlay = modal.querySelector('.modal__overlay');
const popup = document.querySelector('.popup');

const setTabindex = (arr, num) => {
  arr.forEach((e) => {
    e.setAttribute('tabindex', num);
  });
};

const createElementsArr = () => {
  const elementsArr = [];
  A_ARR.forEach((node) => {
    elementsArr.push(node);
  });
  INPUT_ARR.forEach((node) => {
    elementsArr.push(node);
  });
  BUTTON_ARR.forEach((node) => {
    elementsArr.push(node);
  });
  TEXTAREA_ARR.forEach((node) => {
    elementsArr.push(node);
  });
  return elementsArr;
};

const openModal = () => {
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('is-active');
    BODY.style.overflow = 'hidden';
    setTabindex(createElementsArr(), -1);
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = modal.querySelectorAll(focusableElements);
    setTabindex(focusableContent, 0);
    popup.setAttribute('tabindex', '0');
  });
};

const closeModal = () => {
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
    BODY.style.overflow = 'visible';
    setTabindex(createElementsArr(), 0);
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      modal.classList.remove('is-active');
      BODY.style.overflow = 'visible';
      setTabindex(createElementsArr(), 0);
    }
  });
  overlay.addEventListener('click', () => {
    modal.classList.remove('is-active');
    BODY.style.overflow = 'visible';
    setTabindex(createElementsArr(), 0);
  });
};

export {openModal, closeModal};
