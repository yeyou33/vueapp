 <template>
     <main>
     	<!--<v-header></v-header>-->
     	<router-view></router-view>
     	<v-footer></v-footer>
     </main>
</template>

<script>
//  import vheader from './compoment/header.vue'
    import vfooter from './compoment/footer.vue'
    
    export default{
    	components:{
//  		'v-header':vheader,
    		'v-footer':vfooter
    	}
    }
</script>

<style>

</style>
