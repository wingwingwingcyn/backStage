import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState({
		storage:window.sessionStorage
	})],
	state: {
		token: '',
		menu: []
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token
		},
		SET_MENU(state, menu) {
			state.menu = menu
		}
	},
	getters: {
		GET_TOKEN(state) {
			return state.token
		},
		GET_MENU(state) {
			return state.menu
		}
	}
})
