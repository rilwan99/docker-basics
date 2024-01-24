const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.json({messgae: "Docker is easy"})
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app is listening on http://localhost:${port}`));

