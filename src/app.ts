import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import dotenv from "dotenv";

class App {
  public server;

  constructor() {
    dotenv.config();
    this.server = express();
    this.middlewares();
    this.routes();
    this.database();
  }

  desctructor() {
    this.closeDatabase();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  async database() {
    try {
      const DB_C = process.env.DB_CONNECTION_STRING as string;
      await mongoose.connect(DB_C, {});
      console.log("Successfully connected to the database");
    } catch (error) {
      console.error("Error connecting to the database", error);
      process.exit(1);
    }
  }

  async closeDatabase() {
    await mongoose.connection.close();
  }
}

export default new App().server;
