import axios from 'axios';
export default getImagesByQuery;
/* let page = 10 */

async function getImagesByQuery(query, page = 1) {
  const resp = await axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '28573378-d6ea96aa58230c7b9cb77205d',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: "15",
      page
      
    },
  });
  return resp.data;
}
