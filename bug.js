const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetch data from a database or external API
  // This is where the bug happens if the operation takes too long
  // and the request times out before the response is sent
  getData((data) => {
    res.send(data); 
  });
});

function getData(callback) {
  // Simulate an asynchronous operation that might take a long time
  setTimeout(() => {
    const data = { message: 'Data fetched successfully!' };
    callback(data);
  }, 5000); // Simulate a 5-second delay
}