<template>
	<div class="app">
  <div class="myorder">
	  <uc-nav bgColor="transparent" ></uc-nav>
    <div class="header">
        <span><i class="layui-icon layui-icon-left"></i></span>
        <span>我的订单</span>
        <span></span>
    </div>
    <div class="menu">
        <ul>
            <li class="active">全部</li>
            <li>待付款</li>
            <li>待发货</li>
            <li>待收货</li>
            <li>已完成</li>
        </ul>
    </div>
 </div>
 </div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue'
  export default {
    name:'app',
    props:{},
    data(){
      return {
        
      }
    },
    components:{
		UcNav
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	/* width: 100%;
	position: fixed;
	top: 0;
	left: 0; */
	.app{position: relative;}
	.myorder{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 1000;
		background-color: #fff;
	}
  .myorder .header {	  
    box-sizing: border-box;
    padding: 0.44rem;
    display: flex;
    height: 1.173333rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0.426667rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
    border-bottom: 1px solid #eee;
  }
  .myorder .menu {
    box-sizing: border-box;
    padding-left: 0.44rem;
    padding-right: 0.44rem;
  }
  .myorder .menu ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.173333rem;
  }
  .myorder .menu ul li {
    height: 1.173333rem;
    font-size: 0.373333rem;
    line-height: 1.173333rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #333333;
  }
</style>
