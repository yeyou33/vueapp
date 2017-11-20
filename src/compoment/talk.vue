<template>
	<main>
		<v-header></v-header>
		<div id="box">
			<div id="one">				
			</div>
			<div class="banner">
			<img :src="msg[0].img"/>				
			</div>
			<div class="bannerT">
				<div class="bannerTop"></div>
				<p class="two">#那些让人羡慕的爱情#</p>
				<p class="three">快来参与吧!</p>
			</div>
			<div id="oneT">
				<p>那些让人羡慕的爱情,多么美丽，和大家说说吧那些让人羡慕的爱情,多么美丽，和大家说说吧！</p>
			</div>
			<div class="title">
				<p>热门话题</p>
			</div>		
			<div class="hot">
				<div class="hotOne">
					<img :src="msg[1].img"/>
					<p>#我们喜欢的明星都结婚了#</p>
				</div>
				<div class="hotOne">
					<img :src="msg[2].img"/>
					<p>#我好像开始喜欢你了#</p>
				</div>
				<div class="hotOne">
					<img :src="msg[3].img"/>
					<p>#前任送的礼物留还是扔#</p>
				</div>				
			</div>
			<div class="title">
				<p>热门动态</p>
			</div>	
			
			<ul>
				<li>					
					<div class="hotBox">
						<div>
							<div id="left">
								<img :src="msg[4].img"/>
							</div>
							<div id="right">
								<p>六弄人生</p>
								<p>2017-07-04</p>
							</div>							
						</div>
						<div id="bottom">
							<p>打一场比赛，我们过关斩将，力求通关。玩一个游成，我们全情投入，期待通关。谈一回恋爱，分分合合，持久作战，只为过一场人生，经历多少悲欢洗礼，天人交战，最终才能活的明白通透，顺利通关？天下事，事事皆是修炼，时时都在通关之路上。我把这些相碎的念头揉捻成了《通关》这首歌。</p>
						</div>
					</div>
				</li>
				<li>					
					<div class="hotBox">
						<div>
							<div id="left">
								<img :src="msg[5].img"/>
							</div>
							<div id="right">
								<p>leachzhou</p>
								<p>2017-07-04</p>
							</div>							
						</div>
						<div id="bottom">
							<p>看过三遍原著，最让我爱的还是陆之昂，最让我心疼的还是遇见。看了剧，还是喜欢陆之昂，站司夏CP，但是却真的喜欢之昂和立夏。有的人说之昂对立夏只是朋友或者是兄妹。我却一直相信他是喜欢她的。是一场盛大的，无声无息的暗恋。</p>
						</div>
					</div>
				</li>
				<li>					
					<div class="hotBox">
						<div>
							<div id="left">
								<img :src="msg[6].img"/>
							</div>
							<div id="right">
								<p>yexiao</p>
								<p>2017-07-04</p>
							</div>							
						</div>
						<div id="bottom">
							<p>当你在前进的道路上，永远有一群煞笔看着你，盼着你跌倒，等着你失败，看你的笑话，所以你必须拼命奔跑，永不言败。</p>
						</div>
					</div>
				</li>
				<li>					
					<div class="hotBox">
						<div>
							<div id="left">
								<img :src="msg[7].img"/>
							</div>
							<div id="right">
								<p>一叶知秋</p>
								<p>2017-07-04</p>
							</div>							
						</div>
						<div id="bottom">
							<p>我以为我能逗你笑你就会喜欢上我，但是我居然输给了让你哭的人。总有一个人让你疼到骨子里也不舍得放弃。</p>
						</div>
					</div>
				</li>				
			</ul>
		</div>
        <v-footer></v-footer>
	</main>
</template>

<script>
	import vheader from './header.vue'
	import vfooter from './footer.vue'
	
	export default{
		data(){
			return{
				msg:''
			}
		},
		components:{
			'v-header':vheader,
			'v-footer':vfooter
		},
        created() {
      //判断网络状态
        this.$http.get('demo.json').then((res) => {
      	this.msg = res.body.talk
      	console.log(res.body.talk)
//      this.tranform = false;
      }, (error) => {
        console.log(error)
      })
    }
	}
</script>

<style>
	#box{
		position: absolute;
		top: 56px;
		left: 0;
	}
	#box #one{
		position: absolute;
		width: 100%;
		height: 200px;
		background: #000;
		opacity: 0.5;
	}
	#box .banner img{
		width: 100%;
		height: 200px;
	}
	#box .bannerT{
		width: 70%;
		height: 80px;
		position: absolute;
		top: 65px;
		right: 15%;
		color: #fff;
		text-align: center;
	}
	#box .bannerTop{
		border-top: 2px solid #dedede;
		box-sizing: border-box;
	}
	.bannerT .two{
		padding: 25px 0px 20px;
		font-weight: 700;
		font-size: 18px;
	}
	.bannerT .three:before{
		content: '';
		border-top: 2px solid #dedede;
		position: absolute;
		width: 30%;
		left: 0;
		bottom: 5px;
	}
	.bannerT .three:after{
		content: '';
		border-top: 2px solid #dedede;
		position: absolute;
		width: 30%;
		right: 0;
		bottom: 5px;
	}	
	#oneT{
		width: 100%;
		height: 50px;
		background: #FFFFFF;
		padding-top: 4px;
		font-size: 14px;
		line-height: 20px;
	}
	#oneT p{
		font-family: '新宋体';
		margin: 0 20px;
	}
    .title{
    	margin-top: 12px;
    	background: #FFFFFF;
    	padding: 10px 10px 10px 20px;
    	font-size: 18px;
    	border-left: 5px solid #03A9F4;
    	font-weight: 900;
    }	
    .hot{
    	width: 100%;
    	height: 115px;
    	padding: 10px 0px 0px 16px;
    	box-sizing: border-box;
    }
	.hot>div{
		width: 30%;
		height: 115px;
		float: left;
		margin-right: 10px;
	}
	.hot img{
		width: 100%;
		height: 70px;
		border-radius: 15px;
	}
	.hot p{
		font-size: 14px;
		line-height: 16px;
		color: #818181;
	}
	ul li{
		border-bottom: 1px solid #eee;
	}
	ul li:nth-last-child(1){
		margin-bottom: 56px;
	}
	ul .hotBox{
		margin: 3% 5%;
	}
	.hotBox #left{
		display: inline-block;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		float: left;
	}
	.hotBox #right{
		float: left;
		margin-left: 20px;
	}
	.hotBox #right p:nth-of-type(2){
		padding-top: 5px;
		font-size: 10px;
		color: #818181;
	}
	.hotBox #bottom{
		clear: both;
		margin-left: 60px;
	}
	.hotBox #bottom p{
		font-size: 14px;
		color: #333;
		line-height: 20px;
	}
	.hotBox img{
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	
</style>