var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.json({ message: 'Welcome to Desolty Clothing API 🚀' });

});
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Desolty backend is running 🚀" });
});

module.exports = router;
