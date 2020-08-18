const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("/index", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});

module.exports = router;