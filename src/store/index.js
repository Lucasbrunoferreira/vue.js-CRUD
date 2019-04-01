import Vue from 'vue'
import Vuex from 'vuex'
import { createModule } from 'vuex-toast'
import 'vuex-toast/dist/vuex-toast.css'
import Author from './modules/author'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Author,
    toast: createModule({
      dismissInterval: 4000
    })
  },
  strict: false
})
