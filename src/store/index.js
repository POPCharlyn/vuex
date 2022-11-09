import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
    state: {
        sum: 22,
    },
    mutations: {
        Add( state, value ) {
            console.error( 'mutations--Add:', state, value )
            state.sum += value
        },
        Reduce( state, value ) {
            console.error( 'Reduce--Reduce:', state, value )
            state.sum -= value
        },
    },
    actions: {
        add( context, value ) {
            console.error( 'actions--add:', context, value )
            context.commit( 'Add', value )
        },
        addOrigin( context, value ) {
            if ( context.state.sum % 2 ) { // 奇数
                console.error( 'action--addOrigin:', context, value )
                context.commit( 'Add', value )
            }
        },
        addAsync( context, value ) {
            setTimeout( () => {
                context.commit( 'Add', value )
            }, 500 )
        },
    },
} )
