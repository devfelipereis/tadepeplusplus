import axios from 'axios'

const createApi = (baseURL = 'http://tadepe.transparencia.org.br/api/') => {

  // Create and configure an axios api object.
  const api = axios.create({
    baseURL,
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpLXRlc3QifQ.v_Xf7lggbg25iJCwG_UK6GSD-FXKWl2gNB0HkHlEO0c'
    },
    timeout: 10000
  })

  // Define some functions that call the api.
  const fetch = () => api.get('projects/content')

  // return a list of API functions
  return {
    fetch
  }
}

export default {
  createApi
}
