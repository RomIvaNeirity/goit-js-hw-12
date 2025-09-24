import axios from 'axios';
export default getImagesByQuery;

async function getImagesByQuery(query) {
  const resp = await axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '28573378-d6ea96aa58230c7b9cb77205d',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return resp.data;
}
