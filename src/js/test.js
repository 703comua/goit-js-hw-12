import axios from 'axios';

export const testFn = async () => {
  // Контролює кількість елементів в групі
  let limit = 30;

  // Кількість груп в колекції
  const totalPages = Math.ceil(100 / limit);

  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  console.log('Posts: ', response.data);
};
