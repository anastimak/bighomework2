export const fetchProducts = (token) => fetch('https://api.react-learning.ru/products', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
})