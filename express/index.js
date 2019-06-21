const express = require("express");
const app = express();
const port = 3900;

const members = [
    { id: "001", name: "Senjor" },
    { id: "002", name: "Alex" },
    { id: "003", name: "Tony" },
    { id: "004", name: "John" },
    { id: "005", name: "Twilight" },
]

app.get("/api/members", (req, res) => {
    res.send(members);
});

app.get("/", (req, res) => {
    res.send({ Error: "Api not found." });
});

app.listen(port, () => {
    console.log("Express server is listening on Port: %s", port);
});