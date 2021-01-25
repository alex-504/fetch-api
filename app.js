fetch('https://jsonplaceholder.typicode.com/users')
.then(checkStatus)
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log('There was an error', error);
});

function checkStatus(response) {
  if (response.ok) {
      return response;
  }

  let error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}
