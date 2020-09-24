<template>
  <div class="app">
	<div class="item-t" v-for="(item,index) in list" :key='item._id' @click="toDetail">
	        <img :src="item.detail.auth_icon" alt="">
	        <div class="info">
	            <h2>{{item.detail.auth}}签约 {{item.time1}} 分签约
				<br/>
				某某平台</h2>
	            <p>签约时间：{{item.time1}}</p>
	            <p>单次盈利：0.6%-1.2%</p>
	        </div>
		<div class="btn">待付款</div>
	</div>
	
  </div>
</template>

<script>	
// import UcButton from '../components/uc-button/uc-button.vue'
  export default {
    name:'app',
    props:{

	},
    data(){
      return {	
		  collectionName:'detail',
        list:{}
      }
    },
    components:{
	// UcButton
	},
	created:{
		
	},
  mounted(){
    // let collectionName=this.$route.query.collectionName;
    // let _id = this.$route.params._id;
	// console.log(123)
   this.$axios({
     url:'/api/home',
     params:{_limit:10,page:1}
   }).then(
     res => {
   	  // console.log(res.data.data)
   	  this.list=res.data.data
     }
   )
   
  },
    
    methods:{
		toDetail(){
		  if(this.collectionName){
			  this.$router.push('/detail')
		  }
		}
	}
  }
</script>

<style scoped>
 .btn{
	
	    background: #e8c756;
	    border-radius: 0.386667rem;
	    text-align: center;
	    width: 2.133333rem;
	    float: right;
	    margin-right: 0.4rem;
	    height: 0.773333rem;
	    line-height: 0.773333rem;
	    font-size: 0.346667rem;
	    font-family: PingFang SC;
	    font-weight: 500;
	    color: #333333;
	    margin-bottom: 0.133333rem;
 }
 .item-t {
  box-sizing: border-box;
  padding: 0.26667rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
 .item-t img {
  width: 1.813333rem;
  height: 1.813333rem;
  border-radius: 50%;
  float: left;
  margin-right: 0.28rem;
}
 .item-t .info {
  float: left;
  height: 1.813333rem;
}
 .item-t .info h2 {
  font-size: 0.4rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
}
 .item-t .info p {
  font-size: 0.346667rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
  margin-top: 0.266667rem;
}
 /*# sourceMappingURL=findPassword.css.map */
 
</style>
