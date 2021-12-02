import express from "express";
import { mysql_conn } from "./config/config.js";
import { articleTableExists } from "./middleware/database_verif.js";

import articleRouter from "./routes/article_routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/articles", articleTableExists, articleRouter);

mysql_conn.connect(function (err) {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(`Server is running  http://localhost:${PORT}`);
  });
});
