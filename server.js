const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk menerima pesanan
app.post('/api/order', (req, res) => {
    const order = req.body;
    
    // Simpan pesanan ke database (contoh sederhana tanpa database)
    console.log('Pesanan diterima:', order);

    // Respon sukses dengan ID pesanan
    res.json({
        message: 'Pesanan berhasil diterima',
        orderId: Math.floor(Math.random() * 100000)  // Contoh ID pesanan acak
    });
});

app.listen(port, () => {
    console.log(`API berjalan di http://localhost:${port}`);
});
