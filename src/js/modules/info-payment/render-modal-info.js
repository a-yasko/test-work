import getData from '../../services/get-data';
import checkAmount from '../table/check-amount';

async function renderModalInfo(id) {
  const paymentInfo = document.querySelector('.payment-info');
  paymentInfo.innerHTML = '';

  const data = await getData(`http://localhost:3000/payments/${id}`);
  
  for (const item in data) {
    let head;
    let value = data[item];
    
    if (item === 'id') {
      continue;
    }
    if (item === 'orderid') {
      head = 'Номер заказа';
    }
    if (item === 'date') {
      head = 'Дата';
    }
    if (item === 'amount') {
      head = 'Сумма';
      value = checkAmount(value);
    }
    if (item === 'cardmask') {
      head = 'Номер карты';
    }
    const row = document.createElement('div');
    row.classList.add('row');
    row.innerHTML = `
      <div class="col-3">
        <p>${head}:</p>
      </div>
      <div class="col-6">
        <p>${value}</p>
      </div>
    `;
    paymentInfo.append(row);
  }
}

export default renderModalInfo;