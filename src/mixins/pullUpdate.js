export default{
  data(){
    return {
      scale:document.documentElement.clientWidth / 1440,
      cscroll:0,
      ultop:0,
      ulbottom:0,
      startY:0,
      endY:0,
      resultY:0,
      moveY:0,
      ispulldown:false,
      ispullup:false,
      update:false,
      refreshing:false,
      unrefresh:false,
      // 画图
      refresh:{},
      ctx:{},
      startO:0,
      v:5,
      dpr:Math.floor(window.devicePixelRatio),
      minlength:30
    }
  },
  created(){
    this.cscroll=this.scroll
    this.cscroll*=this.scale
    this.startO=this.dpr*this.minlength

  },
  mounted(){
    this.refresh=document.getElementById('refreshicon')
    this.refresh.height=this.dpr*50
    this.refresh.width=this.dpr*50
    this.ctx=this.refresh.getContext('2d')
    this.ctx.strokeStyle="rgb(135,135,135)"

    this.ctx.beginPath()
    this.ctx.arc(this.startO/2, this.startO/2, this.startO/2+5, 0, Math.PI*2, true)
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.moveTo(this.startO,0)
    this.ctx.lineTo(0,0)
    this.ctx.lineTo(0,this.startO)
    this.ctx.lineTo(this.startO,this.startO)
    this.ctx.closePath()
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/2,this.startO/6)
    this.ctx.lineTo(this.startO/9,this.startO/6)
    this.ctx.lineTo(this.startO/9,this.startO/2)
    this.ctx.lineTo(this.startO/2,this.startO/2)
    this.ctx.closePath()
    this.ctx.fillStyle="rgb(217,217,217)"
    this.ctx.stroke()
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/12*7,this.startO/32*7)
    this.ctx.lineTo(this.startO/12*11,this.startO/32*7)
    this.ctx.lineWidth=2
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/12*7,this.startO/32*11)
    this.ctx.lineTo(this.startO/12*11,this.startO/32*11)
    this.ctx.lineWidth=2
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/12*7,this.startO/32*15)
    this.ctx.lineTo(this.startO/12*11,this.startO/32*15)
    this.ctx.lineWidth=2
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/12*1,this.startO/32*20)
    this.ctx.lineTo(this.startO/12*11,this.startO/32*20)
    this.ctx.lineWidth=2
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/12*1,this.startO/32*24)
    this.ctx.lineTo(this.startO/12*11,this.startO/32*24)
    this.ctx.lineWidth=2
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(this.startO/12*1,this.startO/32*28)
    this.ctx.lineTo(this.startO/12*11,this.startO/32*28)
    this.ctx.lineWidth=2
    this.ctx.closePath()
    this.ctx.stroke()


  },
  methods:{
    touchStart:function(e){
      //画图
      this.ctx.beginPath()
      this.ctx.moveTo(this.startO[0],this.startO[1])
      //下拉
      let hlHeight=document.getElementById('homelist').scrollHeight
      let ftHeight=document.getElementById('footer').scrollHeight
      let st=document.documentElement.scrollTop
      let ch=e.view.document.body.clientHeight
      if (st<5) {
        this.ispulldown=true
      }
      console.log(hlHeight-st-ch+ftHeight+this.cscroll);
      if (hlHeight-st-ch+ftHeight+this.cscroll<5) {

        this.ispullup=true
      }
      if (this.scrollend!=0) {
        this.scrollend=0
      }
      this.startY=e.touches[0].pageY
      this.moveY=e.touches[0].pageY
    },
    touchMove:function(e){
      //画图
      if (this.start[1]==this.dpr*this.minlength) {
        this.start[0]-=this.v
        this.ctx.lineTo(this.start[0],this.start[1])

        // if (this.start[0]==this.dpr*this.minlength) {
        //   this.ctx.moveTo(this.start[0],this.start[1]-1)
        // }else {
        //   this.ctx.moveTo(this.start[0],this.start[1])
        // }
      }
      if (this.start[0]==this.dpr*this.minlength) {
        this.start[1]+=this.v
        this.ctx.lineTo(this.start[0],this.start[1])
        // if (this.start[1]==this.dpr*this.minlength) {
        //   this.ctx.moveTo(this.start[0]+1,this.start[1])
        // }else {
        //   this.ctx.moveTo(this.start[0],this.start[1])
        // }
      }
      if (this.start[1]==this.dpr*3*this.minlength) {
        this.start[0]+=this.v
        this.ctx.lineTo(this.start[0],this.start[1])
        // if (this.start[0]==this.dpr*3*this.minlength) {
        //   this.ctx.moveTo(this.start[0],this.start[1]-1)
        // }else {
        //   this.ctx.moveTo(this.start[0],this.start[1])
        // }
      }
      if (this.start[0]==this.dpr*3*this.minlength) {
        this.start[1]-=this.v

        // this.ctx.moveTo(this.start[0],this.start[1])
      }
      this.ctx.lineTo(this.start[0],this.start[1])
      this.ctx.moveTo(this.start[0],this.start[1])
      this.ctx.closePath()
      this.ctx.stroke()
      //下拉
      let diff=e.touches[0].pageY-this.moveY
      let height = e.touches[0].pageY-this.startY
      let v=diff
      if (diff>0&&this.ispulldown===true) {
        if (height>50) {
          if (this.cscroll<this.top*this.scale) {
            if (this.cscroll>this.showupdate*this.scale) {
              var a=document.documentElement.scrollTop
              if (this.update===false) {
                  this.update=true
              }
            }
            this.cscroll+=v
          }
        }
      }
      else if (diff<0&&this.ispulldown===true) {
        this.cscroll+=v
        if (this.cscroll<this.showupdate*this.scale) {
          if (this.update===true) {
             this.update=false
             this.unrefresh=true
          }
        }
      }
      // if (diff<0&&this.ispullup===true){
      //   if (height<-20) {
      //     this.update=true
      //   }
      //
      // }
      this.moveY=e.touches[0].pageY
    },
    touchEnd:function(e){
      //画图
      this.ctx.clearRect(0,0,this.dpr*50,this.dpr*50)
      this.start=[this.dpr*3*this.minlength,this.dpr*this.minlength]
      //下拉
      if (this.update===true) {
        let that =this
        that.cscroll=-100
        that.refreshing=true
        setTimeout(function(){
          that.getUpdate()
        },1000)
      }
      if(this.unrefresh===true){
        this.cscroll=this.scroll*this.scale
      }
      this.endY=e.changedTouches[0].pageY
      this.resultY=this.startY-this.endY
      this.scrollend=0.5
      this.ispulldown=false
      this.ispullup=false
      this.unrefresh=false
    }
  }
}
