var express = require('express');
var app=express();
var path = require('path');
app.set('view engine', 'ejs');

var multer = require('multer');
var img=1;
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'image')
  },
  filename: function(req, file, cb) {
    var imgName='img'+img+ path.extname(file.originalname);
    img+=1;
    cb(null,imgName);
  }
});

var upload = multer({
    storage: storage
  });

app.get('/', function (req, res) {
    res.render('multiplefile',{});
});


app.post("/upload", upload.array('avatar'), function(req, res, next) {
    console.log(req.file);
    res.send('ok');
});


app.listen(3000, function () {
    console.log("Working on port 3000");
});