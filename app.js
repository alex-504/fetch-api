fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json(); //convert this response to json -->  // promise
})
.then(function (data) {
  console.log(data);
})