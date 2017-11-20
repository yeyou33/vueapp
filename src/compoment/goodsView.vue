<template>
    <div>
      <backbar></backbar>
      <!--<spinner></spinner>-->
      <div class="detailMargin backAddFont">
        <mu-sub-header class="detailTitle">如何带最少的行李去旅行？干货！出行一定用得上！</mu-sub-header>
        <mu-card-title :subTitle="ymd"/>
        <mu-content-block class="detailContent">
          <mu-card-media>
            <img src="../assets/image/goodsview.jpg"/>
          </mu-card-media>
          <br>
          
          
      冬天来了，圣诞近了，跨年不远了，好多小伙伴也开始准备出行了，但是每次兴冲冲的收拾着行李，却发现，行李箱根本！不！够！装！如此悲催的事，貌似会发生在每一位的妹子身上。这时候，你急需要一篇干货贴来拯救你！如何带最少的行李去旅行？绝对的干货，实用技能现学现用~
1.“也许”路上会看的书，“可能”想要敷的面膜，“万一”下雨准备的雨伞，“说不定”会用到的另一个相机镜头，这些基本都用不到！不如一开始就把它们留在家里。
2.行前把随身物品清一清，比如把用不到的卡证从钱包里拿出来。该放下的东西就放下，比如把指甲剪短，指甲刀就不带了。
干货一：旅途中要带什么样的衣服？
原则一：永远以低调轻便好穿为原则。宽松的针织开衫比卫衣轻便，布裤子比牛仔裤轻便，浅口鞋比靴子轻便。如果一件衣服或鞋穿着怕破怕脏，或者走路不方便，别带。
原则二：多带基本款，带有多种组合搭配的单品，3件衣服+2条裤子可以互搭那种。如果一件衣服或一双鞋只有一种搭配，别带。
原则三：同一种类型的衣服带一件就够。比如一条牛仔裤和一条卡其裤。
干货二：让你轻装上阵的小物推荐
1.颈枕：有搭扣可以挂在背包外面，坐车坐飞机都能用得上。现在还有充气的U形枕，不用的时候可以收起来，某宝有卖，强烈推荐~
2.洗漱包：带那种塑料洗漱包能装，能挂，防水耐脏。
3.票据包：沿途登机牌车票门票收据备忘小纸条统统往里面扔，护照甚至大额现金都可以塞，不怕丢不怕揉。
4.抽绳布袋：有时候买鞋会送的，装鞋子用。

      
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
        }
      },
      created() {
/*        this.$http.get('https://api.leancloud.cn/1.1/classes/explore/'+this.id ).then((success) => {
          this.tranform = false;
          this.detailBody = success.body;
          this.newDate();
        }, (error) => {
          console.log(error)
        })*/
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
