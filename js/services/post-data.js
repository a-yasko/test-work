import axios from 'axios';
import getData from './get-data';
import render from '../modules/table/render-rows'
import sort from '../modules/sort/sort';

async function postData(data, url) {
  const modal = document.querySelector('.modal'),
        form = document.querySelector('.modal form');

  await axios.post(url, {
    orderid: data.orderid,
    date: data.date,
    amount: data.amount,
    cardmask: data.cardmask
  })
  .then(response => {
    alert(response.statusText);
    modal.classList.add('hide');
    modal.classList.remove('show');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.removeAttribute('role');
    document.querySelector('.modal-backdrop').remove();
    document.body.classList.remove('modal-open');
    document.body.style.cssText = ``;
    form.reset();
  })
  .catch(error => alert(error))

  const req = await getData(url);
  render(req);
  sort(req);
}

export default postData;