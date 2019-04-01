import axios from 'axios'
import ApiEndpoint from '../helper/apiEndpoint'

export default {
  getAllAuthor () {
    return axios({
      method: 'get',
      url: ApiEndpoint.AUTHOR_API,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getAuthorById (authorId) {
    return axios({
      method: 'get',
      url: `${ApiEndpoint.AUTHOR_API}/${authorId}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
