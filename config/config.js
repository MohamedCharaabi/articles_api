import { createConnection } from "mysql";
import knex from "knex";

export const mysql_conn = createConnection({
  host: "localhost",
  user: "root",
  password: "46284628",
  database: "articles_db",
});

export const knex_conn = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "46284628",
    database: "articles_db",
  },
});
