const axios = require("axios");
const SPOTIFY_API = process.env.SPOTIFY_API;

const getUserTopTracks = async (accessToken) => {
  const response = await axios.get(`${SPOTIFY_API}/me/top/tracks?limit=10`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const getNowPlaying = async (accessToken) => {
  const response = await axios.get(
    `${SPOTIFY_API}/me/player/currently-playing`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data; 
};

const getFollowedArtists = async (accessToken) => {
  const response = await axios.get(`${SPOTIFY_API}/me/following?type=artist`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const playTrack = async (
  accessToken,
  Uri,
  trackPosition = 5,
  positionMs = 0
) => {
  const data = {
    context_uri: Uri,
    offset: {
      position: trackPosition,
    },
    position_ms: positionMs,
  };

  try {
    const response = await axios.put(`${SPOTIFY_API}/me/player/play`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to start playback on Spotify.");
  }
};

const pausePlayback = async (accessToken) => {
  await axios.put(`${SPOTIFY_API}/me/player/pause`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

module.exports = {
  getUserTopTracks,
  getNowPlaying,
  getFollowedArtists,
  playTrack,
  pausePlayback,
};
