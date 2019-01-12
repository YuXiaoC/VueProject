import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        isPosit:false
    },
    getters:{

    },
    mutations:{
        changeIsPosit(state,payload){
            state.isPosit = !state.isPosit;
        } 
    },
    actions:{

    } 
});

export default store;