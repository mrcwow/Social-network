import express from "express";
import router from "./router.js"
import https from "https"
import fs from "fs"

const server = express();
server.use(express.json());
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}));
server.use(router)
server.set('view engine', 'pug');
server.set('views', 'public/pug');
var keys = {key: fs.readFileSync("./public/cert/server.key", 'utf8'), cert: fs.readFileSync("./public/cert/server.crt", 'utf8')};
var server_s = https.createServer(keys, server);
server_s.listen(3000);
