const API = process.env.API_URL || 'http://localhost:8008/api/v1';

function headers( additionalHeaders ) {
  // const token = JSON.parse(localStorage.getItem('token'));
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // Authorization: `Bearer: ${token}`,
  };
}

function parseResponse(response) {
  return response.json().then(
    ( json ) => !response.ok ? Promise.reject( json ) : json
  );
}

function queryString(params) {
  const query = Object.keys(params)
                      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
                      .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export default {
  fetch(url, params = {}) {
    return fetch(`${API}${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(),
    })
    .then(parseResponse);
  },

  post(url, data) {
    const body = JSON.stringify(data);
    return fetch(`${API}${url}`, {
      method: 'POST',
      headers: headers(),
      body: body
    })
    .then(parseResponse);
  },

  patch(url, data) {
    const body = JSON.stringify(data);
    return fetch(`${API}${url}`, {
      method: 'PATCH',
      headers: headers(),
      body
    })
    .then(parseResponse);
  },

  delete(url) {
    return fetch(`${API}${url}`, {
      method: 'DELETE',
      headers: headers(),
    })
    .then(parseResponse);
  },
};
