const Test = require("../models/test");

exports.getAll = (req, res, next) => {
  Test.find()
    .then((tests) => {
      res.status(200).json(tests);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.create = (req, res, next) => {
  const TestObjects = req.body; 
  const test = new Test(TestObjects);

  test
    .save()
    .then(() => res.status(201).json({ message: "Registered furniture object!" }))
    .catch((error) => res.status(400).json({ error }));
};