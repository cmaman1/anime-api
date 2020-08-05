const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Carolina",
    job: "Developer",
  };

  res.json(data);
});

/*
router.post("/test", (req, res) => {
  const data = {
    name: req.body.name,
  };

  res.json(data);
});
*/

module.exports = router;
