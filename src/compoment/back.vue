<template>
    <div class="backBar font">
        <mu-appbar>
          <mu-icon-button icon="arrow_back" slot="left" @click="routerBack"/>
        </mu-appbar>
    </div>
</template>
<style lang="less" scoped>
  /*@import '../../assets/css/public.css';*/
  .backBar{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index:998;
  }
  .searchField{
    color: #FFF;
    margin-bottom: 0;
  }

</style>
<script type="text/ecmascript-6">
//import { mapActions } from 'vuex'
  export default{
    data () {
      return {

      }
    },
    methods: {
//    ...mapActions(['setIsFirst']),
      routerBack(){
/*        if(this.$store.state.sessionToken){
          if(this.$store.state.isFirst){
            this.setIsFirst(false);
            this.$router.go(-1);
            this.$router.go(-1);
          }else{
            this.$router.go(-1)
          }
        }else{
          this.$router.go(-1)
        }*/
       this.$router.go(-1)
      }
    }
  }
</script>
