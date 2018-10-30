import 'reflect-metadata'
import {useKoaServer} from 'routing-controllers';
import {Server} from 'http';
import * as Koa from 'koa';
import UserController from './users/controller';
import setupDb from './db'

const app = new Koa();
const server = new Server(app.callback());
const port = process.env.PORT || 4000;

useKoaServer(app, {
  cors: true,
  controllers:[
    UserController
  ]
})

console.log("Hello World, boiler plate code init!");

setupDb()
  .then(_=> {
    server.listen(port, x=> console.log("Hola, suave mente!" + x  ));
    console.log(`Listening on port ${port}`);
  })
  .catch(err=> console.log(err))

