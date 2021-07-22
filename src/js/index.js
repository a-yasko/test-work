import getData from './services/get-data';
import render from './modules/table/render-rows';
// import renderTable from './modules/table/render-table';
import Table from './modules/table/render-table';
import sort from './modules/sort/sort';
import addPayment from './modules/add-payment/add-payment';
import createModalInfo from './modules/info-payment/create-modal-info';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  async function app() {
    const reqPayments = await getData('http://localhost:3000/payments');
    const reqHeads = await getData('http://localhost:3000/theads');
    const table = new Table(reqHeads);

    // renderTable(reqHeads);
    table.renderTable();
    table.renderTheads();
    render(reqPayments);
    sort(reqPayments);
    addPayment();
    createModalInfo();
  }
  
  app();
});
