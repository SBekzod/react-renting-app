const express = require('express');

const path = require('path');
const app = express();

const PORT = 3007
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
    console.log("REACT server is running on PORT: ", PORT);
});