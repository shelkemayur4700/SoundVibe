const express = require("express");
const {
  pauseSong,
  playSong,
  getSpotifyData,
} = require("../controllers/spotifyController");
const router = express.Router();


router.get("/", getSpotifyData);
router.post("/play", playSong);
router.post("/pause", pauseSong);

module.exports = router;
