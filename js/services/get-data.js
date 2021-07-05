import axios from 'axios';

async function getData(url) {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (error) {
    return console.log(error, 'Что-то пошло не так...');
  }
}

export default getData;