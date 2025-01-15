const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Data fetched successfully!' };
      resolve(data);
    }, 5000); 
  });
}
