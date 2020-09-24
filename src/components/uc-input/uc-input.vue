<template>
  <div class="Input">
    <input 
	class="UcInput"
	:placeholder="pl"
	:type="type"
	:value="value"
	@input="$emit('input',$event.target.value)"	
	/>
	
  </div>
</template>

<script>
  export default {
    name:'Input',
    props:{
		type:{
		type:String,
		default:'text'
		},		
		value:{
			type: String,
			default: ''
		},
		pl:{
			type:String,
		    default:'请输入用户名',
			}
	},
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
 .UcInput{
    width: 8.626667rem;
    height: 1.306667rem;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 49px;
    margin: 0 auto;
    text-indent: 0.693333rem;
    font-size: 0.466667rem;
    border: 0px;
    outline: none;
    color: #fff;
    margin-top: 0.333333rem;
    margin-bottom: 0.333333rem;
  }
</style>
