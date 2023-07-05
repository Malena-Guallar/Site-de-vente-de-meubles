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
exports.getArticlesById = (req, res, next) => {
  Article.findById(req.params._id)
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./assets",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

exports.createArticles = (req, res, next) => {
  upload.single("picture")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: "Error uploading image" });
    }

    const article = new Article(req.body);

    if (req.file) {
      article.picture = "./assets/" + req.file.filename;
    }

    article.save()
      .then(() => res.status(201).json({ message: "Registered articles!" }))
      .catch((error) => res.status(400).json({ error }));
  });
};


exports.updateArticles = async (req, res) => {
  const article = await Article.findById(req.params._id);
  console.log(article)

  if (!article) {
    res.status(400).json({ message: "Not found!" });
  }

  const updateArticle = await Article.findByIdAndUpdate(article, req.body);
  res.status(200).json({ message: " Updated" });
};

exports.deleteArticles = async (req, res) => {
  const article = await Article.findById(req.params._id);
  if (!article) {
    res.status(400).json({ message: "Not found!" });
  }

  const deleteArticle = await article.deleteOne();
  res.status(200).json({ message: "Successfully deleted" });
};

exports.getImage = (req, res, next) => {
  const picture = req.body.picture; 
  Article.findOne({ picture })
  .then((article) => {
    res.status(200).json(article);
  })
  .catch((error) => {
    res.status(400).json({
      error: error,
    });
  });
}
