import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        setCount:  (state, count) => {
            state.count = count;
        },
    },
    actions: {
        getCount: ({ commit }, num) => {
            commit('setCount', num)  
        },
    },
    modules: {
       
    }
})


export default store