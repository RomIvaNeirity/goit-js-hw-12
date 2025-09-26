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
let page = 1;  
const search = document.querySelector('form');
search.addEventListener('submit', clickSearch);
const loadBtn = document.querySelector(".load-more-button");
loadBtn.addEventListener("click", loadMore);

async function clickSearch(event) {
  event.preventDefault();
  page = 1;
  clearGallery();
  loadBtn.classList.add("load-more-button-hidden");
  iziToast.destroy();
  query = event.target.elements['search-text'].value.trim();
  if (query.trim() === '') {
    iziToast.show({
      message: 'Please, type some text',
    });
    search.reset();
    return;
  }

  showLoader();

  try { 
    const data = await getImagesByQuery(query, page);
    if (!data.hits.length) {
        iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        });
      loadBtn.classList.add("load-more-button-hidden");
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      loadBtn.classList.add("load-more-button-hidden");
      iziToast.show({timeout: 0,
        position: 'bottomCenter',
        message:
      "We're sorry, but you've reached the end of search results."
      });
  } else {loadBtn.classList.remove("load-more-button-hidden")}

  } catch (error) {
    handleAxiosError(error);
  } finally {
    search.reset();
    hideLoader();    
  }
}

async function loadMore() {
  
  page += 1;
  showLoader();
  
  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
      
    loadBtn.classList.add("load-more-button-hidden");
    const galleryCad = document.querySelector("li");
    const domRect = galleryCad.getBoundingClientRect();
    window.scrollBy({ top: (domRect.height * 2), behavior: "smooth" })

    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      loadBtn.classList.add("load-more-button-hidden");
      iziToast.show({timeout: 0,
        position: 'bottomCenter',
        message:
      "We're sorry, but you've reached the end of search results."
      });
    } else { loadBtn.classList.remove("load-more-button-hidden") }

  } catch (error) {
    handleAxiosError(error);
  } finally {
    hideLoader();    
  }
}

function handleAxiosError(error) {
  let message = '';
  if (error.response) {
    message = `Server error: ${error.response.status}`;
  } else if (error.request) {
    message = 'No response from server. Please try again later.';
  } else {
    message = `Request error: ${error.message}`;
  }
  console.error('Axios error:', error);
  iziToast.show({ message, backgroundColor: 'red' });
}

iziToast.settings({
  position: 'center',
  backgroundColor: 'magenta',
  messageSize: '20',
  timeout: 3000,
});
