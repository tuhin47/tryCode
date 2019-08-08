const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(4000, () => {
    console.log('MP4 Server @ port 4000');
});
app.get('/download', (req,res) => {
var URL = req.query.URL;
console.log(URL);
var stream = ytdl(URL);
stream.on('info', (info) => {
res.header('Content-Disposition', 'attachment; filename=' + info.title + '.mp4');
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
})});