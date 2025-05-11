const {
  getUserTopTracks,
  getNowPlaying,
  getFollowedArtists,
  playTrack,
  pausePlayback,
} = require("../services/spotifyService");

const getSpotifyData = async (req, res, next) => {
  try {
    const accessToken = req.cookies.access_token;

    const [topTracks, nowPlaying, followedArtists] = await Promise.all([
      getUserTopTracks(accessToken),
      getNowPlaying(accessToken),
      getFollowedArtists(accessToken),
    ]);

    res.json({
      topTracks,
      nowPlaying,
      followedArtists,
    });
  } catch (error) {
    next(error);
  }
};

const playSong = async (req, res, next) => {
  try {
    console.log(req.body);
    const accessToken = req.headers.access_token;
    console.log(accessToken);
    const { uri } = req.body;

    await playTrack(accessToken, uri);
    res.status(200).json({ message: "Playback started" });
  } catch (error) {
    next(error);
  }
};

const pauseSong = async (req, res, next) => {
  try {
    const accessToken = req.headers.access_token;

    await pausePlayback(accessToken);
    res.status(200).json({ message: "Playback paused" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSpotifyData,
  playSong,
  pauseSong,
};
