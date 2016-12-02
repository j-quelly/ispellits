
function createPlayer(data, onError) {
  return fetch('/api/players', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch(onError);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    // console.log(error);
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { createPlayer };
export default Client;