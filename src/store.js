import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "ddd",
        age: 11,
        studentlist: []
    },
    getters: {
        person(state) {
            return `姓名:${state.name}年龄：${state.age}`
        }
    },
    mutations: {

    },
    actions: {

    }
})