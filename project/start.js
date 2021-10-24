var express = require('express');
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

app.get('/cash', function(request, response) {
  response.render('pages/cash');
});

app.get('/qrcode', function(request, response) {
  response.render('pages/qrcode');

});

app.get('/loading', function(request, response) {
  response.render('pages/loading');
  const { spawn } = require('child_process');
  const pp = spawn('python3', ['app.py']);

  pp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  pp.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  pp.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.get('/error', function(request, response) {
  response.render('pages/error');
});

app.get('/end', function(request, response) {
  response.render('pages/end');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
