// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
//const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/new', (req, res) => {
  res.send('SOme thing new');
});




//re


app.get('/bots', (req, res) => {
  var request=require('request');

var options = {
  headers: {
    'Authorization': '58f82c84884edb320127f3df'
  }
};
var result = {};

request.get('http://robo.nyllab.com/bots',options,function(err, data){
  //if(err) //TODO: handle err
    if(data.statusCode == 200 ) {//etc
     // console.log(data.body);
      res.json(data.body)
    }
});

//
});

app.get('/bots/:id', (req, res) => {
  var request=require('request');

  var options = {
    headers: {
      'Authorization': '58f82c84884edb320127f3df'
    }
  };
  var result = {};



  var roboId = req.param('id')//getParam('id');


  request.get('http://robo.nyllab.com/bots/' +roboId ,options,function(err, data){
    //if(err) //TODO: handle err
    if(data.statusCode == 200 ) {//etc
      //console.log(data.body);
      res.json(data.body)
    }
  });

//
});

//rid

app.get('/reviews/:rid', (req, res) => {
  var request=require('request');

  var options = {
    headers: {
      'Authorization': '58f82c84884edb320127f3df'
    }
  };
  var result = {};


  var roboReviewId = req.param('rid')//getParam('id');


  request.get('http://robo.nyllab.com/reviews/' +roboReviewId ,options,function(err, data){
    //if(err) //TODO: handle err
    if(data.statusCode == 200 ) {//etc
      //console.log(data.body);
      res.json(data.body)
    }
  });

//
});

// Set our api routes
//app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '2202';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
