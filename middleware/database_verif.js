import { knex_conn } from "../config/config.js";

// table exist verification
export const articleTableExists = async (req, res, next) => {
  const tableExist = await knex_conn.schema.hasTable("articles");

  if (tableExist) {
    next();
  } else {
    await knex_conn.schema.createTable("articles", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("content").notNullable();
      table.string("image");
      table.uuid("author").references("id").inTable("users");
    });
    next();
  }
};
