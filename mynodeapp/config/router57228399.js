var express = require('express');
var app=express();

//var router = express.Router();
const multer = require('multer');
const upload = multer();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    let selectedTag;
    var projects=[{
        title:"one",
        tags:['Appartements']
    },{
        title:'two',
        tags:['Maisons']
    }];
    res.render('projects', {selectedTag:'Appartements',projects:projects});
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
// module.exports = router;