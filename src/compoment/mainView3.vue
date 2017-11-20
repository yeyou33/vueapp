<template>
    <div>
      <backbar></backbar>
      <!--<spinner></spinner>-->
      <div class="detailMargin backAddFont">
        <mu-sub-header class="detailTitle">{{title}}</mu-sub-header>
        <mu-card-title :subTitle="ymd"/>
        <mu-content-block class="detailContent">
          <mu-card-media>
            <img :src="src"/>
          </mu-card-media>
          <br>
          {{conent}}
        </mu-content-block>
      </div>
    </div>
</template>
<style lang="less" >
  /*@import './../assets/css/public.css';*/
  .detailTitle{
    font-size: 25px;
    font-weight: bold;
  }
  .detailMargin{
  	margin-top: 56px;
    height: 100%;
    width: 100%;
    position: relative;
    background: #fff;
    z-index: 30;  	
  }
  .detailContent{
    font-size: 16px;
  }

</style>
<script type="text/ecmascript-6">
  import backbar from './back.vue'
//import spinner from './public/spinner.vue'
    export default{
      data(){
        return{
//        tranform: this.$store.state.tranform,
//        id: this.$route.params.id,
//        detailBody:[],
          ymd:'2017-11-30',
          title:'',
          conent:'',
          src:''
        }
      },
      created() {
        this.$http.get('demo.json').then((res) => {
//        this.tranform = false;
          this.title = res.body.View[2].title;
          this.src = res.body.View[2].src;
          this.conent = res.body.View[2].conent;
          console.log(res)
          this.newDate();
        }, (error) => {
          console.log(error)
        })
      },
      methods:{
        //时间格式处理
        newDate(){
          let myDate = new Date();
          let year = 1900+myDate.getFullYear();
          let month = myDate.getMonth()+1;
          if(month<10){
            month = "0" + month
          }
          let day = myDate.getDate();
          if(day<10){
            day = "0" + day
          }
          this.ymd = year+"-"+month+"-"+day;
          // console.log(this.ymd);
        }
      },
      components:{
        backbar
//      spinner
      }
    }
</script>
