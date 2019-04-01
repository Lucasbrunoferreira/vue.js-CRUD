import axios from 'axios'
import ApiEndpoint from '../helper/apiEndpoint'

export default {
  getAllBooks () {
    return axios({
      method: 'get',
      url: ApiEndpoint.BOOK_API,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  editBook (bookId, book) {
    return axios({
      method: 'put',
      url: `${ApiEndpoint.BOOK_API}/${bookId}`,
      data: book,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  deleteBook (bookId) {
    return axios({
      method: 'delete',
      url: `${ApiEndpoint.BOOK_API}/${bookId}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
