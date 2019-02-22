import { getPayload, results } from './fetchApi';

class AcademyApi {
  static getAllAcademies() {
    return results(`${process.env.API_HOST}/academy`, 'GET', 'Academy').then(academies => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], academies));
      }).catch((e) => console.error('Error:', e.message)); // eslint-disable-line no-console
    });
  }

  static getAcademyById(academyId) {
    return results(`${process.env.API_HOST}/academy/${academyId}`, 'GET', 'Academy').then(academy => {
      return new Promise((resolve, reject) => {
        resolve(academy);
      });
    });
  }

  static saveAcademy(academy) {
    academy = Object.assign({}, academy); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minacademyNameLength = 5;
      if (academy.name.length < minacademyNameLength) {
        reject(`Name must be at least ${minacademyNameLength} characters.`);
      }

      if (academy.description.length < minacademyNameLength) {
        reject(`Description must be at least ${minacademyNameLength} characters.`);
      }

      if (academy.academyId) {
        results(`${process.env.API_HOST}/academy/${academy.academyId}`, 'PUT', 'Academy', academy).then((academy) => {
          resolve(academy);
        });
      } else {
        results(`${process.env.API_HOST}/academy`, 'POST', 'Academy', academy).then((academy) => {
          resolve(academy);
        });
      }
    });
  }

  static deleteAcademy(academy) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/academy/${academy.academyId}`, 'DELETE', 'Academy', academy);
        resolve();
    });
  }
}

export default AcademyApi;
