var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', __dirname + '/server/src/views');

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index');
    // res.sendfile('./index.html');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});