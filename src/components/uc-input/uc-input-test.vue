<template>
  <div id="app">
    <uc-input
	v-model="username" pl='请输入用户名'></uc-input>
	
	<uc-input
	v-model="password" type='password' pl='请输入密码'></uc-input>
	
  </div>
</template>
 
<script>
import UcInput from '../components/uc-input/uc-input.vue'

export default {
  name: 'App',
  data(){
	  return {
     username:'',
     password:'',
    }
  },
  components: {
    UcInput
  },
  methods:{
	
	  }
  }

</script>

<style>

</style>
