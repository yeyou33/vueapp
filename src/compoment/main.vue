<template>
	<main>
		<v-header></v-header>
		<div id="center">
         <!--<header :headtitle="headtitle" ></header>-->
			
			<div id="banner">
<!--				<ul>
					<li><img src="../assets/image/ban2.jpg"/></li>
				</ul>	-->
				<swiper></swiper>
			</div>
			<div class="first">
				<div>
				<router-link to="/indexFourOne"><img :src="src" alt="" /></router-link>				
				</div>
				<div>
				<router-link to="/indexFourTwo"><img :src="src2" alt="" /></router-link>				
				</div>
			</div>
			<div class="second">
				<div>
				<router-link to="/indexFourThree"><img :src="src3"/></router-link>
				</div>
				<div>
				<router-link to="/indexFour"><img :src="src4"/></router-link>				
				</div>
			</div>
			<div class="title">
				<p>发现美好</p>
			</div>
			<div id="footer">
				<router-link to="/mainView">
					<img :src="item[0].info.src"/>
					<div class="footerB">
						<h2>{{item[0].info.title}}</h2>
						<p>{{item[0].info.time}}</p>					
					</div>					
				</router-link>
			</div>
			<div id="footer">
				<router-link to="/mainView2">
					<img :src="item[1].info.src"/>
					<div class="footerB">
						<h2>{{item[1].info.title}}</h2>
						<p>{{item[1].info.time}}</p>					
					</div>					
				</router-link>
			</div>
			<div id="footer">
				<router-link to="/mainView3">
					<img :src="item[2].info.src"/>
					<div class="footerB">
						<h2>{{item[2].info.title}}</h2>
						<p>{{item[2].info.time}}</p>					
					</div>					
				</router-link>
			</div>			
		</div>
		<v-footer></v-footer>
	</main>

</template>

<script>
	import vheader from './header.vue'
	import swiper from './swiper.vue'
	import vfooter from './footer.vue'
//	import publictitle from './publicTitle.vue'
	export default{
		data(){
			return{
//				headtitle:"发现"
                src:'',
                src2:'',
                src3:'',
                src4:'',
                item:''
         
			}
		},
		components:{
//			publictitle
            'v-header':vheader,
            'swiper':swiper,
            'v-footer':vfooter
		},
		mounted(){
			this.$http.get('demo.json',{
				        params:{
								user1:'hello'
							}}).then(function(res){
				console.log(res.body.src[2])
				this.src=res.body.src[0]
				this.src2=res.body.src[1]
				this.src3=res.body.src[2]
				this.src4=res.body.src[3]
				this.item=res.body.item
				console.log(res.body.item[0].info.src)
			})
		}
	}
</script>

<style scoped>
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
    .first,.second{
    	width: 100%;
    	height: 75px;
    	box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }
    .first>div,.second>div{
    	float: left;
    	width: 50%;
    	height: 75px;
    	box-shadow: 5px 0px 1px #999;
    }
    .first>div img{
    	width: 100%;
    	height: 100%;
    }
    .second>div img{
    	width: 100%;
    	height: 100%;
    }
    .title{
    	margin-top: 12px;
    	background: #FFFFFF;
    	padding: 10px 10px 10px 20px;
    	font-size: 18px;
    	border-left: 5px solid #03A9F4;
    	font-weight: 700;
    }
    #footer{
    	margin: 20px 0px 56px 0px;
    	background-color: #FFFFFF;
    	box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }
    #footer img{
    	width: 100%;
    	height: auto;
    }
    #footer h2{
    	font-size: 24px;
    	color: rgba(0,0,0,.87);
    	line-height: 36px;
    }
    #footer p{
    	font-size: 14px;
    	color: rgba(0,0,0,.54);
    	display: block;
    }
    #footer .footerB{
    	padding: 8px 25px;
    }
</style>