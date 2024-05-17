import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotos, PER_PAGE } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

// import { testFn } from './js/test.js';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const searchFormSubmitBtnEl = document.querySelector(
  '.js-search-form-submit-btn'
);
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

// Search params
let query = '';
let photosCurrentPage = 1;
let totalPages = 0;

const lightbox = new SimpleLightbox('.item-gallery__link', {
  captionsData: 'alt',
  captionsDelay: 250,
});

////////////////////////////////
// -1- Search form submit function
////////////////////////////////
const onSearch = async event => {
  event.preventDefault();
  galleryEl.innerHTML = '';
  photosCurrentPage = 1;

  // Hide laod more btn
  hideLoadMoreBtn();

  // Get query string
  const form = event.currentTarget;
  query = form.elements.searchword.value.trim();

  // Check is empty query
  if (query === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    form.reset();
    return;
  }

  try {
    // Disable search form submit button
    disableSearchFormSubmitBtn();

    // Show loader
    showLoader();

    // Get photos data
    const { hits, totalHits } = await fetchPhotos(query, photosCurrentPage);

    // Check is empty query
    if (totalHits === 0) {
      // Enable search form submit button
      enableSearchFormSubmitBtn();

      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      form.reset();
      hediLoader();
      return;
    }

    // Render photos
    galleryEl.insertAdjacentHTML('beforeend', createMarkup(hits));

    lightbox.refresh();

    // Hide loader
    hediLoader();

    // Enable search form submit button
    enableSearchFormSubmitBtn();

    totalPages = Math.ceil(totalHits / PER_PAGE);
    if (totalPages > 1) {
      // Show laod more btn
      showLoadMoreBtn();
    }
  } catch (error) {
    // Enable search form submit button
    enableSearchFormSubmitBtn();

    // Hide loader
    hideLoader();

    iziToast.error({
      message: 'Search params is not valid!',
      position: 'topRight',
    });
    form.reset();
    return;
  }

  // Reset search form
  form.reset();
};

// Load search form submit
searchFormEl.addEventListener('submit', onSearch);

const smoothScrollOnLoadMore = () => {
  const lastPhoto = document.querySelector('.gallery__item');
  const photosHeight = lastPhoto.getBoundingClientRect().height;
  // console.log(" photosHeight:", photosHeight)
  const twoPhotosHeight = photosHeight * 2;
  // console.log("twoPhotosHeight:", twoPhotosHeight)
  window.scrollBy({
    top: twoPhotosHeight,
    left: 0,
    behavior: 'smooth',
  });
  // window.scrollBy(0, 1000);
  // window.scrollBy(0, window.innerHeight);
};

////////////////////////////////
// -2- Load more btn press function
////////////////////////////////
const onLoadMorePress = async event => {
  try {
    // Hide laod more btn
    hideLoadMoreBtn();

    // Show loader
    showLoader();

    photosCurrentPage += 1;

    // Get photos data
    const { hits, totalHits } = await fetchPhotos(query, photosCurrentPage);

    // Render photos
    galleryEl.insertAdjacentHTML('beforeend', createMarkup(hits));

    lightbox.refresh();

    smoothScrollOnLoadMore();

    // Hide loader
    hediLoader();

    totalPages = Math.ceil(totalHits / PER_PAGE);
    if (photosCurrentPage < totalPages) {
      // Show laod more btn
      showLoadMoreBtn();
    } else {
      loadMoreBtnEl.removeEventListener('click', onLoadMorePress);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
  } catch (error) {
    // Enable search form submit button
    enableSearchFormSubmitBtn();

    // Hide loader
    hideLoader();

    iziToast.error({
      message: 'Search params is not valid!',
      position: 'topRight',
    });
    form.reset();
    return;
  }
};

// Load more btn click
loadMoreBtnEl.addEventListener('click', onLoadMorePress);

///////////
// Helpers
///////////
function hediLoader() {
  loaderEl.classList.add('is-hidden');
}

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

function showLoadMoreBtn() {
  loadMoreBtnEl.classList.remove('is-hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtnEl.classList.add('is-hidden');
}

function disableSearchFormSubmitBtn() {
  searchFormSubmitBtnEl.classList.add('is-disabled');
}

function enableSearchFormSubmitBtn() {
  searchFormSubmitBtnEl.classList.remove('is-disabled');
}

// galleryEl.innerHTML = '';

// const testFormEl = document.querySelector('.js-test-form');
// testFormEl.addEventListener('submit', onTestFormSearch);

// function onTestFormSearch() {
//   event.preventDefault();
//   testFn();
// }
