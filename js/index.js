import getData from './services/get-data';
import render from './modules/table/render-rows';
import renderTable from './modules/table/render-table';
import sort from './modules/sort/sort';
import addPayment from './modules/add-payment/add-payment';
import createModalInfo from './modules/info-payment/create-modal-info';

document.addEventListener('DOMContentLoaded', () => {
  async function app() {
    const reqPayments = await getData('http://localhost:3000/payments');
    const reqHeads = await getData('http://localhost:3000/theads');

    renderTable(reqHeads);
    render(reqPayments);
    sort(reqPayments);
    addPayment();
    createModalInfo();
  }
  
  app();
});
