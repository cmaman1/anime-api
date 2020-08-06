const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const animes = require("../sample.json");
console.log(animes);

router.get("/", (req, res) => {
  res.json(animes);
});

router.post("/", (req, res) => {
  const { title, studio, year, rating } = req.body;
  if (title && studio && year && rating) {
    const id = animes.length + 1;
    const newAnime = { ...req.body, id };
    animes.push(newAnime);
    res.json(animes);
  } else {
    res.status(500).json({ error: "There was an error" });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, studio, year, rating } = req.body;
  if (title && studio && year && rating) {
    _.each(animes, (anime, i) => {
      if (anime.id == id) {
        anime.title = title;
        anime.studio = studio;
        anime.year = year;
        anime.rating = rating;
      }
    });
    res.json(animes);
  } else {
    res.status(500).json({ error: "There was an error" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(animes, (anime, i) => {
    if (anime.id == id) {
      animes.splice(i, 1);
    }
  });
  res.send("Deleted");
});

module.exports = router;
