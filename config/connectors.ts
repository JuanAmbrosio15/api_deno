import { MongoDBConnector, MySQLConnector } from "../dependences.ts";

export const connectorMariaDB = new MySQLConnector({
  database: "quotes",
  host: "127.0.0.1",
  username: "denoDev",
  password: "mariadb",
  port: 3307,
});

export const connectorMongoDB = new MongoDBConnector({
     //"mongodb://usuario:contraseña@host:puerto"
  uri: "mongodb://pabloDev:17920310@localhost:27017",
  database: "quotes",
});
