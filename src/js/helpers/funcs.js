export const hideLoader = loaderEl => {
  loaderEl.classList.add('is-hidden');
};

export const showLoader = loaderEl => {
  loaderEl.classList.remove('is-hidden');
};

export const showLoadMoreBtn = loadMoreBtnEl => {
  loadMoreBtnEl.classList.remove('is-hidden');
}

export const hideLoadMoreBtn = loadMoreBtnEl => {
  loadMoreBtnEl.classList.add('is-hidden');
}

export const disableSearchFormSubmitBtn = searchFormSubmitBtnEl => {
  searchFormSubmitBtnEl.classList.add('is-disabled');
}

export const enableSearchFormSubmitBtn = searchFormSubmitBtnEl => {
  searchFormSubmitBtnEl.classList.remove('is-disabled');
}
