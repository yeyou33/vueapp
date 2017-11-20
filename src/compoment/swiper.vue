<template>
<div>
<swiper :options="swiperOption" ref="mySwiper">
  <!-- 幻灯内容 -->
  <swiper-slide><img src="../assets/image/ban1.jpg"/></swiper-slide>
  <swiper-slide><img src="../assets/image/ban2.jpg"/></swiper-slide>
  <swiper-slide><img src="../assets/image/ban3.jpg"/></swiper-slide>
  <!-- 以下控件元素均为可选 -->
  <div class="swiper-pagination" slot="pagination"></div>
<!--  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-scrollbar"  slot="scrollbar"></div>-->
</swiper>

</div>
</template>
<style>
	.swiper-container{
		width: 100%;
		height: 0;
		padding-bottom: 27%;	
	} 
	.swiper-container img{
		width: 100%;
		height: 100px;
	}
</style>
<script>  
    import { swiper, swiperSlide } from 'vue-awesome-swiper'  
    export default {  
        components: {  
            swiper,  
            swiperSlide  
        },  
        data() {  
            return {  
                swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                autoplay: 2000,
                msg:'',
                pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }  
            }  
        },  
        //定义这个sweiper对象  
        computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        },
        created() {
      //判断网络状态
        this.$http.get('demo.json').then((res) => {
      	this.msg = res.body.swiper
      	console.log(res.body.swiper)
//      this.tranform = false;
      }, (error) => {
        console.log(error)
      })
    }        
  
    }  
</script>  