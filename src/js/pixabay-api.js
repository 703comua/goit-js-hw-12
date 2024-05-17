const API_KEY = '43830047-c5fe5a5c9108224ed65675c7e';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const fetchPhotos = async (query, photosCurrentPage = 1) => {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: PER_PAGE,
      page: photosCurrentPage,
    },
  });

  return response.data;
};
