export const fetchAuth = (values) => fetch('https://api.react-learning.ru/signin', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(values)
})