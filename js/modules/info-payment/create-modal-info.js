import deletePayment from "../../services/delete-payment";

function createModalInfo() {
  const mdl = document.createElement('div');
  mdl.classList.add('mdl', 'hide-info');
  mdl.innerHTML = `
    <div class="mdl-body">
      <a href="" class="close"><i class="bi bi-x-square"></i></a>
      <h3 class="mb-5">Информация о заказе</h3>
      <div class="payment-info mb-5"></div>
      <a href="" class="delete-payment"><i class="bi bi-trash"></i> Удалить заказ</a>
    </div>
  `;

  document.body.append(mdl);

  const close = document.querySelector('.close');
  close.addEventListener('click', event => {
    event.preventDefault();

    mdl.classList.remove('show-info');
    mdl.classList.add('hide-info');
  })

  mdl.addEventListener('click', event => {
    if (event.target.className === 'mdl show-info') {
      mdl.classList.add('hide-info');
      mdl.classList.remove('show-info');
    }
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && mdl.classList.contains('show-info')) {
      mdl.classList.add('hide-info');
      mdl.classList.remove('show-info');
    }
  });

  document.querySelector('.delete-payment').addEventListener('click', event => {
    event.preventDefault();

    const answer = confirm('Really?');
    if (answer) {
      deletePayment(document.querySelector('.mdl').getAttribute('data-id'));
    }
  });
}

export default createModalInfo;