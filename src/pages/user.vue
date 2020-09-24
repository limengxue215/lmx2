<template>
   <div class="my">
       <div class="header">
           <div class="btnicon">
               <img src="../assets/img/msg.png" alt=""><img src="../assets/img/set.png" alt="">
           </div>
           <div class="avator">
               <img src="../assets/img/headerimg.png" alt="">
               <div class="info">
                   <span>{{$route.query.user.nikename}}</span>
                   <span class="rank">普通会员</span>
                   <p class="tel">18097886888</p>
				   <p  @click="rem">注销账户</p>
               </div>
           </div>
       </div>
       <div class="main">
           <div class="asset">
               <ul>
                   <li>
                       <p><span>¥</span>{{$route.query.user.money | tofixed}}</p>
                       <p>可取资产</p>
                   </li>
                   <li>
                       <p><span>¥</span>{{$route.query.user.money | tofixed}}</p>
                       <p>网红基金</p>
                   </li>
                   <li>
                       <p><span>¥</span>{{($route.query.user.money )*2 | tofixed}}</p>
                       <p>总资产</p>
                   </li>
               </ul>
           </div>
           <div class="menu">
               <ul>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/ticket.png" alt="">
                           <span>我的订单</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/postion.png" alt="">
                           <span>收货地址</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/ticket.png" alt="">
                           <span>签约信息</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/wallet-icon.png" alt="">
                           <span>钱包充值</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/account.png" alt="">
                           <span>账单明细</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/personalinfo.png" alt="">
                           <span>个人信息</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/team.png" alt="">
                           <span>我的团队</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
                   <li>
                       <div class="menu-l">
                           <img src="../assets/img/notice.png" alt="">
                           <span>邀请好友</span>
                       </div>
                      <img src="../assets/img/icon-r.png" alt="" class="icon-r">
                   </li>
               </ul>
           </div>
       </div>
</div>
</template>

<script>
	import axios from '../plugins/axios.js'
  export default {
    name:'app',
    props:{},
    data(){
      return {
        
      }
    },
	beforeRouteEnter(to,from,next){
	  axios({
	    url:'/api/user'
	  }).then(
	    // res => res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next('/login')
	    res => {
	      if(res.data.err === 0) {
	        to.query.user = res.data.data
	        next()
	      }else{
	        next('/login')
	      }
	    }
	  )
	},
	
	beforeRouteUpdate(to,from,next){
	  axios({
	    url:'/api/user'
	  }).then(
	    // res => res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next('/login')
	    res => {
	      if(res.data.err === 0) {
	        to.query.user = res.data.data
	        next()
	      }else{
	        next('/login')
	      }
	    }
	  )
	},
	
    components:{},
    mounted(){
		
	},
	// filters:{
	// 	tofixed(data,n=2){
	// 		return  data.toFixed(n)
	// 	}
	// },
    updated(){},
    methods:{
		rem(){			
		window.localStorage.removeItem('user');
					this.$router.push('/login')
		}
	}
  }
</script>

<style>
  .my {
    background: #f6f4f9;
  }
  .my .header {
    height: 5.213333rem;
    width: 100%;
    color: #fff;
    line-height: 1.6rem;
    font-size: 0.453333rem;
    text-align: center;
    background: url("../assets/img/header-bg.png");
    background-size: contain;
  }
  .my .header .btnicon {
    text-align: right;
  }
  .my .header .btnicon img {
    width: 0.493333rem;
    height: 0.52rem;
    margin-right: 0.693333rem;
  }
  .my .header .avator {
    text-align: left;
    float: left;
  }
  .my .header .avator img {
    float: left;
    width: 1.44rem;
    height: 1.44rem;
    margin-left: 0.426667rem;
    margin-right: 0.333333rem;
  }
  .my .header .avator .info {
    float: left;
    margin-top: -0.4rem;
  }
  .my .header .avator .info span {
    font-size: 0.426667rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #f6f4f9;
  }
  .my .header .avator .info .rank {
    text-align: center;
    display: inline-block;
    width: 1.706667rem;
    height: 0.506667rem;
    background: #e8c756;
    border-radius: 19px;
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #98337d;
    line-height: 0.506667rem;
  }
  .my .header .avator .info .tel {
    height: 0.293333rem;
    font-size: 0.373333rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #f6f4f9;
    line-height: 0.64rem;
    opacity: 0.6;
    margin-top: -0.4rem;
  }
  .my .main {
    box-sizing: border-box;
    padding: 0.44rem;
	padding-top: 0.68rem;
  }
  .my .main .asset {
	  /* margin-top: 0.2rem; */
    height: 2.4rem;
    background: #fff;
    border-radius: 0.16rem;
    padding-top: 0.666667rem;
    text-align: center;
    margin-top: -2rem;
  }
  .my .main .asset ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .my .main .asset ul li p {
    font-size: 0.48rem;
    font-family: DIN Alternate;
    font-weight: bold;
    color: #222222;
  }
  .my .main .asset ul li p span {
    font-size: 0.373333rem;
  }
  .my .main .asset ul li p:last-child {
    margin-top: 0.506667rem;
    font-size: 0.346667rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  .my .main .menu {
    box-sizing: border-box;
    padding: 0.44rem;
    width: 9.146667rem;
    height: 11.333333rem;
    background: white;
    border-radius: 0.16rem;
    margin-top: 0.4rem;
  }
  .my .main .menu ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.333333rem;
  }
  .my .main .menu ul li .menu-l {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my .main .menu ul li .menu-l img {
    width: 0.4rem;
    height: 0.466667rem;
    margin-right: 0.4rem;
  }
  .my .main .menu ul li .menu-l span {
    font-size: 0.426667rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
  }
  .my .main .menu ul li .icon-r {
    width: 0.16rem;
    height: 0.28rem;
  }
</style>
