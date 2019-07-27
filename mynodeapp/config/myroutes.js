var express = require('express');
var app=express();

//var router = express.Router();
const multer = require('multer');
const upload = multer();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    console.log('marhaba');
    res.render('myview', {});
});



app.post('/api/askjnj', upload.any(), (req, res) => {
    console.log('Here');
    console.log('Files: ', req.files);
    res.send('ok');
});
app.listen(3000, function () {
    console.log("Working on port 3000");
});
// module.exports = router;