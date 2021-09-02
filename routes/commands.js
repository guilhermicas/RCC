let express = require("express");
const execSync = require("child_process").execSync;

let router = express.Router();

router.get("/", (req, res, err) => {
  res.send("../public/index.html");
});

router.post("/", (req, res, err) => {
  console.log(req.body.command);
  code = execSync(req.body.command);
  res.redirect("/");
});

router.post("/firefox", (req, res, err) => {
  console.log(req.body.command);
  code = execSync("firefox" + req.body.command);
  res.redirect("/");
});

module.exports = router;
