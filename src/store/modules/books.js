import booksAPi from '@/api/books'
import { findIndex } from 'lodash'
import Vue from 'vue'

export const SET_MANY_BOOKS = 'SET_MANY_BOOKS'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const SET_ONE_BOK = 'SET_ONE_BOK'
export const DELETE_BOOK = 'DELETE_BOOK'

const state = {
  books: []
}

const getters = {
  getterAllBooks: (state) => state.books
}

const mutations = {
  [SET_MANY_BOOKS] (state, books) {
    state.books = books
  },
  [SET_ONE_BOK] (state, book) {
    state.books = state.books.concat(book)
  },
  [UPDATE_BOOK] (state, book) {
    const index = findIndex(state.books, { bookId: book.bookId })
    Vue.set(state.books, index, book)
  },
  [DELETE_BOOK] (state, bookId) {
    const index = findIndex(state.books, { bookId })
    state.books.splice(index, 1)
  }
}

const actions = {
  actionGetAllBooks ({ commit }) {
    return booksAPi.getAllBooks()
      .then((response) => {
        commit(SET_MANY_BOOKS, response.data)

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  },
  actionEditBook ({ commit }, { bookId, book }) {
    return booksAPi.editBook(bookId, book)
      .then((response) => {
        commit(UPDATE_BOOK, { ...book, bookId })

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  },
  actionAddBook ({ commit }, book) {
    return booksAPi.addBook(book)
      .then((response) => {
        commit(SET_ONE_BOK, response.data)

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  },
  actionDeleteBook ({ commit }, bookId) {
    return booksAPi.deleteBook(bookId)
      .then((response) => {
        commit(DELETE_BOOK, bookId)

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
