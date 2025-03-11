const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Menyediakan file statis untuk halaman login
app.use(express.static(path.join(__dirname, "public")));

// Gunakan routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);

// Route setelah login sukses
app.get("/welcome", (req, res) => {
    res.send("<h1>Halo, Selamat Datang di Website Node.js!</h1>");
});

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server berjalan di http://localhost:${PORT}`));
