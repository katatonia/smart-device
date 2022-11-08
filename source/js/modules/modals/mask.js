import Inputmask from 'inputmask';

const createMask = () => {
  const inputTel = document.querySelector('.form__input--tel');

  const mask = new Inputmask('+7(999)999-99-99');
  mask.mask(inputTel);
};

export {createMask};
