fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json()) // one line only!

//convert this response to json -->  // *promise
// if promise fulfills
.then(data => {
  console.log(data);
})

// if the promise throws error
.catch(error => {
  console.log('There was an error, error');
})