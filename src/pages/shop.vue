<template>
  <div class="setcenter">
    <div class="header">
      <span><i class="layui-icon layui-icon-left"></i></span>
      <span>我的团队</span>
      <span></span>
    </div>
    <div class="main">
      <ul>
        <li class="switchbtn">
          <span>直邀好友</span>
          <span>团队签约总业绩</span>
      </li>
      <li>
        <img src="../assets/img/teamlogo.png" alt="">
        <div class="rock">
            <span>百里守约</span>
            <span>27392890</span>
            <i>VIP1</i>
        </div>
      </li>
        <li>
          <img src="../assets/img/teamlogo.png" alt="">
          <div class="rock">
              <span>百里守约</span>
              <span>27392890</span>
              <i>VIP1</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'shop',
    props:{},
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

<style>
  .setcenter {
    box-sizing: border-box;
    padding: 0.44rem;
    padding-top: 0;
  }
  .setcenter .header {
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
  .setcenter .main .switchbtn {
    display: flex;
    justify-content: center;
    border: 0.013333rem solid #666666;
    border-radius: 0.586667rem;
    height: 1.173333rem;
    margin-top: 0.373333rem;
    margin-bottom: 0.533333rem;
  }
  .setcenter .main .switchbtn span {
    display: inline-block;
    width: 4.573333rem;
    height: 1.173333rem;
    line-height: 1.173333rem;
    font-size: 0.426667rem;
    font-family: PingFang SC;
    text-align: center;
    font-weight: 500;
    color: #222222;
    border-radius: 44px;
  }
  .setcenter .main .switchbtn span:first-child {
    width: 4.586667rem;
    height: 1.186667rem;
    background: #e8c756;
  }
  .setcenter .main li {
    border-bottom: 1px solid #eee;
    height: 1.706667rem;
    font-size: 0.426667rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.893333rem;
  }
  .setcenter .main li img {
    width: 1.066667rem;
    height: 1.066667rem;
    float: left;
    margin-right: 0.333333rem;
  }
  .setcenter .main li .rock {
    width: 90%;
    float: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .setcenter .main li .rock span {
    font-size: 0.373333rem;
    font-family: PingFang SC;
    font-weight: 500;
  }
  .setcenter .main li .rock i {
    font-style: italic;
    font-size: 0.426667rem;
    font-family: PingFang SC;
    color: #f2c62e;
  }
  
  /*# sourceMappingURL=myteam.css.map */
  
</style>
