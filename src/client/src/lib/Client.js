
function createPlayer(playerData, onError, cb) {
  return fetch('/api/players', {
    method: 'post',
    body: JSON.stringify(playerData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
    .catch(onError);
}

function getPlayers(success, onError) {
  return fetch('/api/players', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success)
    .catch(onError);
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
