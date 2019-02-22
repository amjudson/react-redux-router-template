import { getPayload } from './fetchApi';

class StatusApi {
  static getAllStatuses() {
    return getPayload(`${process.env.API_HOST}/Status`, 'GET', ' Status').then(statuses => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], statuses));
      });
    });
  }

  static getStatusById(statusId) {
    return getPayload(`${process.env.API_HOST}/Status/${statusId}`, 'GET', ' Status').then(status => {
      return new Promise((resolve, reject) => {
          resolve(status);
      });
    });
  }

  static saveStatus(status) {
    status = Object.assign({}, status); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstatusNameLength = 5;
      if (status.description.length < minstatusNameLength) {
        reject(`Description must be at least ${minstatusNameLength} characters.`);
      }

      if (status.statusId) {
        getPayload(`${process.env.API_HOST}/Status/${status.statusId}`, 'PUT', ' Status', status)
          .then((status) => {
          resolve(status);
        });
      } else {
        getPayload(`${process.env.API_HOST}/Status`, 'POST', ' Status', status)
          .then((status) => {
          resolve(status);
        });
      }
    });
  }

  static deleteStatus(status) {
    return new Promise((resolve, reject) => {
      getPayload(`${process.env.API_HOST}/Status/${status.statusId}`, 'DELETE', ' Status');
      resolve();
    });
  }
}

export default StatusApi;
