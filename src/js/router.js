import VueRouter from 'vue-router'
import main from '../compoment/main.vue'
import One from '../compoment/indexFourOne.vue'
import Two from '../compoment/indexFourTwo.vue'
import Three from '../compoment/indexFourThree.vue'
import Four from '../compoment/indexFour.vue'
//import find from '../compoment/main.vue'
import talk from '../compoment/talk.vue'
import goods from '../compoment/goods.vue'
import user from '../compoment/user.vue'
import login from '../compoment/login.vue'
import search from '../compoment/search.vue'
import mainView from '../compoment/mainView.vue'
import mainView2 from '../compoment/mainView2.vue'
import mainView3 from '../compoment/mainView3.vue'
import goodsView from '../compoment/goodsView.vue'

export default new VueRouter({
	routes:[
	  {path:'/main',component:main},
	  {path:'/indexFourOne',component:One},
	  {path:'/indexFourTwo',component:Two},
	  {path:'/indexFourThree',component:Three},
	  {path:'/indexFour',component:Four},
//	  {path:'/find',component:find},
	  {path:'/talk',component:talk},
	  {path:'/goods',component:goods},
	  {path:'/user',component:user},
	  {path:'/login',component:login},
	  {path:'/search',component:search},
	  {path:'/mainView',component:mainView},
	  {path:'/mainView2',component:mainView2},
	  {path:'/mainView3',component:mainView3},
	  {path:'/goodsView',component:goodsView},
	  {path:'*',redirect:'/main'},
	  
	]
})
