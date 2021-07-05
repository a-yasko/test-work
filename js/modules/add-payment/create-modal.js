import plusZero from "../table/zero";

function createModalAddPayment() {
  const now = `${new Date().getUTCFullYear()}-${plusZero(new Date().getMonth() + 1)}-${plusZero(new Date().getDate())}T${plusZero(new Date().getHours())}:${plusZero(new Date().getMinutes())}`;
  const app = document.querySelector('.app');
  const container = document.querySelector('.container');
  const modal = document.createElement('div');
  const addPaymentBtn = document.createElement('div');
  addPaymentBtn.classList.add('add-payment-wrap')
  addPaymentBtn.innerHTML = `
    <div class="container mt-4">
      <a href="" data-bs-toggle="modal" data-bs-target="#add-payment">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 20 20">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
      Добавить платеж</a>
    </div>
  `;

  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', 'add-payment');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'exampleModalLabel');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Добавить платеж</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-1">
              <label for="orderid" class="form-label">Номер заказа</label>
              <input type="text" class="form-control" id="orderid" maxlength="30">
              <p>Введите корректное значение</p>
            </div>
            <div class="mb-1">
              <label for="date" class="form-label">Дата и время</label>
              <input type="datetime-local" class="form-control" min="1970-01-01T00:00" max=${now} id="date">
              <p>Введите корректное значение</p>
            </div>
            <div class="mb-1">
              <label for="amount" class="form-label">Сумма</label>
              <input type="text" class="form-control" id="amount" placeholder="200.00">
              <p>Введите корректное значение</p>
            </div>
            <div class="mb-1">
              <label for="cardmask" class="form-label">Номер карты</label>
              <input type="text" step="0.01" class="form-control" id="cardmask" placeholder="123456xxxxxx1234">
              <p>Введите корректное значение</p>
            </div>
            <button type="submit" class="btn btn-success mt-3">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  `;

  app.append(modal);
  container.append(addPaymentBtn);
}

export default createModalAddPayment;