var express = require('express');

// communication between javascript and js files 
// const { spawn } = require('child_process');
// const childPython = spawn('python', ['etherum.py']);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

// set up the app's routing
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/loading', function(request, response) {
  response.render('pages/loading');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

