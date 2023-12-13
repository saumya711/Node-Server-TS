const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
 
const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(bodyParser());
app.use(cookieParser());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});
