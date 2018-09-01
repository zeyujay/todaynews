import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    update:"下拉刷新",
    isfoorbar:true,
    searchword:[],
    isShowLabel:false,
    homelabel:[],
    activelabel:[{'id':0,'label':'关注'},{'id':1,'label':'推荐'}],
    wmlabel:[{'id':0,'label':'关注'},{'id':1,'label':'推荐'}],
    newsType:1,
    isOverlay:false,
    newsList:[],
    usertype:[],
    users:[]
  },
  mutations:{
    addUsers(state,users){
      state.users=users
    },
    addUsertype(state,usertype){
      state.usertype=usertype
    },
    removeNews(state,newsid){
      state.newsList=state.newsList.filter(function(item){
        if (newsid!=item.id) {
            return item;
        }
      })
    },
    addNewsList(state,newsList){
      state.newsList=[...newsList,...state.newsList]
    },
    changeOverlay(state,isOverlay){
      state.isOverlay=isOverlay
    },
    changeType(state,changeType){
      state.newsType=changeType
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
    addHomeLabel(state,homelabel){

      state.newslabel=homelabel
    },
    addWmLabel(state,wmlabel){
      wmlabel.map(function(item){
        state.wmlabel.push(item)
      })
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
  },
  getters:{
    getNewsOfType:(state)=>(typeid)=>{
      return state.newsList.filter(news=>news.newstype===typeid)
    }
  }

})
