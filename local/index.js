import express from "express";
import bodyParser from "body-parser";

import { handler } from "../lambda/custom";

function CreateHandler(handler) {
    return (req, res) => {
        handler(req.body, null, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(result);
        });
    };
}

// create server
const server = express();
const port = process.env.port || process.env.PORT || 3000
server.listen(port, function () {
    console.log(`listening on localhost:${port}`);
});


// parse json
server.use(bodyParser.json());

// connect the lambda functions to http
server.post("/", CreateHandler(handler));

