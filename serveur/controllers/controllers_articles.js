const Article = require("../models/models_articles");

exports.getArticles = (req, res, next) => {
  Article.find()
    .then((articles) => {
      res.status(200).json(articles);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.createArticles = (req, res, next) => {
  const articleObjects = req.body; 
  const article = new Article(articleObjects);

  article
    .save()
    .then(() => res.status(201).json({ message: "Registered articles!" }))
    .catch((error) => res.status(400).json({ error }));
};