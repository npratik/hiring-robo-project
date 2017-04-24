// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');



const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/bots', (req, res) => {
  var request=require('request');

var options = {
  headers: {
    'Authorization': '58f82c84884edb320127f3df'
  }
};
var result = {};

request.get('http://robo.nyllab.com/bots',options,function(err, data){

    if(data.statusCode == 200 ) {
      res.json(data.body)
    } else {
      console.log("error in getting Robo Assistant list");
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



  var roboId = req.param('id')


  request.get('http://robo.nyllab.com/bots/' +roboId ,options,function(err, data){

    if(data.statusCode == 200 ) {
      //console.log(data.body);
      res.json(data.body)
    }else {
      console.log("error in getting Robo Assistant ");
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


  var roboReviewId = req.param('rid')


  request.get('http://robo.nyllab.com/reviews/' +roboReviewId ,options,function(err, data){

    if(data.statusCode == 200 ) {
      res.json(data.body)
    }else {
      console.log("error in getting Robo Assistant Reviews");
    }
  });

//
});



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
