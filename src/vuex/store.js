import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    update:"下拉刷新",
    isfoorbar:true,
    searchword:[],
    isShowLabel:false
  },
  mutations:{
    changeUpdate(state,change){
      state.update=change
    },
    changeFootBar(state,change){
      state.isfoorbar=change
    },
    changeLabel(state,change){
      state.isShowLabel=change
    }
  }
})
