<template>
  <div id="app">
   <loading v-show="$root.bLoading"/>
   <Header v-show="$root.bNav"/>
   <router-view/>
   <Footer v-show="$root.bFoot"/>
  </div>
</template>
 
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
 import loading from '../components/loading.vue'
export default {
  name: 'App',
  data(){
	  return {
     
    }
  },
  watch:{
    $route:{
      handler(newVal){
        let path = newVal.path;
        if(/home|follow/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
        if(/user|shop|wallet/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
        if(/login|reg/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=false;
        }
      },
      immediate:true
    }
  },
  components: {
    Header,Footer,loading
	
  },
  methods:{
	
	  }
  }

</script>

<style>

</style>
