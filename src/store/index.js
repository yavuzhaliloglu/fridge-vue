import {createStore} from 'vuex'

const store = createStore({
    state:{
        appName: "vue3 vuex"
    },

    getters:{
        appName(state){
            return state.appName;
        }
    }
})

export default store