import render from '../table/render-rows';

function sort(data) {
  const theads = document.querySelectorAll('thead th');
  let count = 0,
      nameHead;

  function sortCol(name) {
    if (count === 0) {
      render(data.sort((a, b) => {
        if (a[name] < b[name]) return -1;
        if (a[name] > b[name]) return 1;
        return 0;
      }));
      count++;
      nameHead = name;
    } else if (count === 1) {
      render(data.sort((a, b) => {
        if (a[name] < b[name]) return 1;
        if (a[name] > b[name]) return -1;
        return 0;
      }));
      count--;
    }
  }

  theads.forEach(item => {
    item.addEventListener('click', (event) => {
      if (event.target.dataset.name !== nameHead && count === 1) count = 0;

      theads.forEach(item => {
        item.textContent = item.textContent.replace(/↑|↓/gi, '');
        item.classList.remove('active');
      })
      
      if (count === 0) {
        item.textContent = item.textContent + ' ↑';
      } else if (count === 1) {
        item.textContent = item.textContent + ' ↓';
      }

      item.classList.add('active');

      sortCol(item.getAttribute('data-name'));
    });
  });
}

export default sort;