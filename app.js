fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'authorization': 'Bearer 123'
  },
  body: JSON.stringify({
    data: 456
  })
})

.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log('There was an error, error');
})
