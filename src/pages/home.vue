<template>
	<div class="home" v-if="banners&&list">
		
		<banner class="banner"  :data="banners" collectionName="banner"/>
		<van-notice-bar
		  left-icon="volume-o"
		  text="12:10分:提莫--已加入网红合作平台   
			全网热门网红聚集地.
			13:20分 :布丁--已加入网红合作平台 "
		/>
		<div class="main">
			<uc-cell
			 v-for="(item,index) of list"
			:key="item._id"
			:data="item"
			collectionName="home"
			
			/>
			
		</div>
	</div>
	<frame-screen v-else />
</template>

<script>
	import banner from '../components/banner/banner.vue'
    import UcCell from '../components/uc-cell/uc-cell.vue'
	import FrameScreen  from '../components/frame-screen.vue'
	export default {
		name: 'Home',
		props: {},
		data() {
			return {
               banners:[
				   // {_id:1,banner:"/images/2.jpg",title:'xx',sub_title:"xx"},
				   // {_id:2,banner:"/images/3.jpg",title:'xxxx',sub_title:"xxxx"},
			   ],
			   list:[]
			}
		},
		components: {banner,UcCell,FrameScreen,},
		mounted() {
		    //发送请求
			this.$axios({
				url:'/api/home',
				params:{_limit:8,_page:1}
			}).then(res=>{
				if(res.data.err===0){
				  // console.log(res.data.data)
				  this.list=res.data.data;
				}
				
			}),
			
			this.$axios({
				url:'/api/banner',
				params:{_limit:3,_page:1}
			}).then(res=>{
				// console.log(res.data.data)
				this.banners=res.data.data
			})
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	/* 	
	.banner{
		margin-top: 2.5rem;
	} */
	.home{
		background: purple;
	}
	.home .main {
		padding-top: 3.5rem;
		box-sizing: border-box;
		padding: 0.266667rem;
		overflow: hidden;
	}

	.home .main .item {
		float: left;
		width: 4.646667rem;
		height: 5.56rem;
		background: url("../assets/img/itembg.png") no-repeat center;
		background-size: contain;
		display: flex;
		justify-items: center;
		align-items: center;
		flex-direction: column;
	}

	.home .main .item h2 {
		font-size: 0.613333rem;
		font-family: YouSheBiaoTiHei;
		font-weight: 400;
		color: white;
		margin-top: 0.44rem;
	}

	.home .main .item .time {
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

	.home .main .item .rate {
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

	.home .main .item span {
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
