import axios from 'axios';

const headers = {
    'Content-Type': 'application/x-chess-pgn',
};

export default {
  getDailyPuzzle() {
    return axios.get('https://api.chess.com/pub/puzzle', {headers: headers}).then(response => response.data);
  },
  getProfile(username) {
    return axios.get(`https://api.chess.com/pub/player/${username}`).then(response => response.data);
  },
  getCurrentGames(username) {
    return axios.get(`https://api.chess.com/pub/player/${username}/games`).then(response => response.data);
  }
};