export default class Table {
  constructor(data) {
    this.data = data;
  }

  renderTable() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
    <table class="table table-striped">
      <thead></thead>
      <tbody></tbody>
    </table>
    `;
    document.querySelector('.app').append(container);
  }

  renderTheads() {
    const tr = document.createElement('tr');
    for (const item in this.data[0]) {
      const th = `<th data-name=${item}>${this.data[0][item]}</th>`;
      tr.innerHTML += th;
    }
    document.querySelector('thead').append(tr);
  }

  renderRows() {
    
  }
}

// function renderTable(data) {
//   const app = document.querySelector('.app');

//   const container = document.createElement('div');
//   container.classList.add('container');

//   const table = document.createElement('table');
//   table.classList.add('table', 'table-striped');

//   const thead = document.createElement('thead');
//   const tbody = document.createElement('tbody');
//   const trForThead = document.createElement('tr');

//   for (const item in data[0]) {
//     const th = document.createElement('th');
//     th.textContent = data[0][item];
//     th.setAttribute('data-name', item);
//     trForThead.append(th);
//   }
  
//   thead.append(trForThead);
//   table.append(thead, tbody);
//   container.append(table);
//   app.append(container);
// }

// export default renderTable;