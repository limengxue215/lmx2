<template>
  <div class="uc-cell" >
	  
	<div class="item"  @click="tofollow">
		<h2>网红{{data.detail.auth}}签约</h2>
		<div class="time">{{data.date1 | fillzero}}:{{data.date2 |fillzero}}</div>
		<span>签约时间</span>
		<div class="rate">10%-20%</div>
		<span>单次盈利</span>
		<a href="javascript:;" class="btn"  @click.stop="$emit('add-item',$event)">进入签约</a>
	</div>
  </div>
</template>

<script>
  export default {
    name:'uc-cell',
    props:{
      data:{
        type:Object,
        required:true
      },
      collectionName:{
        type:String,
        default:null
      },
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
    tofollow(){
		this.$router.push('/follow')
	}
    }
  }
</script>

<style scoped>
 .item {
 	float: left;
 	width: 4.646667rem;
 	height: 5.56rem;
 	background: url(../../assets/img/itembg.png) no-repeat center;
 	background-size: contain;
 	display: flex;
 	justify-items: center;
 	align-items: center;
 	flex-direction: column;
 }
  .item h2 {
 	font-size: 0.613333rem;
 	font-family: YouSheBiaoTiHei;
 	font-weight: 400;
 	color: white;
 	margin-top: 0.44rem;
 }
  .item .time {
 	width: 2.946667rem;
 	height: 0.613333rem;
 	margin-top: 0.34rem;
 	background: #74fbeb;
 	border-radius: 23px;
 	color: #3F1173;
 	font-size: 0.373333rem;
 	font-style: italic;
 	font-weight: bold;
 	text-align: center;
 	line-height: 0.613333rem;
 	font-family: "microsoft yahei";
 }
 
  .item .rate {
 	width: 3.48rem;
 	height: 0.613333rem;
 	margin-top: 0.34rem;
 	color: #fff;
 	background: linear-gradient(-90deg, #5849b3 0%, #e74983 100%);
 	border-radius: 23px;
 	font-size: 0.373333rem;
 	font-style: italic;
 	font-weight: bold;
 	text-align: center;
 	line-height: 0.613333rem;
 	font-family: "microsoft yahei";
 }
 
  .item span {
 	font-size: 0.32rem;
 	font-family: PingFang SC;
 	font-weight: 400;
 	color: white;
 	line-height: 0.64rem;
 	opacity: 0.6;
 	margin-top: 0.113333rem;
 }
 
 .home .main .item .btn {
 	width: 1.866667rem;
 	height: 0.573333rem;
 	font-size: 0.373333rem;
 	font-style: italic;
 	font-weight: bold;
 	text-align: center;
 	margin-top: 0.186667rem;
 	color: #fff;
 	text-decoration: none;
 	line-height: 0.573333rem;
 	font-family: "microsoft yahei";
 }
</style>
