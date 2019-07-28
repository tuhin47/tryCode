var express = require('express');
var app=express();

//var router = express.Router();
const multer = require('multer');
const upload = multer();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    console.log('marhaba');
    var results=[
        {
            "_id": "100",
            "Test": [
                {
                    "disposition": "ANSWERED",
                    "count": 4,
                    "duration": 444,
                    "billsec": 419
                },
                {
                    "disposition": "BUSY",
                    "count": 3,
                    "duration": 28,
                    "billsec": 0
                }
            ]
        },
        {
            "_id": "101",
            "Test": [
                {
                    "disposition": "Busy",
                    "count": 4,
                    "duration": 25,
                    "billsec": 0
                }
            ]
        }
    ];
    var data={
        results:results
    };
    res.render('table', {data:data});
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
// module.exports = router;