import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
    state: {
        count: 12,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
        ],
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter( todo => todo.done )
        },
    },
    mutations: {
        addCount( state, num ) {
            state.count = +state.count + num
        },
        reduceCount( state ) {
            state.count--
        },
    },
    actions: {},
    modules: {},
} )
