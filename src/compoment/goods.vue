<template>
	<main>
		<v-header></v-header>
		<div id="center">
			<div id="banner">
<!--				<ul>
					<li><img src="../assets/image/ban2.jpg"/></li>
				</ul>-->
				<swiper></swiper>
			</div>
			<div class="nav">
				<div class="left">
					<img src="../assets/image/ViewGallery.png"/>
					<p>干货分类</p>
				</div>
				<div class="right">
					<img src="../assets/image/nav-list.png"/>
					<p>干货排行</p>
				</div>
			</div>
			<div class="title">
				<p>发现美好</p>
			</div>
			<ol>
				<li>
                   <router-link to="/goodsView">
						<div class="olLeft">
							<img :src="msg[0].img"/>
						</div>
						<div class="olRight">
							<p>{{msg[0].conent}}</p>
							<p>{{msg[0].time}}</p>
						</div>                   	
                   </router-link>

				</li>	
				<li>
                   <router-link to="/goodsView">
						<div class="olLeft">
							<img :src="msg[1].img"/>
						</div>
						<div class="olRight">
							<p>{{msg[1].conent}}</p>
							<p>{{msg[1].time}}</p>
						</div>                   	
                   </router-link>

				</li>
				<li>
                   <router-link to="/goodsView">
						<div class="olLeft">
							<img :src="msg[2].img"/>
						</div>
						<div class="olRight">
							<p>{{msg[2].conent}}</p>
							<p>{{msg[2].time}}</p>
						</div>                   	
                   </router-link>

				</li>	
				<li>
                   <router-link to="/goodsView">
						<div class="olLeft">
							<img :src="msg[3].img"/>
						</div>
						<div class="olRight">
							<p>{{msg[3].conent}}</p>
							<p>{{msg[3].time}}</p>
						</div>                   	
                   </router-link>

				</li>
				<li>
                   <router-link to="/goodsView">
						<div class="olLeft">
							<img :src="msg[4].img"/>
						</div>
						<div class="olRight">
							<p>{{msg[4].conent}}</p>
							<p>{{msg[4].time}}</p>
						</div>                   	
                   </router-link>

				</li>				
			</ol>
		</div>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import vheader from './header.vue'
	import vfooter from './footer.vue'
	import swiper from './swiper.vue'
	export default{
		data(){
			return{
				msg:''
			}
		},
		components:{
			'v-header':vheader,
			'swiper':swiper,
			'v-footer':vfooter
		},
        created() {
      //判断网络状态
      this.$http.get('demo.json').then((res) => {
      	this.msg = res.body.goods
      	console.log(res.body.goods)
//      this.tranform = false;
      }, (error) => {
        console.log(error)
      })
    }		
	}
</script>

<style scoped>	
	html,body{
		width: 100%;
		height: 100%;
	}
	main #center{
		width: 100%;
		position: absolute;
		top: 56px;
		left: 0;
	}
	main #banner{
		width: 100%;
		height: 100px;
	}
	main ul{
		position: absolute;
		top: 0px;
		left: 0px;
	}
	main ul li img{
		width: 100%;
		height: 100px;
	}
	.nav{
		width: 100%;
		height: 60px;
	}
	.nav .left{
		width: 50%;
		height: 60px;
		float: left;
		line-height: 60px;
	}
	.nav p{
		color: #009688;
		float: left;
		font-size: 14px;
		font-weight: bold;
	}
	.nav img{
		display: inline-block;
		width: 20px;
		height: 20px;
	    float: left;
	    padding: 20px 10px 0px 45px;
	}
	.nav .right{
		width: 50%;
		height: 60px;
		float: right;
		line-height: 60px;
	}
    .title{
    	margin-top: 12px;
    	background: #FFFFFF;
    	padding: 10px 10px 10px 20px;
    	font-size: 18px;
    	border-left: 5px solid #03A9F4;
    	font-weight: 700;
    }	
    .olLeft{
    	width: 80px;
    	height: 80px;
    	float: left;
    }
    .olRight{
    	width: 270px;
    	height: 45px;
    	float: right;
    	padding: 10px;
    }
    .olLeft img{
    	width: 60px;
    	height: 60px;
    	margin: 10px 20px;
    	
    }
    .olRight p:nth-of-type(1){
    	line-height: 20px;
    	font-size: 14px;
    	color: #000;
    	white-space: pre-wrap
    }
    .olRight p:nth-of-type(2){
    	line-height: 20px;
    	font-size: 14px;
    	color: #000;
    	float: right;
    }
    ol li{
    	width: 100%;
    	height: 80px;
    	padding-bottom: 10px;
    }   
    ol li:nth-last-child(1){
    	margin-bottom: 56px;
    } 
</style>