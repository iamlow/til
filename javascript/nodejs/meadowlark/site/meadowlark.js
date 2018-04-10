var express = require('express');
var app = express();

const handlebars = require('express-handlebars').create({default:'main'});
app.engine('handlebars', handlebars.engine);
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Meadowlark Travel');
});

app.get('/about', function(req, res) {
  res.type('text/plain');
  res.send('About Meadowlark Travel');
});

app.use(function(req, res) {
  res.type('text/plain');
  res.status(400);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
      app.get('port') + '; press Ctrl-C to terminate.');
});
