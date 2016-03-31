import axios from 'axios';
let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param);
}

let helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map((username) => {
			return getUserInfo(username)
		})).then((info) => {
			return info.map((user) => {
				return user.data
			});
		}).catch((err) => {
			console.warn('Error in getPlayersInfo', err);
		})
	}
}

export default helpers;