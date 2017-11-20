<template>
  <div class="oneBg">
    <backbar></backbar>
    <!--<spinner v-if='tranform'></spinner>-->
    <div class="detailMargin font">
      <div class="oneImg">
        <img class="img"src='https://images.simpletour.com/simpletour/images/wechat_act/95ca6d6b88937091768ad2a73ca82a5f.jpg' />
      </div>
      <div class="oneImg top">
        <img class="img"  src='https://images.simpletour.com/simpletour/images/wechat_act/564c242bc47feb135e04aa3acc4d4222.jpg' />
      </div>
      <div class="doubleImg">
        <div class="doubleImgGroup right bottom">
          <img :src='One[0].img'/>
          <div class="imgTitle">
            {{One[0].conent}}
          </div>
          <div class="price">
            <span>{{One[0].price}}</span>
            <span>元起</span>
          </div>
        </div>
        <div class="doubleImgGroup bottom">
          <img :src="One[1].img" />
          <div class="imgTitle">
            {{One[1].conent}}
          </div>
          <div class="price">
            <span>{{One[1].price}}</span>
            <span>元起</span>
          </div>
        </div>
        <div class="doubleImgGroup right bottom">
          <img :src="One[2].img"/>
          <div class="imgTitle">
            {{One[2].conent}}
          </div>
          <div class="price">
            <span>{{One[2].price}}</span>
            <span>元起</span>
          </div>
        </div>
        <div class="doubleImgGroup bottom">
          <img :src="One[3].img" />
          <div class="imgTitle">
            {{One[3].conent}}
          </div>
          <div class="price">
            <span>{{One[3].price}}</span>
            <span>元起</span>
          </div>
        </div>
      </div>
      <div class="oneImg">
        <img class="img" alt src='https://images.simpletour.com/simpletour/images/wechat_act/6c2271120642a8a2c3c525a90760192c.jpg' />
      </div>

    </div>
  </div>
</template>
<style lang="less" scoped>
  /*@import './../assets/css/public.css';*/
  .detailMargin{
  	margin-top: 56px;
  }
  .oneBg{
    background-color: #52E4E3 ;
    position: absolute;
    z-index: 40;
    /*margin-bottom: 56px;*/
  }
  .top{
    margin-top: 30px;
  }
  .oneImg{
    width: 100%;
  }
  .img{
    width: 100%;
    height: auto;
    display:block;
  }
  .doubleImg{
    overflow:auto;
    width: 90%;
    margin: 20px auto;
  }
  .doubleImgGroup{
    float: left;
    width: 47%;
    height: auto;
    background-color: #ffffff;
  }
  .right{
    margin-right: 18px;
  }
  .bottom{
    margin-bottom: 18px;
  }
  .doubleImgGroup img{
    width: 100%;
    display: block;
  }
  .imgTitle{
    color: #4A4A4A;
    width: 90%;
    height: 45px;
    margin: 5px auto;
    text-overflow: ellipsis;
    overflow: hidden;
    /*white-space:nowrap;*/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price{
    margin: 10px;
    color: #F5A623;
  }
</style>
<script type="text/ecmascript-6">
  import backbar from './backBar.vue'
  export default{
    data(){
      return{
      	One:''
/*      	"img":'',
      	"price":'',
      	"conent":''*/
//      tranform: this.$store.state.tranform,
      }
    },
    created() {
      this.$http.get('demo.json').then((res) => {
//      this.tranform = false;
        this.One = res.body.One
        console.log(res.body.One)
      }, (error) => {
        console.log(error)
      })
    },
    components:{
      backbar,
//    spinner
    }
  }
</script>
