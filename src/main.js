hideLoader();
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

let query;
const search = document.querySelector('form');
search.addEventListener('submit', clickSearch);

async function clickSearch(event) {
  event.preventDefault();
  clearGallery();
  query = event.target.elements['search-text'].value.trim();

  if (query.trim() === '') {
    iziToast.show({
      message: 'Please, type some text',
    });
    search.reset();
    return;
  }

  showLoader();

  const data = await getImagesByQuery(query) 
    try {
      if (!data.hits.length) {
    hideLoader();
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  hideLoader();
  createGallery(data.hits);
}
      catch {
      error => {
        handleAxiosError(error)
      }
    }
    finally {
      () => {
        hideLoader()
        search.reset();
      };
    }
  }


function handleAxiosError(error) {
let message = '';
  if (error.response) {
    message = `Server error: ${error.response.status}`;
  } else if (error.request) {
    message = 'No response from server. Please try again later.';
  } else {message = `Request error: ${error.message}`;
  }
  console.error('Axios error:', error);
iziToast.show({ message, backgroundColor: 'red' })
  }

iziToast.settings({
  position: 'center',
  backgroundColor: 'magenta',
  messageSize: '20',
  timeout: 3000,
});
