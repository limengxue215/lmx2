<template>
  <div class="app">
    <div class="findPassword">
		<h3>注册</h3>
		
		<uc-input
		v-model="username" pl='请输入用户名'></uc-input>
		
		<uc-input
		v-model="password" type='password' pl='请输入密码'></uc-input>
		{{mess}}
		 <UcButton class='goLogin' bgColor="#e8c756" text="注册" @clicks="reg"></UcButton>
		 <div class="goLogin" @click="home">返回首页</div>
	</div>
	
  </div>
</template>

<script>	
	import UcButton from '../components/uc-button/uc-button.vue'
	import UcInput from '../components/uc-input/uc-input.vue'
  export default {
    name:'app',
    props:{
		
	},
    data(){
      return {
        username:'',
		password:'',
		mess:''
      }
    },
    components:{
		UcInput,UcButton
	},
    mounted(){},
    updated(){},
    methods:{
		reg(){
			this.$axios({
			  url:'/api/reg',
			  method:'post',
			  data:{
			    username:this.username,
			    password:this.password
			  }
			}).then(
			  res => {
			    if(res.data.err===0){
			      //种local  跳转到之前
			      this.$router.push('/login')
			    }else{
			      this.mess = res.data.msg
			    }
			  }
			)
		},
		home(){
		this.$router.push('/home')
		}
	}
  }
</script>

<style scoped>
 .findPassword {
   width: 100%;
   height: 100vh;
   box-sizing: border-box;
   padding: 0.52rem;
   background: linear-gradient(251deg, rgba(192, 59, 112, 0.97), rgba(26, 26, 168, 0.97));
 }
 .findPassword h3 {
   font-size: 0.693333rem;
   font-family: Alibaba PuHuiTi;
   font-weight: bold;
   color: white;
   margin-bottom: 0.72rem;
   line-height: 0.733333rem;
   margin-top: 1.586667rem;
 }

 .findPassword ::-webkit-input-placeholder {
   /* WebKit, Blink, Edge */
   color: rgba(255, 255, 255, 0.4);
 }
 .findPassword :-moz-placeholder {
   /* Mozilla Firefox 4 to 18 */
   color: rgba(255, 255, 255, 0.4);
 }
 .findPassword ::-moz-placeholder {
   /* Mozilla Firefox 19+ */
   color: rgba(255, 255, 255, 0.4);
 }
 .findPassword :-ms-input-placeholder {
   /* Internet Explorer 10-11 */
   color: rgba(255, 255, 255, 0.4);
 }

 .findPassword .goLogin {
   font-size: 0.4rem;
   font-family: PingFang SC;
   font-weight: 400;
   color: white;
   width: 100%;
   text-align: center;
   margin-top: 0.746667rem;
 }
 
 /*# sourceMappingURL=findPassword.css.map */
 
</style>
