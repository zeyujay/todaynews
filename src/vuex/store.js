import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    update:"下拉刷新",
    isfoorbar:true,
    searchword:[],
    isShowLabel:false,
    newslabel:[],
    activelabel:[{'id':0,'label':'关注'},{'id':1,'label':'推荐'}],
    contentType:1
  },
  mutations:{
    changeType(state,changeType){
      state.contentType=changeType
    },
    deletelabel(state,deletelabel){
      state.newslabel.push(deletelabel)
      state.activelabel=state.activelabel.filter(function(item){
        if(item.label!=deletelabel.label){
          return item
        }
      })
    },
    addActiveLabel(state,activelabel){
        state.activelabel.push(activelabel)
        state.newslabel=state.newslabel.filter(function(item){
          if(item.label!=activelabel.label){
            return item
          }
        })
    },
    addNewsLabel(state,newslabel){

      state.newslabel=newslabel
    },
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
