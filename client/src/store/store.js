import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    activeUser: {
      token: null,
      user: null,
      isUserLoggedIn: false
    },
    activeOrder: {
      id: null
    }
  },
  getters: { currentUser: state => {
    return state.activeUser.user
  } },
  mutations: {
    setToken (state, token) {
      state.activeUser.token = token
      if (token) {
        state.activeUser.isUserLoggedIn = true
      } else {
        state.activeUser.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.activeUser.user = user
    },
    setActiveOrderId (state, id) {
      state.activeOrder.id = id
    }
  },

  actions: {
    setToken ({
      commit
    }, token) {
      commit('setToken', token)
    },
    setUser ({
      commit
    }, user) {
      commit('setUser', user)
    },
    setActiveOrderId ({ commit }, id) {
      commit('setActiveOrderId', id)
    }

  }

})
