const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());
server.use(
    express.urlencoded({
        extended: true,
    })
);

server.get("/", (req, res) => {
    res.send("OK");
});

server.get("/hello/:name", (req, res) => {
    const { name } = req.params;
    if (name) {
        res.send("Hello, " + name);
    }
});

server.post("/hello", (req, res) => {
    const { name } = req.body;
    res.send({ message: "Greetings from backend. Hello, " + name });
});

server.get("*", (req, res) => {
    res.status(404).send("Error");
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log("Server started on", PORT);
});
