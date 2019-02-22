
export const getPayload = (url, method, caller, body) => {
  return fetch(url, {
    //mode: 'cors',
    method: `${method}`,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`${caller} by response was not OK.`);
    }
  }).then((data) => {
    return data;
  });
};

export const results = (url, method, caller, body) => {
  const data = JSON.stringify(body);
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.overrideMimeType("application/json");
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.send(data);
  });
};

// this was used to check out how XMLHttpRequest worked
/*
export const addUpdate = (url, method, caller, body) => {
  const data = JSON.stringify(body);
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.overrideMimeType("application/json");
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.send(data);
  });
};
*/
