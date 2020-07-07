const router = require("express").Router();
const { Book } = require("../../models");

router
  .route("/")
  .get((req, res) => {
    Book.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  })
  .post((req, res) => {
    const post = new Book({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
    });
    Book.create(post)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

router.route("/:id").get((req, res) => {
  Book.find({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
