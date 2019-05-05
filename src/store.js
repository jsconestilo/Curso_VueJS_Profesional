import Vue from 'vue'
import Vuex from 'vuex'

import tracService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },
  mutations: {
    // Aqui solo puedo llamar código sincrono
    setTrack (state, payloadTrack) {
      state.track = payloadTrack
    }
  },
  actions: {
    // Aqui se puede llamar a código asyncróno (AJAX) y despues llamar a una mutation
    getTrackById (context, payload) {
      return tracService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  },
  getters: {
    trackTitle (state, getters) {
      // if (state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  }
})

export default store
