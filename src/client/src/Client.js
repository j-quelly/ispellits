
function createPlayer(playerData, onError, cb) {
  return fetch('/api/players', {
    method: 'post',
    body: JSON.stringify(playerData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch(onError)
    .then(cb);
}

function getPlayers(success, onError) {
  console.log('getting players?');
  return fetch('/api/players', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch(onError)
    .then(parseJSON)
    .then(success);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = {
  createPlayer,
  getPlayers
};
export default Client;
