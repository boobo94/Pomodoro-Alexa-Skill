import express from "express";
import bodyParser from "body-parser";

import { handler } from "../lambda/custom";

const port = 3000

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
server.listen(process.env.port || process.env.PORT || port, function () {
    console.log(`listening on localhost:${port}`);
});


// parse json
server.use(bodyParser.json());

// connect the lambda functions to http
server.post("/", CreateHandler(handler));

