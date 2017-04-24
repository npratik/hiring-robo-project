const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const APINew = 'http://robo.nyllab.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

 router.get('/new', (req, res) => {
   res.send('SOme thing new');
});
// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
  .then(posts => {
  res.status(200).json(posts.data);
})
.catch(error => {
  res.status(500).send(error)
});
});

// Get all posts
router.get('/bots', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log(" before axios...");
console.log("url" + APINew);
  axios.get(`${APINew}/bots`)
  .then(bots => {
    console.log(bots);
  //res.status(200).json(bots.data);
})
/*.catch(error => {
  res.status(500).send(error)
});*/
});


/*var options = {
  host: 'localhost',
  port: 7474,
  path: '/db/data',
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

console.log("Start");
var x = http.request(options,function(res){
  console.log("Connected");
  res.on('data',function(data){
    console.log(data);
  });
});

x.end();*/

module.exports = router;
