const { Router } = require("express");
const router = Router();

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
    res.send("Wrong Request");
  }
});

module.exports = router;
