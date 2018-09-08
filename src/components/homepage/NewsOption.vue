<template lang="html">
  <div class="overlay" v-show="show"
  @click.stop="resetOption()"@touchmove.prevent>
    <transition name="close">
      <div class="itemoption"@touchmove.prevent :style="{top:closeY+'rem',transform:'translate(0,'+closedialog+'%)'}">
        <ul v-show="isShowDefault" class="defaultoption">
          <li class="scale-1px" @click.stop="removeNews(currentitem.id)">
            <div class="optiontitle">
              <i class="iconfont icon-error-1"></i>
              <div><strong>不感兴趣</strong><br><span>减少这类内容</span></div>
            </div>
          </li>
          <li class="scale-1px" @click.stop="isShowDefault=!isShowDefault;isShowFankui=!isShowFankui">
            <div class="optiontitle">
              <i class="iconfont icon-iconfontgantanhao"></i>
              <div><strong>反馈垃圾内容</strong><br><span>低俗，标题党等</span></div>
            </div>
            <i class="iconfont icon-qianjin"></i>
          </li>
          <li class="scale-1px" @click.stop="removeNews(currentitem.id)">
            <div class="optiontitle">
              <i class="iconfont icon-chengyuan-shanchu"></i>
              <div><strong>拉黑作者:{{currentitem.author}}</strong></div>
            </div>
          </li>
          <li class="scale-1px" @click.stop="isShowDefault=!isShowDefault;isShowPingbi=!isShowPingbi">
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
              <i class="iconfont icon-fanhui"@click.stop="isShowDefault=!isShowDefault;isShowFankui=!isShowFankui">返回</i><strong>反馈</strong>
            </div>
          </div>
          <ul class="defaultoption">
            <li class="scale-1px"v-for="item in fankui"@click.stop="removeNews(currentitem.id);resetOption()">{{item.title}}</li>
          </ul>
        </div>

        <div v-show="isShowPingbi" class="pingbi">
          <div class="scale-1px">
            <div class="pingbititle"><i class="iconfont icon-fanhui"@click.stop="isShowDefault=!isShowDefault;isShowPingbi=!isShowPingbi">返回</i><strong>屏蔽</strong><div></div></div>
          </div>
          <ul class="pingbiword">
            <li class="scale-1px"v-for="item in currentitem.keywords"@click.stop="removeNews(currentitem.id);resetOption()"><strong>屏蔽:{{item}}</strong></li>
          </ul>
            <div class="tucao" @click.stop="isShowPingbi=!isShowPingbi;isShowTucao=!isShowTucao">
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
          <i class="iconfont icon-cuohao gbtucao"@click.stop="resetOption()"></i>
          <strong>我要吐槽</strong>
          <button type="button" name="button" class="fabu">发布</button>
        </div>
      </div>

      <textarea name="name" rows="8" cols="80"v-model="tucao"></textarea>
      <div class="tucaonum">
        <button @click.stop="tucao=''">重置</button>
        <span>{{tucao.length}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    currentitem(){
      return this.$store.state.currentNews
    },
    show(){
      return this.$store.state.isNewsOption
    },
    closeY(){
      return this.$store.state.clickNewsY
    },
    closedialog(){
      return this.$store.state.newsOptionDialog
    }
  },
  data(){
    return{
      close:false,
      tucao:'',
      isShowTucao:false,
      isShowDefault:true,
      isShowFankui:false,
      isShowPingbi:false,
      fankui:[{id:0,title:'低俗色情'},{id:1,title:'标题党'},{id:2,title:'内容不符'},{id:3,title:'旧闻重复'},{id:4,title:'垃圾内容'}]
    }

  },
  methods:{
    resetOption:function(){
      this.$store.commit('changeNewsOption',false);
      this.isShowDefault=true;
      this.isShowTucao=false;
      this.isShowFankui=false;
      this.isShowPingbi=false;
    },
    removeNews:function(newsid){
      this.$store.commit('changeNewsOption',false);
      let that=this
      setTimeout(function(){
        that.$store.commit('removeNews',newsid)
      },1)
    },
  }
}
</script>

<style lang="css">
  .newsoption{
    /* background-color: #412563;
    position: fixed;
    z-index: 20;
    top: 0;
    height:  */
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
    width: 1330px;
    background-color: #fff;
    position: fixed;
    border-radius: 50px;
    z-index: 11;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
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
