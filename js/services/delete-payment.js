import axios from 'axios';
import getData from './get-data';
import render from '../modules/table/render-rows';
import sort from '../modules/sort/sort';

async function deletePayment(id) {
  const mdl = document.querySelector('.mdl');

  await axios.delete(`http://localhost:3000/payments/${id}`)
  .then(response => {
    console.log(response);
    mdl.classList.add('hide-info');
    mdl.classList.remove('show-info');
  })
  .catch(error => alert(error));

  const req = await getData('http://localhost:3000/payments');
  render(req);
  sort(req);
}

export default deletePayment;