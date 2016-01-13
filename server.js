var express = require('express');
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(express.static(__dirname + '/vik'));
app.get('/vik', function(req, res) {
    res.send('hellhhho world');
});
app.get('/', function(req, res){
        res.send('main world');
});

app.listen(port,ipaddress);