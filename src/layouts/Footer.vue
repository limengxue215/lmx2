<template>

<div class="my">
	<div class="footer">
		<ul>
			<router-link to="/home" tag="li" active-class="active">
				<img src='../assets/img/index-checked.png' />
				<span>首页</span>
			</router-link>
			<router-link to="/shop" tag="li" active-class="active">
				<img src='../assets/img/shopping.png' />
				<span>商城</span>
			</router-link>
			<router-link to="/wallet" tag="li" active-class="active">
				<img src='../assets/img/wallet-icon.png' />
				<span>钱包</span>
			</router-link>
			<router-link to="/user" tag="li" active-class="active">
				<img src='../assets/img/my.png' />
				<span>我的</span>
			</router-link>

		</ul>
	</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
		props: {},
		data() {
			return {

			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	
/* 	.footer ul .home i{
			background-image: url(../assets/img/index2.png);
			width: 0.95rem;
			height: 0.8rem;
		}
		.footer ul .my i{
			background-image: url(../assets/img/my.png);
			width: 0.85rem;
			height: 0.8rem;
			
		}
		.footer ul .home.active i{
			background-image: url(../assets/img/index-checked.png);
			width: 0.95rem;
			height: 0.8rem;
		}
		.footer ul .my.active i{
			background-image: url(../assets/img/my1.png);
			width: 0.85rem;
			height: 0.8rem;
		} */

.my .footer {
  width: 100%;
  height: 1.6rem;
  background: linear-gradient(264deg, rgba(192, 59, 112, 0.97), rgba(74, 36, 152, 0.97));
  position:fixed; left:0; bottom:0; 
}
.my .footer ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.my .footer li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.my .footer li img {
  width: 0.48rem;
  height: 0.48rem;
}
.my .footer li span {
  font-size: 0.266667rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: white;
  line-height: 0.64rem;
  opacity: 0.5;
}
/* .active{
	background-color: #BABABA;
} */
</style>
