import Inputmask from 'inputmask';

const createMask = () => {
  const form = document.querySelector('form');
  const inputTel = form.querySelector('input[type="tel"]');

  if (form) {
    const mask = new Inputmask('+7(999)999-99-99');
    mask.mask(inputTel);
  }
};

export {createMask};
