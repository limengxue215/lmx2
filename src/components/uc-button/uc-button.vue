<template>
  <div class="button">
    <button 
	class="uc-button"
	:style="{background:bgColor, width:wd}"
	@click="$emit('clicks',$event)"	
	> 
	<template v-if="text!=='确定'">
	  {{ text }}
	</template>
	
	 </button>
  </div>
</template>

<script>
  export default {
    name:'uc-button',
    props:{ 
		bgColor:{
			type:String,
			default:'#fff'
		},
		text:{
			type:String,
			default:'确定'
		}},
    data(){
      return {
      
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	
  .uc-button{
	    width: 8.986667rem;
	    height: 1.306667rem;
	    background: #e8c756;
	    border-radius: 0.653333rem;
	    font-size: 0.453333rem;
	    font-family: PingFang SC;
	    font-weight: 500;
	    color: #a0347a;
	    text-align: center;
	    line-height: 1.306667rem;
	    margin-top: 1rem;
	  
  }
  
</style>
