export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://api.diploma.nomoredomains.xyz';

export const AUTORIZATION_PARAMS = {
  baseRoute: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
}

