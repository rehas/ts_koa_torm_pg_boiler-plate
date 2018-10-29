import {Server} from 'http';
import * as Koa from 'koa';

const app = new Koa();
const server = new Server(app.callback());
const port = process.env.PORT || 4000;

console.log("Hello World, boiler plate code init!");

server.listen(port, x=> console.log("Hola, suave mente!" + x  ));
console.log(`Listening on port ${port}`);
