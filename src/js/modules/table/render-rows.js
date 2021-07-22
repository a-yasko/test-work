import checkZeroDate from './check-zero-date';
import renderModalInfo from '../info-payment/render-modal-info';
import checkAmount from './check-amount';

function render(data) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = ``;

  data.forEach(item => {
    let yyyy = new Date(item.date).getFullYear(),
        mm = new Date(item.date).getMonth() + 1,
        dd = new Date(item.date).getDate(),
        hours = new Date(item.date).getHours(),
        minutes = new Date(item.date).getMinutes();

    const trForTbody = document.createElement('tr');
    trForTbody.innerHTML = `
      <tr>
        <td>${item.orderid}</td>
        <td>${yyyy}-${checkZeroDate(mm)}-${checkZeroDate(dd)} ${checkZeroDate(hours)}:${checkZeroDate(minutes)}</td>
        <td>${checkAmount(item.amount)}</td>
        <td>${item.cardmask}</td>
      </tr>
    `;
    trForTbody.setAttribute('data-id', item.id);
    tbody.append(trForTbody);

    let x1, x2, y1, y2;

    trForTbody.addEventListener('mousedown', event => {
      x1 = event.screenX;
      y1 = event.screenY;
    });

    trForTbody.addEventListener('mouseup', event => {
      x2 = event.screenX;
      y2 = event.screenY;
      if (x1 === x2 && y1 === y2) {
        document.querySelector('.mdl').classList.remove('hide-info');
        document.querySelector('.mdl').classList.add('show-info');
        document.querySelector('.mdl').setAttribute('data-id', item.id);
        renderModalInfo(trForTbody.getAttribute('data-id'));
      }
    });
  });
}

export default render;