<template>
  
   <div class="mywallet">
     <div class="header">
      <span>我的钱包</span>
     </div>
     <div class="main">
       <ul>
           <li class="item1">
             <div class="word">
               <p class="price"><span>¥</span>{{wallet.zi | tofixed}}</p>
               <p class="tips">资产钱包</p>
             </div>
           </li>
           <li class="item2">
             <div class="word">
               <p class="price"><span>¥</span>{{wallet.fen | tofixed}}</p>
               <p class="tips">分红钱包</p>
             </div> 
           </li>
           <li class="item3">
             <div class="word">
               <p class="price"><span>¥</span>{{wallet.wang | tofixed}}</p>
               <p class="tips">网红钱包</p>
             </div>
           </li>
           <li class="item4">
             <div class="word">
               <p class="price"><span>¥</span>{{wallet.yu | tofixed}}</p>
               <p class="tips">余额钱包</p>
             </div>  
           </li>
       </ul>
   </div>
   </div>
  
</template>

<script>
  export default {
    name:'app',
    props:{},
    data(){
      return {
        wallet:[]
      }
    },
    components:{},
    mounted(){
		this.$axios({
			url:'/api/wallet'
		}).then( res=>{
			// console.log(res.data.data)
			this.wallet = res.data.data
			})
	},
    updated(){},
    methods:{}
  }
</script>

<style>
 .mywallet .header {
   width: 100%;
   height: 1.706667rem;
   background: linear-gradient(264deg, rgba(192, 59, 112, 0.97), rgba(74, 36, 152, 0.97));
   text-align: center;
   line-height: 1.706667rem;
 }
 .mywallet .header span {
   font-size: 0.453333rem;
   font-family: "microsoft yahei";
   font-family: PingFang SC;
   font-weight: 500;
   color: white;
 }
 .mywallet .main {
   box-sizing: border-box;
   padding: 0.426667rem;
   overflow: hidden;
   background: #F6F4F9;
 }
 .mywallet .main li {
   float: left;
   width: 4.373333rem;
   height: 6.746667rem;
 }
 .mywallet .main li .word {
   text-align: center;
   margin-top: 4.28rem;
 }
 .mywallet .main li .word .price {
   font-size: 0.746667rem;
   font-family: DIN Alternate;
   font-weight: bold;
   color: #ea3169;
 }
 .mywallet .main li .word .price span {
   font-size: 0.506667rem;
 }
 .mywallet .main li .tips {
   font-size: 0.373333rem;
   font-family: PingFang SC;
   font-weight: 400;
   color: #999999;
   margin-top: 0.653333rem;
 }
 .mywallet .main .item1 {
   background: url("../assets/img/wallet1.png") no-repeat center;
   background-size: contain;
   margin-right: 0.32rem;
 }
 .mywallet .main .item2 {
   background: url("../assets/img/wallet2.png") no-repeat center;
   background-size: contain;
 }
 .mywallet .main .item3 {
   background: url("../assets/img/wallet3.png") no-repeat center;
   background-size: contain;
   margin-right: 0.32rem;
   margin-top: 0.426667rem;
 }
 .mywallet .main .item4 {
   background: url("../assets/img/wallet4.png") no-repeat center;
   background-size: contain;
   margin-top: 0.426667rem;
 }
 .mywallet .footer {
   width: 100%;
   height: 1.6rem;
   background: linear-gradient(264deg, rgba(192, 59, 112, 0.97), rgba(74, 36, 152, 0.97));
 }
 .mywallet .footer ul {
   height: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
 .mywallet .footer li {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 .mywallet .footer li img {
   width: 0.48rem;
   height: 0.48rem;
 }
 .mywallet .footer li span {
   font-size: 0.266667rem;
   font-family: PingFang SC;
   font-weight: 400;
   color: white;
   line-height: 0.64rem;
   opacity: 0.5;
 }
 
 /*# sourceMappingURL=mywallet.css.map */
 
</style>
