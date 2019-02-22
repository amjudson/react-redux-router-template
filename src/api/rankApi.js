import delay from './delay';

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (ranks) => {
  return Math.max.apply(Math, ranks.map((r) => { return r.rankId; })) + 1;
};

const getRanksApi = () => {
  const url = `${process.env.API_HOST}/Rank`;
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const getRankById = (rankId) => {
  const url = `${process.env.API_HOST}/Rank/${rankId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank by id response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const putRank = (rank) => {
  const url = `${process.env.API_HOST}/Rank/${rank.rankId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(rank),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const postRank = (rank) => {
  const url = `${process.env.API_HOST}/Rank`;
  return fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(rank),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const deleteRankApi = (rankId) => {
  const url = `${process.env.API_HOST}/Rank/${rankId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'DELETE',
    body: JSON.stringify(rankId),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Rank response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

function getResults() {
  return new Promise(function (resolve, reject) {
    let url = `${process.env.API_HOST}/Rank`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.overrideMimeType("application/json");
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.send();
  });
}


class RankApi {
  static getAllRanks() {
    return getResults().then(ranks => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], ranks));
      });
    });
  }

  static saveRank(rank) {
    rank = Object.assign({}, rank); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minRankAbbrvLength = 1;
      const minRankDescriptionLength = 3;
      if (rank.abbreviation.length < minRankAbbrvLength) {
        reject(`Rank Abbreviation must be at least ${minRankAbbrvLength} characters.`);
      }

      if (rank.description.length < minRankDescriptionLength) {
        reject(`Rank Description must be at least ${minRankDescriptionLength} characters.`);
      }

      if (rank.rankId) {
        putRank(rank).then((rank) => {
          resolve(rank);
        }).catch((message) => console.error('Rank ERROR:', message)); // eslint-disable-line no-console
      } else {
        postRank(rank).then((rank) => {
          resolve(rank);
        });
      }
    });
  }

  static deleteRank(rankId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }

  static getRankDescription(rankId) {
    const ranks = this.getAllRanks();
    let description = { name: '', description: '', rankId: 0 };
    const descriptions = ranks.filter(r => r.id == rankId);
    if (descriptions) {
      description = descriptions[0];
      return description.name;
    }
    return "Rank Not Found";
  }
}

export default RankApi;
