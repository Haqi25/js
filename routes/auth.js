const express = require("express");
const router = express.Router();

// Data pengguna (contoh sederhana, tanpa database)
const users = [
    { username: "admin", password: "123" },
    { username: "user", password: "password" }
];

// Endpoint Login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Cari user berdasarkan username dan password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: "Login berhasil!" });
    } else {
        res.status(401).json({ success: false, message: "Login gagal! Periksa username dan password." });
    }
});

module.exports = router;
