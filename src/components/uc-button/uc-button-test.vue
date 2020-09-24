<template>
  <div id="app">
    <UcButton  text="登录" @clicks="obj"></UcButton>
  </div>
</template>

<script>
import UcButton from '../components/uc-button/uc-button.vue'

export default {
  name: 'App',
  components: {
    UcButton
  },
  methods:{
	  obj(e){
		  console.log(e)
		  
	  }
  }
}
</script>

<style>

</style>

2