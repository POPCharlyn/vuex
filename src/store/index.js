import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
    state: {
        count: 12,
        todos: [
            { id: 1, text: '...', done: true, name: 'tom', age: 12 },
            { id: 2, text: '...', done: false, name: 'marry', age: 32 },
            { id: 3, text: '...', done: false, name: 'jenny', age: 22 },
            { id: 4, text: '...', done: true, name: 'tommy', age: 20 },
            { id: 5, text: '...', done: true, name: 'jeffy', age: 18 },
            { id: 6, text: '...', done: false, name: 'jeffy', age: 17 },
        ],
    },
    getters: {
        doneTodos: state => {
            console.log( '-------------------------------------------------------------------------------------' )
            console.log( 'state.todos.filter( todo => todo.done ):', state.todos.filter( todo => todo.done ) )
            console.log( '-------------------------------------------------------------------------------------' )
            return state.todos.filter( todo => todo.done )
        },
        doneTodosCount: ( state, getters ) => {
            console.log( 'doneTodosCount--state:', state )
            console.log( 'doneTodosCount--getters:', getters )
            console.log( 'getters.doneTodos.length:', getters.doneTodos.length )
            return getters.doneTodos.length
        },
        powerCount( state ) {
            console.log( 'powerCount--state:', state )
            return state.count * state.count
        },
        moreTodosAge( state ) {
            console.log( 'moreTodos--state:', state )
            return Age => {
                return state.todos.filter( item => item.age > Age )
            }

        },
        moreTodosLength( state, getters ) {
            console.log( 'moreTodosLength--state:', state )
            console.log( 'moreTodosLength--getters:', getters )
            return getters.moreTodosAge.length
        },
    },
    mutations: {
        increment( state ) {
            state.count++
        },
        decrement( state ) {
            state.count--
        },
        addCount( state, num ) {
            state.count = +state.count + num
        },
        reduceCount( state ) {
            state.count--
        },
    },
    // 异步操作 mutations，就得使用 Action
    actions: {
        asyncReduce( context ) {
            console.log( 'context', context )
            console.log( 'context.getters', context.getters )
            console.log( 'context.state', context.state )
            setTimeout( () => {
                context.commit( 'reduceCount' )
            }, 100 )
        },
    },
    modules: {},
} )
