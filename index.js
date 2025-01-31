const express = require('express');
const path = require('path'); // ใช้สำหรับจัดการ path
const app = express();
const port = 80;

// กำหนดให้ Express เสิร์ฟไฟล์ static เช่น HTML, CSS, JS จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// เมื่อเข้าหน้า root ให้ส่งไฟล์ index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});