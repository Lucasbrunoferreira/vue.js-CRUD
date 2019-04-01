import Vue from 'vue'
import Vuex from 'vuex'
import Books from './modules/books'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    Books
  }
})
