var express = require('express');
var app=express();

//var router = express.Router();
const multer = require('multer');
const upload = multer();
app.set('view engine', 'ejs');

app.get('/BarangAll', function (req, res) {
    console.log('marhaba');
    var data = [{
        "id_barang": "0ca287da-9990-44db-a6f8-c6b05ec5d504",
        "nama": "keju",
        "jenis": "makanan",
        "harga_beli": 5000,
        "harga_jual": 9000,
        "stok_awal": 22,
        "transfer": 0,
        "penjualan": 14,
        "adjustment": 0,
        "stok_akhir": 8,
        "barang_laris": 0,
        "uom": "pcs"
    }, {
        "id_barang": "464e5c0e-4ed1-4382-958f-df8e4ec724cd",
        "nama": "kornet",
        "jenis": "makanan",
        "harga_beli": 8000,
        "harga_jual": 12000,
        "stok_awal": 90,
        "transfer": 0,
        "penjualan": 12,
        "adjustment": 0,
        "stok_akhir": 78,
        "barang_laris": 0,
        "uom": "unit"
    }, {
        "id_barang": "568ba244-dad5-4bbc-ad41-b38098c1da7a",
        "nama": "baygon",
        "jenis": "Lain_Lain",
        "harga_beli": 34000,
        "harga_jual": 40000,
        "stok_awal": 10,
        "transfer": 0,
        "penjualan": 6,
        "adjustment": 0,
        "stok_akhir": 4,
        "barang_laris": 0,
        "uom": "unit"
    }, {
        "id_barang": "5ef61405-6029-4f62-b2af-189f436e9315",
        "nama": "sarden",
        "jenis": "makanan",
        "harga_beli": 50000,
        "harga_jual": 60000,
        "stok_awal": 11,
        "transfer": 0,
        "penjualan": 5,
        "adjustment": 0,
        "stok_akhir": 6,
        "barang_laris": 0,
        "uom": "unit"
    }, {
        "id_barang": "76f27deb-d16c-41e3-b87f-0b23d0675c39",
        "nama": "hit",
        "jenis": "Lain_Lain",
        "harga_beli": 14000,
        "harga_jual": 20000,
        "stok_awal": 12,
        "transfer": 0,
        "penjualan": 8,
        "adjustment": 0,
        "stok_akhir": 4,
        "barang_laris": 0,
        "uom": "unit"
    }];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(data);
});


app.listen(1111, function () {
    console.log("Working on port 1111");
});