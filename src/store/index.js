import {createStore} from 'vuex'
const store = createStore({
    state(){
        return {
            username:''
        }
    },
    mutations:{
        change(state,data){
            state.username = data;
        }
    },
    actions:{
        change(state){
            state.commit('change');
        }
    }
})

export default store;