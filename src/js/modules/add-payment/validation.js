import postData from "../../services/post-data";
import Inputmask from "inputmask";
import checkZeroDate from "../table/check-zero-date";

function validation() {
  const inputs = document.querySelectorAll('.modal form input'),
        btn = document.querySelector('.modal form .btn-success'),
        p = document.querySelectorAll('.modal form p'),
        orderid = inputs[0],
        date = inputs[1],
        amount = inputs[2],
        cardmask = inputs[3];

  Inputmask({"mask": "9{1,7}.9{1,2}"}).mask(amount);
  Inputmask({"mask": "999999xxxxxx9999"}).mask(cardmask);

  let objIsValid = {
    isValidAmount: 0,
    isValidCardmask: 0
  }

  function blurIsValid(regExp, i, isValid) {
    if (!inputs[i].value.match(regExp) && inputs[i].value) {
      p[i].style.opacity = '1';
      inputs[i].classList.add('invalid');
      objIsValid[isValid] = 0;
    } else if (inputs[i].value.match(regExp)) {
      p[i].style.opacity = '0';
      inputs[i].classList.remove('invalid');
      objIsValid[isValid] = 1;
    }
  }

  function invalidRemove(i) {
    p[i].style.opacity = '0';
    inputs[i].classList.remove('invalid');
  }

  function clickIsValid(i, isValid) {
    if (!isValid) {
      p[i].style.opacity = '1';
      inputs[i].classList.add('invalid');
    } else {
      p[i].style.opacity = '0';
      inputs[i].classList.remove('invalid');
    }
  }

  // Order Id
  orderid.addEventListener('keypress', event => {
    const regExp = /[a-z]|\d|\-/gi;
    const value = event.key.match(regExp);
    if (!value && event.key !== 'Enter') {
        event.preventDefault();
    }
  });
  orderid.addEventListener('blur', event => {
    event.target.value = event.target.value.replace(/\-+/gi, '-')
    .replace(/^\-/gi, '')
    .replace(/\-$/gi, '');
  });
  orderid.addEventListener('input', () => {
    invalidRemove(0);
  });

  // Date
  date.addEventListener('input', () => {
    invalidRemove(1);
  });

  // Amount
  amount.addEventListener('blur', () => {
    blurIsValid(/\b\d+\.\d{2}\b/g, 2, 'isValidAmount');
  })
  amount.addEventListener('input', () => {
    invalidRemove(2);
  });

  // Cardmask
  cardmask.addEventListener('blur', () => {
    blurIsValid(/\b\d{6}x{6}\d{4}\b/g, 3, 'isValidCardmask');
  });
  cardmask.addEventListener('input', () => {
    invalidRemove(3);
  });

  btn.addEventListener('click', event => {
    event.preventDefault();

    let yyyy = new Date(date.value).getFullYear(),
        mm = new Date(date.value).getMonth() + 1,
        dd = new Date(date.value).getDate(),
        hours = new Date(date.value).getHours(),
        minutes = new Date(date.value).getMinutes();

    inputs.forEach((item, i) => {
      if (!item.value.trim()) {
        p[i].style.opacity = '1';
        inputs[i].classList.add('invalid');
      } else {
        p[i].style.opacity = '0';
        inputs[i].classList.remove('invalid');
      }
    });

    clickIsValid(2, objIsValid.isValidAmount);
    clickIsValid(3, objIsValid.isValidCardmask);

    if (inputs[0].value.trim() && inputs[1].value.trim() && inputs[2].value.trim() && inputs[3].value.trim() && objIsValid.isValidAmount && objIsValid.isValidCardmask) {
      postData({
        orderid: orderid.value.trim(),
        date: `${yyyy}-${checkZeroDate(mm)}-${checkZeroDate(dd)} ${checkZeroDate(hours)}:${checkZeroDate(minutes)}`,
        amount: Number(amount.value.trim()),
        cardmask: cardmask.value.trim()
      }, 'http://localhost:3000/payments');
    }
  });
}

export default validation;