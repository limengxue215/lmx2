<template>
  <div class="app">
    <div class="findPassword">
		
		<h3>登录</h3>
		
		<uc-input
		v-model="username" pl='请输入用户名'></uc-input>
		
		<uc-input
		v-model="password" type='password' pl='请输入密码'></uc-input>
		<p class="mess">{{mess}}</p>
		
		 <UcButton class='goLogin' bgColor="#e8c756" text="登录" @clicks="login"></UcButton>
		 <div class="goLogin" @click="reg">我要注册</div>
	</div>
	
  </div>
</template>

<script>	
	import UcButton from '../components/uc-button/uc-button.vue'
	import UcInput from '../components/uc-input/uc-input.vue'
	import UcNav from '../components/uc-nav/uc-nav.vue'
  export default {
    name:'app',
    props:{
		
	},
    data(){
      return {
		mess:'',
        username:'',
		password:'',
      }
    },
    components:{
		UcInput,UcButton,UcNav
	},
    mounted(){},
    updated(){},
    methods:{
		login(){
		this.$axios({			
			url:'/api/login',
			method:'post',
			data:{
			  mess:'',
			  username:this.username,
			  password:this.password}			
		}).then(res=>{
			if(res.data.err===0){
			  //种local  跳转到之前
			  window.localStorage.setItem('user',JSON.stringify(res.data));
			  if(!this.$route.query.p){
			    this.$router.push('/user')
			  }else{
			    this.$router.push(this.$route.query.p)
			  }
			}else{
			  this.mess = res.data.msg
			}
		})
		},
		reg(){
			this.$router.push('/reg')
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
 .mess{
	  font-size: 0.4rem;
	  color: #FFF0F6;
 }
 /*# sourceMappingURL=findPassword.css.map */
 
</style>
