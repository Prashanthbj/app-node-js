const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML, CSS, and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Web application running on port ${PORT}`);
});
