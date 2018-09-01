<template lang="html">
  <div class="homelist"@touchstart="touchStart($event)"
  @touchmove="touchMove($event)"
  @touchend="touchEnd($event)":style="{transform:'translateY('+scroll+'px)',transition:'all '+scrollend+'s'}">
    <div class="pulldown">
      <span>{{$store.state.update}}</span>
    </div>
    <ul>
      <li class="item scale-1px" v-for="(item,key) in newstype===1?newsList:newsFilter(newstype)" :key='key'>

          <div class="title" :class="[item.imgurl.length==1?'shorttitle':'longtitle']">
            <router-link :to="{name:'ArticleItem',params:{id:item.id}}">
              <h1>{{item.newstype}}{{item.title}}</h1>
            </router-link>
          </div>

          <div :class="[item.imgurl.length==1?'shortimg':'longimg']">
            <img v-for="(item,key) in item.imgurl"
            :item="item" :key="key"src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535495741603&di=dfd23a42a977dd67dbd074c28ea976e7&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140826%2FImg403790652.jpg">
          </div>

          <div class="info">
            <span>{{item.author}}</span>
            <span>{{item.commentnum>=10000?item.commentnum/10000+'万':item.commentnum}}评论</span>
            <i class="iconfont icon-cuohao scale4-1px" :class="[item.imgurl.length==1?'shorti':'longi']"
            @click="itemOption($event,item)"></i>
          </div>
      </li>
    </ul>
    <div class="overlay" v-show="show" @click="show=!show;isShowTucao=false"@touchmove.prevent>
    </div>
    <transition name="close">
      <div class="itemoption" v-show="show"@touchmove.prevent :style="{top:closeY+'rem',transform:'translate(0,'+closedialog+'%)'}">
        <ul v-show="isShowDefault" class="defaultoption">
          <li class="scale-1px" @click="removeNews(currentitem.id)">
            <div class="optiontitle">
              <i class="iconfont icon-error-1"></i>
              <div><strong>不感兴趣</strong><br><span>减少这类内容</span></div>
            </div>
          </li>
          <li class="scale-1px" @click="isShowDefault=!isShowDefault;isShowFankui=!isShowFankui">
            <div class="optiontitle">
              <i class="iconfont icon-iconfontgantanhao"></i>
              <div><strong>反馈垃圾内容</strong><br><span>低俗，标题党等</span></div>
            </div>
            <i class="iconfont icon-qianjin"></i>
          </li>
          <li class="scale-1px" @click="removeNews(currentitem.id)">
            <div class="optiontitle">
              <i class="iconfont icon-chengyuan-shanchu"></i>
              <div><strong>拉黑作者:{{currentitem.author}}</strong></div>
            </div>
          </li>
          <li class="scale-1px" @click="isShowDefault=!isShowDefault;isShowPingbi=!isShowPingbi">
            <div class="optiontitle">
              <i class="iconfont icon-pingbi1"></i>
              <div><strong>屏蔽</strong><br><span v-for="item in currentitem.keywords">{{item}}、</span></div>
            </div>
            <i class="iconfont icon-qianjin"></i>
          </li>
        </ul>

        <div v-show="isShowFankui" class="fankui">
          <div class="scale-1px">
            <div class="dotitle">
              <i class="iconfont icon-fanhui"@click="isShowDefault=!isShowDefault;isShowFankui=!isShowFankui">返回</i><strong>反馈</strong>
            </div>
          </div>
          <ul class="defaultoption">
            <li class="scale-1px"v-for="item in fankui"@click="removeNews(currentitem.id)">{{item.title}}</li>
          </ul>
        </div>

        <div v-show="isShowPingbi" class="pingbi">
          <div class="scale-1px">
            <div class="pingbititle"><i class="iconfont icon-fanhui"@click="isShowDefault=!isShowDefault;isShowPingbi=!isShowPingbi">返回</i><strong>屏蔽</strong><div></div></div>
          </div>
          <ul class="pingbiword">
            <li class="scale-1px"v-for="item in currentitem.keywords"@click="removeNews(currentitem.id)"><strong>屏蔽:{{item}}</strong></li>
          </ul>
            <div class="tucao" @click="isShowPingbi=!isShowPingbi;isShowTucao=!isShowTucao">
              <div class="tucaobutton">
                <i class="iconfont icon-shuxiebianji"></i>
                <span>我要吐槽</span>
              </div>
            </div>
        </div>

      </div>
    </transition>

    <div class="tucaoinput" v-show="isShowTucao"@touchmove.prevent>
      <div class="scale-1px">
        <div class="tucaotitle">
          <i class="iconfont icon-cuohao gbtucao"@click="isShowTucao=!isShowTucao;show=!show"></i>
          <strong>我要吐槽</strong>
          <button type="button" name="button" class="fabu">发布</button>
        </div>
      </div>

      <textarea name="name" rows="8" cols="80"v-model="tucao"></textarea>
      <div class="tucaonum">
        <button @click="tucao=''">重置</button>
        <span>{{tucao.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created(){
      this.scroll*=this.scale
    },
    computed:{
      newstype(){
        return this.$store.state.newsType
      },
      newsList(){
        return this.$store.state.newsList
      }
    },
    data(){
      return{
        scale:document.documentElement.clientWidth / 1440,
        xiangsubi:0,
        tucao:'',
        isShowTucao:false,
        isShowDefault:true,
        isShowFankui:false,
        isShowPingbi:false,
        show:false,
        closedialog:0,
        currentitem:{},
        startY:0,
        endY:0,
        resultY:0,
        scroll:-710,
        scrollend:0.1,
        moveY:0,
        closeY:0,
        fankui:[{id:0,title:'低俗色情'},{id:1,title:'标题党'},{id:2,title:'内容不符'},{id:3,title:'旧闻重复'},{id:4,title:'垃圾内容'}]
      }
    },
    methods:{
      newsFilter(typeid){
        return this.$store.getters.getNewsOfType(typeid)
      },
      removeNews:function(newsid){
        this.show=!this.show
        let that=this
        setTimeout(function(){
          that.$store.commit('removeNews',newsid)
        },1)
      },
      itemOption:function(e,item){
        this.show=!this.show
        this.isShowDefault=true
        this.currentitem=item
        this.closeY=e.y/100/(e.view.document.body.clientWidth/1440)
        if (e.y<e.view.innerHeight/2) {
          // 上半部
          this.closedialog=0
        }else {
          // 下半部
          this.closedialog=-100
        }
      },
      touchStart:function(e){
        // e.preventDefault()
        this.startY=e.touches[0].pageY
        if (this.scrollend!=0) {
          this.scrollend=0
        }
      },
      touchMove:function(e){

        let diff=e.touches[0].pageY-this.moveY
        let height = e.touches[0].pageY-this.startY
        // let v = diff/100/(e.view.innerWidth*window.devicePixelRatio/1440)*2
        let v=diff/window.devicePixelRatio
        console.log(v);
        if (diff>0) {
          let b=this.scroll+v
          if (height>20) {
            if (b<280*this.scale) {
              if (b>-350*this.scale) {
                if (this.$store.state.update==='下拉刷新') {
                  this.$store.commit('changeUpdate','松开刷新')
                }
              }
              this.scroll=b
            }
          }
        }
        this.moveY=e.touches[0].pageY
      },
      touchEnd:function(e){
        this.endY=e.changedTouches[0].pageY
        this.resultY=this.startY-this.endY
        this.scroll=-710*this.scale,
        this.$store.commit('changeUpdate','下拉刷新')
        this.scrollend=0.5
      }
    }

  }
</script>
<style lang="css">
  .homelist{
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    height: 100%
  }
  .pulldown{
    width: 100%;
    height: 1000px;
    text-align: center;
    padding-top: 940px;
    background-color:rgba(242 , 243, 245, 1);
    font-size: 50px;
  }
  .homelist ul{
    /* padding-top: 290px; */
    padding-bottom: 150px;
    padding: 0 52px;
  }
  .scale-1px:after{
    background: rgb(226,226,226)
  }
  .scale4-1px:after{
    border: 1px solid rgb(144,144,144);
  }
  .item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    position: relative;
    padding: 50px 0;
  }
  .title{
    font-size: 60px;
  }
  .shortimg{

  }
  .longimg{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .shortimg img{
    width: 325px;
    height:200px;
    margin-top: 65px;
  }
  .longimg img{
    width: 435px;
    height:280px;
    margin: 30px 5px;
  }
  .longtitle{
    width:1340px
  }
  .shorttitle{
    width: 850px;
    margin-right: 145px;

  }
  .info{
    flex: 0 0 100%;
    font-size: 40px;
    color: rgb(144,144,144)
  }
  .info i{
    width: 60px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    border-radius: 18px;
    border: 1px solid rgb(144,144,144);
  }
  .shorti{
    float: right;
  }
  .longi{
    float: right;
  }
  .overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(25,25,25,0.1);
    z-index: 10;
  }
  .itemoption{
    background-color: #fff;
    position: fixed;
    border-radius: 50px;
    z-index: 11;
    }
  .defaultoption{
    width: 1330px;
    height: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .defaultoption li{
    flex: 1;
    width: 1230px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 60px;
    justify-content: space-between;
  }
  .optiontitle{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .optiontitle i{
    margin-right: 40px;
    color: #000;
    font-size: 55px;
  }
  .itemoption ul li i{
    color: #000;
    font-size: 55px;
  }
  .itemoption ul li span{
    font-size: 40px;
    color: rgb(144,144,144)
  }
  /* 反馈 */
  .fankui{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .dotitle{
    text-align: center;
    font-size: 60px;
    height: 160px;
    line-height: 160px;
    width: 1230px;
  }
  .dotitle i{
    position: absolute;
    left: 0;
  }
  /* 屏蔽 */
  .pingbi{
    font-size: 60px;
    width: 1330px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pingbititle{
    width: 1230px;
    height: 160px;
    line-height: 160px;
    text-align:center;
  }
  .pingbititle i{
    position: absolute;
    left: 0;
  }
  .pingbiword{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .pingbiword li{
    width: 1230px;
    display: flex;
    flex-direction: row;
    flex: 0 0 160px;
    line-height: 160px;
  }
  .tucao{
    width: 1230px;
    height: 160px;
    line-height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tucaobutton{
    width: 1230px;
    background-color: rgb(240, 242, 245);
    height: 100px;
    border-radius: 50px;
    line-height: 100px;
    padding-left: 50px;
  }
  .tucaoinput{
    height: 700px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 11;
    left: 0;
    right: 0;
  }
  .tucaotitle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 180px;
    padding: 0 60px;
    font-size: 55px;
  }
  .tucaoinput textarea{
    width: 100%;
    outline: none;
    border: 0;
    word-wrap: wrap;
    height: 260px;

  }
  .tucaonum span{
    position: absolute;
    left: 60px;
    bottom: 50px;
    font-size: 55px;
  }
  .gbtucao{
    width: 120px;
    font-size: 45px;
  }
  .fabu{
    width: 120px;
    color: rgb(51, 80, 131);
    outline: none;
    border: 0;
    background-color: #fff;
  }
  .tucaonum button{
    position: absolute;
    right: 60px;
    bottom: 50px;
    font-size: 55px;
    outline: none;
    border: 0;
    background-color: #fff;
    color: rgb(240, 66, 73)
  }
</style>
