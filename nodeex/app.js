const express = require('express');

const app = express();
 
app.get('/', function (req, res){
    res.send('Hello World')

})

app.get('/alien', function(req, res){
    res.send('welcom isaac baba')
})
app.listen(9000, function(req, res){
    console.log('Running..');
});