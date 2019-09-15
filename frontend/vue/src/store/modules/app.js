export default {
  namespaced: true,

  state: {
    drawer: null
  },
  getters: {
    drawer(state) {
      return state.drawer
    }
  },
  mutations: {
    setDrawer(state, drawer) {
      state.drawer = drawer
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleDrawer({commit}) {
      commit('toggleDrawer')
    }
  }
}
