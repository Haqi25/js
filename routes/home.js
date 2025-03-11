const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Halo, Selamat Datang di Website Node.js!" });
});

module.exports = router;
