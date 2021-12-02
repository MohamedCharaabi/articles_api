import express from "express";
import { knex_conn } from "../config/config.js";

// add article

export const addArticle = (req, res) => {
  const { title, content, author, image } = req.body;

  //   const authorCheck = await knex_conn("users").select().where("id", author);

  knex_conn("articles")
    .insert({ title, content, author, image })
    .then(() => {
      res.status(200).json({
        message: "Article added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error adding article",
        error: err,
      });
    });
};

// get all articles
export const getArticles = (req, res) => {
  knex_conn("articles")
    .select()
    .then((articles) => {
      res.status(200).json({
        message: "Articles fetched successfully",
        articles,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error fetching articles",
        error: err,
      });
    });
};

// get article by id
export const getArticleById = (req, res) => {
  const { id } = req.params;
  knex_conn("articles")
    .select()
    .where("id", id)
    .then((article) => {
      res.status(200).json({
        message: "Article fetched successfully",
        article,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error fetching article",
        error: err,
      });
    });
};

// update article
export const updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content, author, image } = req.body;
  knex_conn("articles")
    .update({ title, content, author, image })
    .where("id", id)
    .then(() => {
      res.status(200).json({
        message: "Article updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating article",
        error: err,
      });
    });
};

// delete article
export const deleteArticle = (req, res) => {
  const { id } = req.params;
  knex_conn("articles")
    .delete()
    .where("id", id)
    .then(() => {
      res.status(200).json({
        message: "Article deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error deleting article",
        error: err,
      });
    });
};
