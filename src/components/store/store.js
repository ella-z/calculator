import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const State = {
    isfirst: true,
    isdot: false,
    iszero: false
}
const getters={
    isfirst:(State,getters)=>{
        return State.isfirst;
    },
    isdot:(State,getters)=>{
        return State.isdot;
    },
    iszero:(State,getters)=>{
        return State.iszero;
    }
}
const mutations={
    changeisfirst(State,str){
        State.isfirst=str;
    },
    changeisdot(State,str){
        State.isdot=str;
    },
    changeiszero(State,str){
        State.iszero=str;  
    }
}

const store=new Vuex.Store({
    State,
    mutations
})

export default store;