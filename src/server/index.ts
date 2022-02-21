import http from 'http';
import express from 'express';
import cors from 'cors';
import {Server} from 'colyseus';
import { monitor} from "@colyseus/monitor";
import { WebSocketTransport } from "@colyseus/ws-transport"

import { LudoGame } from './rooms/LudoGame';

const port = Number(process.env.PORT || 2567);
const app = express();

app.use(cors());
app.use(express.json())

const server = http.createServer(app);

// @see https://docs.colyseus.io/colyseus/server/transport/
const gameServer = new Server({
    transport: new WebSocketTransport({
        server
    })
});

gameServer.define('ludo', LudoGame)

app.use("/colyseus", monitor());

gameServer.listen(port);
console.log(`Hello World localhost::${ port }`)