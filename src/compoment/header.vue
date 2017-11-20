<template>
	<main>
		<mu-appbar :title="headtitle" class="indexTopFixed">
		  <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
          <mu-icon-button icon='search' slot="right" @click="search"/>
		</mu-appbar>
		
		<div>
		    <mu-drawer :open="open" :docked="docked" @close="toggle()">
		        <router-link to="/login">
		    	
		        <div class="drawerBg">
		          <div class="drawerUserImg">

		              <div class="drawerUserRadius" >
		                <img src="../assets/image/defaultUser.png">
		                <!--<img :src="this.$store.state.headImg" v-if="this.$store.state.sessionToken">-->
		              </div>

		          </div>
		          <div class="drawerUsername">
		              {{drawerUsername}}
		          </div>
		        </div>
		        </router-link>
		        
            <mu-list>
	          <mu-list-item title="我的文章">
	            <mu-icon value="import_contacts" slot="left" color="#009688"/>
	          </mu-list-item>
	          <mu-list-item title="我的收藏">
	            <mu-icon value="loyalty" slot="left" color="#009688"/>
	          </mu-list-item>
	          <router-link to="/feedBack">
	            <mu-list-item title="意见反馈">
	              <mu-icon value="feedback" slot="left" color="#009688"/>
	            </mu-list-item>
	          </router-link>
	          <mu-list-item title="咨询客服" @click="phoneDialogOpen">
	            <mu-icon value="call" slot="left" color="#009688"/>
	          </mu-list-item>
	          <mu-dialog :open="phoneDialog" @close="phoneDialogClose">
	            确定拨打当前电话（400-123-123）吗？
	            <mu-flat-button slot="actions" @click="phoneDialogClose" primary label="取消"/>
	            <mu-flat-button slot="actions" primary @click="phone" label="拨打"/>
	          </mu-dialog>
	          <mu-list-item title="设置">
	            <mu-icon value="settings" slot="left" color="#009688"/>
	          </mu-list-item>
	          <mu-list-item title="退出登录" @click="logoutDialogOpen">
	            <mu-icon value="exit_to_app" slot="left" color="#009688"/>
	          </mu-list-item>
	          <mu-dialog :open="dialog" @close="logoutDialogClose">
	                       确定退出当前账号吗？
	            <mu-flat-button slot="actions" @click="logoutDialogClose" primary label="取消"/>
	            <mu-flat-button slot="actions" primary @click="logout" label="退出"/>
	          </mu-dialog>
	        </mu-list>		        
		    </mu-drawer>
		</div>
	</main>
</template>

<script>
	
export default {
  data () {
    return {
      open: false,
      docked: true,
      dialog: false,
      phoneDialog: false,
      drawerUsername: '登录 | 注册',
      
    }
  },
  components:{
  	
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    phone(){
      window.location.href = 'tel://400123123'
    },
    //控制侧滑栏
    toggle (flag) {
      this.open = !this.open;
      this.docked = !flag;
    },
    logoutDialogOpen(){
      this.dialog = true
    },
    logoutDialogClose(){
      this.dialog = false
    },
    phoneDialogOpen(){
      this.phoneDialog = true
    },
    phoneDialogClose(){
      this.phoneDialog = false
    },
    //注销
    logout(){
      let data = {
        sessionToken: false,
        drawerUsername: '登录 | 注册',
        headImg: ''
      }
      this.logOut(data);
      this.dialog = false;
      this.open = false;
      this.docked = true;
      this.$router.push('/');
      window.location.reload();
    },
    search(){
      this.$router.push('/search');
    }    
  },
  props:['menushow','headtitle']
}	
</script>

<style scoped>
  .indexTopFixed{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index:999;
  }
  .drawerBg{
    position: relative;
    width:100%;
    height: 25%;
    background: #009688;
  }
  .drawerUserImg{
    position: absolute;
    left: 10%;
    bottom: 25%;
  }
  .drawerUserRadius img{
    width: 60px;
    height: 60px;
    border-radius: 100px;
    border: 2px solid #fff;
  }
  .drawerUsername{
    position: absolute;
    left: 10%;
    bottom: 12%;
    color: #dedede;
  }
</style>