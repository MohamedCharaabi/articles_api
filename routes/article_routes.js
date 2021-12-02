import express from "express";
import {
  addArticle,
  deleteArticle,
  getArticleById,
  getArticles,
  updateArticle,
} from "../controllers/article.js";
const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);
router.post("/", addArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
