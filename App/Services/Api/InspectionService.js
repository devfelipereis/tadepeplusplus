import axios from 'axios'

const createApi = (baseURL = 'http://tadepe.transparencia.org.br/api/') => {

  // Create and configure an axios api object.
  const api = axios.create({
    baseURL,
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoidGFkZXBlcGx1c3BsdXMifQ.6Anvpu8bCfKrVLtIpU_j7zHT1ksttDbbIi4liWsJGdY'
    },
    timeout: 10000
  })

  // Define some functions that call the api.
  const fetch = () => api.get('inspections/content')

  const fetchBy = (by) => api.get('inspections/content', { params: by })

  // return a list of API functions
  return {
    fetch,
    fetchBy
  }
}

export default {
  createApi
}
